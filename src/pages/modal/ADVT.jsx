import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useRefreshTokenMutation } from '../../services/services';
import { useNavigate } from "react-router-dom";
import { Wrapper, GlobalStyle } from './styles/globalStyle';
import { useUploaNewADVTMutation } from '../../services/services';


import {
    ContainerBg,
    ModalBlock,
    ModalTitle,
    ModalBtnClose,
    ModalBtnCloseLine,
    ModalFormNewArt,
    FormNewArtBlock,
    FormNewArtLabel,
    FormNewArtInput,
    FormNewArtArea,
    FormNewArtP,
    FormNewArtPSpan,
    FormNewArtBarImg,
    FormNewArtImgContainer,
    FormNewArtImg,
    FormNewArtImgCover,
    FormNewArtBlockPrice,
    FormNewArtInputPrice,
    FormNewArtInputPriceCover,
    FormNewArtBtnPub,
    ModalContent,
    FormNewArtImgCoverInput,
    FormNewArtImgCoverInputLabel,
    AdvtImg
} from './styles/styledADVT';

const MainNotReg = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [inputAndAvaFilled, setInputAndAvaFilled] = useState();
    const [saveButtonActive, setSaveButtonActive] = useState(false);
    const [quantityOfPic, setQuantityOfPic] = useState(0);
    const [imgSelected, setImgSelected] = useState([]);
    const navigate = useNavigate();

    const [uploaNewADVT] = useUploaNewADVTMutation();
    const [refreshToken] = useRefreshTokenMutation();

    const handleUploaNewADVT = async (event) => {
        event.preventDefault();
        setSaveButtonActive(false);
        await refreshToken()
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);

        images.forEach((image, index) => {
            formData.append(`image${index + 1}`, image);
        });

        uploaNewADVT(formData);
        navigate("/profile", { replace: true });
    };

    const handlePhotoClick = async (event) => {
        event.preventDefault();
        const parentElement = event.target;

        if (parentElement.tagName === 'IMG') {
            return
        } else {
            const fileUpload = document.getElementById('file-upload');
            await fileUpload.click();
        }
    };


    const handleProductPictureUpload = async (event) => {
        const selectedFile = event.target.files[0];

        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            handleAddItemPhoto(selectedFile)
            console.log('Файл выбран');
            await refreshToken()
            setQuantityOfPic(quantityOfPic + 1)
            setSaveButtonActive(true);

            const selectedImg = URL.createObjectURL(selectedFile)
            setImgSelected([...imgSelected, { selectedImg }])

        };
    };

    const handleAddItemPhoto = (newItem) => {
        setImages((prevItems) => prevItems.concat(newItem));
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setInputAndAvaFilled(event.target.value)
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setInputAndAvaFilled(event.target.value)
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        setInputAndAvaFilled(event.target.value)
    };

    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea');
        let allAreEmpty = true;
        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                allAreEmpty = false;
            }
        });

        if (allAreEmpty) {
            setSaveButtonActive(false)
        } else {
            setSaveButtonActive(true)
        }
    }, [inputAndAvaFilled]);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContainerBg>
                    <ModalBlock>
                        <ModalContent>
                            <ModalTitle>Новое объявление</ModalTitle>
                            <NavLink to={`/profile`} replace>
                                <ModalBtnClose>
                                    <ModalBtnCloseLine></ModalBtnCloseLine>
                                </ModalBtnClose>
                            </NavLink>
                            <ModalFormNewArt>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="name">Название</FormNewArtLabel>
                                    <FormNewArtInput onChange={handleTitleChange} type="text" name="name" id="formName"
                                        placeholder="Введите название" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="text">Описание</FormNewArtLabel>
                                    <FormNewArtArea onChange={handleDescriptionChange} name="text" id="formArea" cols="auto" rows="10"
                                        placeholder="Введите описание" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtP >Фотографии товара<FormNewArtPSpan>не более 5 фотографий</FormNewArtPSpan></FormNewArtP>
                                    <FormNewArtBarImg>
                                        <FormNewArtImgContainer >
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={imgSelected === undefined || quantityOfPic < 1 ? '' :
                                                            (imgSelected[0]?.selectedImg ? imgSelected[0]?.selectedImg : `http://localhost:8090/${imgSelected[0]?.url}`)}
                                                        id='0'
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer >
                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 1 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={imgSelected === undefined || quantityOfPic < 2 ? '' :
                                                            (imgSelected[1]?.selectedImg ? imgSelected[1]?.selectedImg : `http://localhost:8090/${imgSelected[1]?.url}`)}
                                                        id='1'
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 2 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={imgSelected === undefined || quantityOfPic < 3 ? '' :
                                                            (imgSelected[2]?.selectedImg ? imgSelected[2]?.selectedImg : `http://localhost:8090/${imgSelected[2]?.url}`)}
                                                        id='2'
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 3 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={imgSelected === undefined || quantityOfPic < 4 ? '' :
                                                            (imgSelected[3]?.selectedImg ? imgSelected[3]?.selectedImg : `http://localhost:8090/${imgSelected[3]?.url}`)}
                                                        id='3'
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 4 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={imgSelected === undefined || quantityOfPic < 5 ? '' :
                                                            (imgSelected[4]?.selectedImg ? imgSelected[4]?.selectedImg : `http://localhost:8090/${imgSelected[4]?.url}`)}
                                                        id='4'
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                    </FormNewArtBarImg>
                                </FormNewArtBlock>
                                <FormNewArtBlockPrice>
                                    <FormNewArtLabel for="price">Цена</FormNewArtLabel>
                                    <FormNewArtInputPrice onChange={handlePriceChange} type="text" name="price" id="formName"></FormNewArtInputPrice>
                                    <FormNewArtInputPriceCover></FormNewArtInputPriceCover>
                                </FormNewArtBlockPrice>
                                <FormNewArtBtnPub
                                    active={!saveButtonActive ? '#D9D9D9' : '#009EE4'}
                                    activeHover={!saveButtonActive ? '#D9D9D9' : '#0080C1'}
                                    onClick={handleUploaNewADVT}
                                    id="btnPublish">
                                    Опубликовать
                                </FormNewArtBtnPub>
                            </ModalFormNewArt>
                        </ModalContent>
                    </ModalBlock>
                </ContainerBg>
            </Wrapper>
        </>
    );
};

export default MainNotReg;
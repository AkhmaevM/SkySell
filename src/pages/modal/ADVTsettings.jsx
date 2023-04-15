/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Wrapper, GlobalStyle } from './styles/globalStyle';
import { NavLink } from "react-router-dom";
import { useRefreshTokenMutation } from '../../services/services';
import { useGetAdvtByIdQuery } from '../../services/services';
import { useEditAdvtDataMutation } from '../../services/services';
import { useAddPhotoMutation } from '../../services/services';
import { useNavigate } from "react-router-dom";
import { useDeletePhotoMutation } from '../../services/services';

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

const AdvSettings = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState([]);
    const [saveButtonActive, setSaveButtonActive] = useState(false);
    const [quantityOfPic, setQuantityOfPic] = useState();
    const navigate = useNavigate();
    const [imgSelected, setImgSelected] = useState([]);

    const [refreshToken] = useRefreshTokenMutation();
    let { id } = useParams();
    const { data: advtData } = useGetAdvtByIdQuery(id);
    const [editAdvtData] = useEditAdvtDataMutation(id);
    const [addPhoto] = useAddPhotoMutation();
    const [deletePhoto] = useDeletePhotoMutation();

    const handleUploaEditADVT = async (e) => {
        e.preventDefault();
        await refreshToken()
        const userData = { title, description, price, id };
        await editAdvtData(userData)
        setSaveButtonActive(false)
        navigate("/profile", { replace: true });
    };

    const handlePhotoClick = async (e) => {
        e.preventDefault();
        const parentElement = e.target;

        if (parentElement.tagName === 'IMG') {
            if (confirm("Вы уверены, что хотите удалить фото?")) {
                await refreshToken()
                const imgURL = parentElement.src;
                const data = { id, imgURL }
                deletePhoto(data)
                setQuantityOfPic(quantityOfPic - 1)
                setSaveButtonActive(true)
            } else {
                return
            }

        } else {
            const fileUpload = document.getElementById('file-upload');
            await fileUpload.click();
        }
    };

    const handleProductPictureUpload = async (e) => {
        const selectedFile = e.target.files[0];

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
        setImage(newItem);
    };

    const handleTitleChange = () => {
        const titleInput = document.getElementById('formName');
        setTitle(titleInput.value);
    };

    const handleDescriptionChange = () => {
        const descriptionInput = document.getElementById('description');
        setDescription(descriptionInput.value);
    };

    const handlePriceChange = () => {
        const formPriceInput = document.getElementById('formPrice');
        setPrice(formPriceInput.value);
    };

    useEffect(() => {
        const titleInput = document.getElementById('formName');
        const descriptionInput = document.getElementById('description');
        const formPriceInput = document.getElementById('formPrice');

        if (
            titleInput.value === advtData?.title &&
            descriptionInput.value === advtData?.description &&
            formPriceInput.value === advtData?.price.toString()
        ) {
            setSaveButtonActive(false);
        } else {
            setSaveButtonActive(true);
        }
    }, [advtData?.title, advtData?.description, advtData?.price, title, description, price]);

    useEffect(() => {
        setQuantityOfPic(advtData?.images?.length)
        setImgSelected(advtData?.images)
    }, [advtData]);

    useEffect(() => {
        const addPhotoItem = { image, id }
        addPhoto(addPhotoItem)
    }, [addPhoto, id, image]);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContainerBg>
                    <ModalBlock>
                        <ModalContent>
                            <ModalTitle>Редактировать объявление</ModalTitle>
                            <NavLink to={`/profile`} replace>
                                <ModalBtnClose>
                                    <ModalBtnCloseLine></ModalBtnCloseLine>
                                </ModalBtnClose>
                            </NavLink>
                            <ModalFormNewArt>
                                <FormNewArtBlock>
                                    <FormNewArtLabel id='title' for="name">Название</FormNewArtLabel>
                                    <FormNewArtInput
                                        defaultValue={advtData?.title}
                                        onChange={handleTitleChange}
                                        type="text"
                                        name="name"
                                        id="formName"
                                        placeholder="Введите название" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="text">Описание</FormNewArtLabel>
                                    <FormNewArtArea
                                        defaultValue={advtData?.description}
                                        onChange={handleDescriptionChange} name="text" id="description" cols="auto" rows="10"
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
                                    <FormNewArtInputPrice
                                        defaultValue={advtData?.price}
                                        onChange={handlePriceChange}
                                        type="text"
                                        name="price"
                                        id="formPrice" />
                                    <FormNewArtInputPriceCover></FormNewArtInputPriceCover>
                                </FormNewArtBlockPrice>
                                <FormNewArtBtnPub
                                    active={!saveButtonActive ? '#D9D9D9' : '#009EE4'}
                                    activeHover={!saveButtonActive ? '#D9D9D9' : '#0080C1'}
                                    onClick={handleUploaEditADVT}
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

export default AdvSettings;
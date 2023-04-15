import React, { useState, useEffect } from 'react';
import { useGetCurrentUserMutation } from '../../services/services';
import { useRefreshTokenMutation } from '../../services/services';
import { useEditUserDataMutation } from '../../services/services';
import { useUploadUserAvatarMutation } from '../../services/services';
import { useGetCurrentUserAdvtQuery } from '../../services/services';
import { NavLink } from "react-router-dom";
import { Wrapper, GlobalStyle } from './globalStyle';
import Logo from './icons/logo.png';
import LogoMob from './icons/logo-mob.png';
import Footer from '../modal/footer';
import CardsItem from '../modal/cardsItem';
import * as S from './styledProfile'


const Profile = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [inputAndAvaFilled, setInputAndAvaFilled] = useState();
    const [saveButtonActive, setSaveButtonActive] = useState(false);
    const [imgSelected, setImgSelected] = useState([]);

    const [getCurrentUser, { data: currentUser }] = useGetCurrentUserMutation();
    const [editUserData] = useEditUserDataMutation();
    const [uploadUserAvatar] = useUploadUserAvatarMutation();
    const { data } = useGetCurrentUserAdvtQuery();
    const [refreshToken] = useRefreshTokenMutation();

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        await refreshToken();
        const userData = { phone, name, surname, city };
        editUserData(userData);
        setSaveButtonActive(false)
        getCurrentUser()
    };

    const handleQuit = async () => {
        localStorage.clear()
    };

    const handleAvatarClick = (e) => {
        e.preventDefault();
        const fileUpload = document.getElementById('file-upload');
        fileUpload.click();
        fileUpload.addEventListener('change', () => {
            if (fileUpload.files && fileUpload.files[0]) {
                setSaveButtonActive(true);
            }
        });
    }

    const handleAvatarUpload = (e) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            const formData = new FormData();
            formData.append('file', selectedFile);
            setInputAndAvaFilled(true)
            uploadUserAvatar(formData)

            const selectedImg = URL.createObjectURL(selectedFile)
            setImgSelected([{ selectedImg }])

        };
    }

    useEffect(() => {
        const fetchUserData = async () => {
            await refreshToken();
            await getCurrentUser();
        };
        fetchUserData();
    }, [getCurrentUser, refreshToken]);

    const handleNameChange = (e) => {
        setName(e.target.value);
        setInputAndAvaFilled(e.target.value)
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
        setInputAndAvaFilled(e.target.value)
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
        setInputAndAvaFilled(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setInputAndAvaFilled(e.target.value)
    }

    useEffect(() => {
        const inputs = document.querySelectorAll('input');
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

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser, 'currentUser')
        }
        return
    }, [currentUser]);

    useEffect(() => {
        setName(localStorage.user_register_name)
        setSurname(localStorage.user_register_surname)
        setCity(localStorage.user_register_city)
        setPhone(localStorage.user_register_phone)
    }, [currentUser]);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <S.Container>
                    <S.Header>
                        <S.Nav>
                            <S.Logo>
                                <NavLink to={`/`} replace>
                                    <S.MobileLogo src={LogoMob} />
                                </NavLink>
                            </S.Logo>
                            <NavLink to={`/addnewat`} replace>
                                <S.ButtonEnter>Разместить объявление</S.ButtonEnter>
                            </NavLink>
                            <NavLink to={`/`} replace>
                                <S.ExitAcc onClick={handleQuit}>Выйти из личного кабинета</S.ExitAcc>
                            </NavLink>
                        </S.Nav>
                    </S.Header>
                    <main>
                        <S.MainWrapper>
                            <S.CenterBlock>
                                <S.Menu>
                                    <S.MenuLink>
                                        <S.MenuLogo src={Logo} alt="logo" />
                                    </S.MenuLink>
                                    <S.Form>
                                        <NavLink to={`/`} replace>
                                            <S.ButtonExit id="btnGoBack">Вернуться на&nbsp;главную</S.ButtonExit>
                                        </NavLink>
                                    </S.Form>
                                </S.Menu>
                                <S.h2>Здравствуйте, {name}!</S.h2>
                                <S.Profile>
                                    <S.ProfileContent>
                                        <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                                        <S.ProfileSettings>
                                            <S.SettingsLeft>
                                                <S.SettingsWrapper>
                                                    <S.SettingsImage
                                                        src={imgSelected === undefined ? '' :
                                                            (imgSelected[0]?.selectedImg ? imgSelected[0]?.selectedImg : `http://localhost:8090/${currentUser?.avatar}`)}
                                                    />
                                                </S.SettingsWrapper >
                                                <label for="file-upload">
                                                    <S.ImageUpload
                                                        onClick={handleAvatarClick}>
                                                        Загрузить
                                                    </S.ImageUpload>
                                                </label>
                                                <S.InputImageUpload
                                                    id="file-upload"
                                                    type="file"
                                                    onChange={handleAvatarUpload}
                                                />
                                            </S.SettingsLeft>
                                            <S.SettingsRight>
                                                <S.SettingsForm>
                                                    <S.SettingsContainer>
                                                        <S.SettingsLabel for="settings-fname">Имя</S.SettingsLabel>
                                                        <S.ProfileInput
                                                            onChange={handleNameChange}
                                                            id="settings-fname"
                                                            name="fname"
                                                            type="text"
                                                            defaultValue={name} />
                                                    </S.SettingsContainer>
                                                    <S.SettingsContainer>
                                                        <S.SettingsLabel for="lname">Фамилия</S.SettingsLabel>
                                                        <S.ProfileInput onChange={handleSurnameChange}
                                                            id="settings-fname"
                                                            name="fname"
                                                            type="text"
                                                            defaultValue={surname} />
                                                    </S.SettingsContainer>
                                                    <S.SettingsContainer>
                                                        <S.SettingsLabel for="city">Город</S.SettingsLabel>
                                                        <S.ProfileInput onChange={handleCityChange}
                                                            id="settings-fname"
                                                            name="fname"
                                                            type="text"
                                                            defaultValue={city} />
                                                    </S.SettingsContainer>
                                                    <S.SettingsContainer>
                                                        <S.SettingsLabel for="phone">Телефон</S.SettingsLabel>
                                                        <S.ProfilePhoneInput onChange={handlePhoneChange}
                                                            id="settings-fname"
                                                            name="fname"
                                                            type="text"
                                                            defaultValue={phone} />
                                                    </S.SettingsContainer>
                                                    <S.ButtonSave
                                                        active={!saveButtonActive ? '#D9D9D9' : '#009EE4'}
                                                        activeHover={!saveButtonActive ? '#D9D9D9' : '#0080C1'}
                                                        onClick={handleSaveChanges}
                                                        id="settings-btn">
                                                        Сохранить
                                                    </S.ButtonSave>
                                                </S.SettingsForm>
                                            </S.SettingsRight>
                                        </S.ProfileSettings>
                                    </S.ProfileContent>
                                </S.Profile>
                                <S.ProfileTitle>Мои товары</S.ProfileTitle>
                            </S.CenterBlock>

                            <S.ProfileContent>
                                {data ? <S.ContentCards>
                                    {data.map((item) => (
                                        <CardsItem
                                            key={item?.id}
                                            myAdvt='myAdvt'
                                            id={item?.id}
                                            title={item?.title}
                                            price={item?.price}
                                            place={currentUser?.city}
                                            date={item.created_on?.split("T")[0]}
                                            picture={`http://localhost:8090/${item.images[0]?.url}`}
                                        />
                                    ))}
                                </S.ContentCards> : null}
                            </S.ProfileContent>
                        </S.MainWrapper>
                    </main >
                    <Footer media="620px" />
                </S.Container>
            </Wrapper>
        </>
    );
};

export default Profile
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from '../../services/services';
import logo from './icons/logo_modal.png';
import { Wrapper, GlobalStyle } from './globalStyle';
import Footer from '../modal/footer.jsx';
import * as S from './styledSignUp'


 const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');


    const navigate = useNavigate();
    const [registerUser, { data }] = useRegisterUserMutation();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password === repeatPassword) {

            const userData = { email, password, name, surname, city, phone };
            registerUser(userData);

        } else {
            alert("Пароли не совпадают")
        };
    };

    useEffect(() => {
        if (data) {
            navigate("/login", { replace: true });
        } else {
            return;
        }
    }, [data, navigate]);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
    }

    const handleFirstNameChange = (e) => {
        setName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setSurname(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <S.SignUpWrapper>
                    <S.Block>
                        <S.LoginForm id="formLogIn" action="#">
                            <S.Logo>
                                <S.LogoImg src={logo} alt="logo" />
                            </S.Logo>
                            <S.Input type="text" name="login" id="loginReg" placeholder="email" onChange={handleEmailChange} />
                            <S.Input type="password" name="password" id="passwordFirst" placeholder="Пароль" onChange={handlePasswordChange} />
                            <S.Input type="password" name="password" id="passwordSecond" placeholder="Повторите пароль" onChange={handleRepeatPasswordChange} />
                            <S.Input type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)" onChange={handleFirstNameChange} />
                            <S.Input type="text" name="first-last" id="first-last" placeholder="Фамилия (необязательно)" onChange={handleLastNameChange} />
                            <S.Input type="text" name="city" id="city" placeholder="Город (необязательно)" onChange={handleCityChange} />
                            <S.Input type="phone" name="phone" id="phone" placeholder="Телефон (необязательно)" onChange={handlePhoneChange} />
                            <S.ButtonSignup onClick={handleRegister} id="btnSignUp">Зарегистрироваться</S.ButtonSignup>
                        </S.LoginForm>
                    </S.Block>
                </S.SignUpWrapper>
                <Footer media="768px" />
            </Wrapper>
        </>
    );
};

export default SignUp
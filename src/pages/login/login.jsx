import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLoginMutation } from '../../services/services';
import Footer from '../modal/footer';
import FullLogo from './icons/skypro.png'
import * as S from './styledLogin'
import { GlobalStyle, Wrapper } from './globalStyles';

const Login = ()=>
{
    const [login, {data}] =useLoginMutation(); 
    const [password, setPassword] = useState('')   
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const loginHandler = (e)=>{
        e.preventDefault();
        const userData = {email, password};
        login(userData)
    }


    useEffect(()=>{
        if(data) {
            navigate('/profile', { replace: true})
        }
        else{
            return
        }
    }, [data, navigate])

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <>
            <GlobalStyle />
            <Wrapper>
                <S.ContainerEnter>
                    <S.Modal>
                        <S.LoginForm id="formLogIn" action="#">
                            <S.LogoWrapper>
                                <NavLink replace to={'/profile'}>
                                    <S.LogoImg src={FullLogo} />
                                </NavLink>
                            </S.LogoWrapper>

                            <S.Input
                             onChange={emailHandler}
                             type="text"
                             name="login"
                             id="formlogin"
                             placeholder="email"
                            />
                            
                            <S.InputPassword 
                                onChange={passwordHandler}
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />

                            <S.SignIn
                                id="btnEnter" onClick={loginHandler}
                            >
                                Войти
                            </S.SignIn>
                            
                            <NavLink to={`/registaration`} replace>
                                <S.SignUp id="btnSignUp" >
                                    Зарегистрироваться
                                    </S.SignUp>
                            </NavLink>

                        </S.LoginForm>
                        <Footer media="768px" />
                    </S.Modal>
                </S.ContainerEnter>
            </Wrapper>
        </>
    );
}

export default Login


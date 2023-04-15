
import React, { useState, useEffect } from 'react';
import { useDeleteAdvtMutation } from '../../services/services';
import { useRefreshTokenMutation } from '../../services/services';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetAlladvtQuery } from '../../services/services';
import { NavLink } from "react-router-dom";
import Logo from './icons/logo.png';
import LogoMob from './icons/logo-mob.png';
import Footer from '../modal/footer';
import { Wrapper, GlobalStyle } from './globalStyle';
import * as S from './styledProduct'

const Product = () => {
    const [adv, setAdv] = useState();
    const [selectedImg, setSelectedImg] = useState();
    const [nextImg, setNextImg] = useState(0);
    const [showPhone, setShowPhone] = useState(false);
    const { data } = useGetAlladvtQuery();
    const [deleteAdvt] = useDeleteAdvtMutation();
    const [refreshToken] = useRefreshTokenMutation();
    let { id, myadvt } = useParams();
    const navigate = useNavigate();

    const handleDeletedAdvt = async () => {
        await refreshToken()
        deleteAdvt(id)
        navigate("/profile", { replace: true });
    };

    const handleSelectImg = (e) => {
        setSelectedImg(e.target.src)
    };

    const showPhoneClick = () => {
        setShowPhone(true)
    };

    const handleNextPhotoClick = () => {
        const nextIndex = (nextImg + 1) % adv?.images.length;
        setNextImg(nextIndex);
        setSelectedImg(`http://localhost:8090/${adv?.images[nextIndex]?.url}`);
    };

    const HandleImgBarMobCircle = () => {
        const nextIndex = (nextImg + 1) % adv?.images.length;
        setNextImg(nextIndex);
        setSelectedImg(`http://localhost:8090/${adv?.images[nextIndex]?.url}`);
    };

    useEffect(() => {
        let i = 0
        let idNum = parseInt(id);
        for (i = 0; i < data?.length; i++) {
            if (data[i].id === idNum) {
                setAdv(data[i])
                break;
            }
        }
    }, [data, id]);

    useEffect(() => {
        setSelectedImg(`http://localhost:8090/${adv?.images[0]?.url}`)
    }, [adv]);

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
                                <S.ButtonEnter >Разместить объявление</S.ButtonEnter>
                            </NavLink>
                            <NavLink to={`/profile`} replace>
                                <S.ButtonEnter >Личный кабинет</S.ButtonEnter>
                            </NavLink>
                        </S.Nav>
                    </S.Header>
                    <main>
                        <S.MainWrapper>
                            <S.CenterBlock>
                                <S.Menu>
                                    <S.MenuLink>
                                        <S.MenuImg src={Logo} alt="logo" />
                                    </S.MenuLink>
                                    <S.Form>
                                        <NavLink to={`/`} replace>
                                            <S.ButtonExit id="btnGoBack">Вернуться на&nbsp;главную</S.ButtonExit>
                                        </NavLink>
                                    </S.Form>
                                </S.Menu>
                            </S.CenterBlock>
                        </S.MainWrapper>
                        <S.MainArtic>
                            <S.ArticContent>
                                <S.ArticleLeft>
                                    <S.ArticleFillImg >
                                        <S.ArticleImgContainer>
                                            <S.ArticleImg onClick={handleNextPhotoClick} src={selectedImg && selectedImg} />
                                        </S.ArticleImgContainer>
                                        <S.ArticleImgBar>
                                            {adv?.images?.slice(0, 5).map((image, index) => (
                                                <S.ArticleImgBarDiv key={index}>
                                                    <S.ArticleImgBarDivImg
                                                        onClick={handleSelectImg}
                                                        src={`http://localhost:8090/${image?.url}`}
                                                    />
                                                </S.ArticleImgBarDiv>
                                            ))}
                                        </S.ArticleImgBar>
                                        <S.ArticleImgBarMob containerWidth={`${adv?.images?.length * 11.333}px`}>
                                            {adv?.images?.map((img, index) => (
                                                <S.ImgBarMobCircle onClick={HandleImgBarMobCircle} id={index} key={index} active={nextImg === index ? '#FFFFFF' : ''} />
                                            ))}
                                        </S.ArticleImgBarMob>
                                    </S.ArticleFillImg>
                                </S.ArticleLeft>
                                <S.ArticleRight>
                                    <S.ArticleBlock>
                                        <S.ArticleTitle>{adv?.title}</S.ArticleTitle>
                                        <S.ArticleInfo>
                                            <S.ArticleDate>{adv?.created_on.split("T")[0]}</S.ArticleDate>
                                            <S.ArticleCity>{adv?.user.city}</S.ArticleCity>
                                            <NavLink to={`/reviews`} replace>
                                                <NavLink to={`/reviews/${id}`} replace>
                                                    <S.ArticleLink>Отзывы</S.ArticleLink>
                                                </NavLink>
                                            </NavLink>
                                        </S.ArticleInfo>
                                        <S.ArticlePrice>{adv?.price} ₽</S.ArticlePrice>
                                        <S.ArticleBtn myadvt={myadvt ? 'none' : ''} onClick={showPhoneClick}>Показать&nbsp;телефон
                                            <S.ArticleBtnSpan>
                                                {!showPhone
                                                    ? `${adv?.user.phone.substring(0, 1)}${adv?.user.phone.substring(1, 4)} XXX XX XX`
                                                    : adv?.user.phone
                                                }
                                            </S.ArticleBtnSpan>
                                        </S.ArticleBtn>
                                        <S.ArticleBtnBlock myadvt={!myadvt ? 'none' : 'flex'}>
                                            <S.StyledNavLink to={`/settings/${id}`} replace>
                                                <S.ArticleBtnRedact>Редактировать</S.ArticleBtnRedact>
                                            </S.StyledNavLink>
                                            <S.ArticleBtnRemove onClick={handleDeletedAdvt}>Снять с публикации</S.ArticleBtnRemove>
                                        </S.ArticleBtnBlock>
                                        <S.ArticleAuthor>
                                            <S.AuthorImgContainer>
                                                <S.AuthorImg src={`http://localhost:8090/${adv?.user.avatar}`} />
                                            </S.AuthorImgContainer>
                                            <S.AuthorCont>
                                                <NavLink to={myadvt ? '/profile' : `/seller/${id}`} replace>
                                                    <S.AuthorName>{adv?.user.name}</S.AuthorName>
                                                </NavLink>
                                                <S.AuthorAbout>Продает товары с&nbsp;{adv?.user.sells_from}</S.AuthorAbout>
                                            </S.AuthorCont>
                                        </S.ArticleAuthor>
                                    </S.ArticleBlock>
                                </S.ArticleRight>
                            </S.ArticContent>
                        </S.MainArtic>
                        <S.MainWrapper>
                            <S.Title>
                                Описание товара
                            </S.Title>
                            <S.MainContent>
                                <S.MainText>
                                    {adv?.description}
                                </S.MainText>
                            </S.MainContent>
                        </S.MainWrapper>
                    </main >
                    <Footer media="768px" />
                </S.Container>
            </Wrapper>
        </>
    );
};

export default Product
import React, { useState, useEffect } from 'react';
import { useGetAlladvtQuery } from '../../services/services';
import { useParams } from "react-router-dom";
import Logo from './icons/logo.png';
import LogoMob from './icons/logo-mob.png';
import Footer from '../modal/footer';
import CardsItem from '../modal/cardsItem';
import { NavLink } from "react-router-dom";
import { Wrapper, GlobalStyle } from './globalStyle';
import * as S from './styledSalesman'

const Salesman = () => {
    let { id } = useParams();
    const { data } = useGetAlladvtQuery();
    const [adv, setAdv] = useState();
    const [showPhone, setShowPhone] = useState(false);
    const [sellerAdvs, setSellerAdvs] = useState([]);

    const showPhoneClick = () => {
        setShowPhone(true)
    };

    useEffect(() => {
        let i = 0
        let idToNumber = parseInt(id);
        for (i = 0; i < data?.length; i++) {
            if (data[i].id === idToNumber) {
                setAdv(data[i])
                break;
            }

        }
    }, [data, id]);

    useEffect(() => {
        if (adv?.user) {
            let userId = adv.user_id;
            let sellerAdvs = data.filter(item => item.user_id === userId);
            setSellerAdvs(sellerAdvs);
        }
    }, [adv, data]);

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
                            <NavLink to={`/profile`} replace>
                                <S.ButtonSalesman>Личный кабинет</S.ButtonSalesman>
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
                                <S.h2>Профиль продавца</S.h2>
                                <S.Salesman>
                                    <S.SalesmanContent>
                                        <S.SalesmanSaleBox>
                                            <S.SaleLeftBox>
                                                <S.SaleWrapper>
                                                    <S.SaleLogo src={`http://localhost:8090/${adv?.user.avatar}`} />
                                                </S.SaleWrapper>
                                            </S.SaleLeftBox>
                                            <S.SaleRighttBox>
                                                <S.SaleTitle>{adv?.user.name}</S.SaleTitle>
                                                <S.SalesmanCity>{adv?.user.city}</S.SalesmanCity>
                                                <S.SalesmanDate>Продает товары с {adv?.user.sells_from}</S.SalesmanDate>
                                                <S.MobileBlock>
                                                    <S.MobileWrapper>
                                                        <S.MobileSalesmanImg src={`http://localhost:8090/${adv?.user.avatar}`} />
                                                    </S.MobileWrapper>
                                                </S.MobileBlock>
                                                <S.SalesmanButton onClick={showPhoneClick}>Показать&nbsp;телефон
                                                    <S.SalesmanSpan>
                                                        {!showPhone
                                                            ? `${adv?.user.phone.substring(0, 1)}${adv?.user.phone.substring(1, 4)} XXX XX XX`
                                                            : adv?.user.phone
                                                        }
                                                    </S.SalesmanSpan>
                                                </S.SalesmanButton>
                                            </S.SaleRighttBox>
                                        </S.SalesmanSaleBox>
                                    </S.SalesmanContent>
                                </S.Salesman>
                                <S.Title>Товары продавца</S.Title>
                            </S.CenterBlock>
                            <S.MainContent>
                                <S.Cards>
                                    {sellerAdvs?.map((item) => (
                                        <CardsItem
                                            key={item?.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            place={item.user.city}
                                            date={item.created_on.split("T")[0]}
                                            picture={`http://localhost:8090/${item.images[0]?.url}`}
                                        />
                                    ))}
                                </S.Cards>
                            </S.MainContent>
                        </S.MainWrapper>
                    </main >
                    <Footer media="580px" />
                </S.Container>
            </Wrapper>
        </>
    );
};

export default Salesman
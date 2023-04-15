import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { useGetAlladvtQuery } from '../../services/services'
import Logo from './icons/logo.png'
import LogoMob from './icons/logo-mob.png'
import CardsItem from "../../pages/modal/cardsItem"
import Footer from '../../pages/modal/footer';
import * as S from './styledStartPage'

export const StartPage = () =>{
    const {data} =  useGetAlladvtQuery();
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInputChange = (e) => {
        setSearchInputValue(e.target.value);
    };

    const HandleSearchClick = async (e) => {
        e.preventDefault();
        SearchProducts(data, searchInputValue)
    }

    const SearchProducts = async (data, keyword) => {
        const regex = new RegExp(keyword, 'i');
        const results = data.filter(product => regex.test(product?.title) || regex.test(product?.description));
        setSearchResults(results);
    }

    useEffect(() => {
        if (data) {
            setSearchResults(data);
        }
    }, [data]);


    return(
        <S.Container>
            <S.Header>
            <S.Navigation>
                    <NavLink replace to={localStorage.user_register_id ? `/profile` : `/signup`} >
                        <S.HeaderButtonEnter>Вход в личный кабинет</S.HeaderButtonEnter>
                    </NavLink>
                </S.Navigation>
            </S.Header>

            <main>
                <S.MainSearch>
                    <S.SearchLogo>
                        <S.MainLogo src={Logo}></S.MainLogo>
                    </S.SearchLogo>
                    <S.MobileLogoWrapper>
                        <S.MobileLogo src={LogoMob}></S.MobileLogo>
                    </S.MobileLogoWrapper>
                    <S.Form>
                        <S.InputSearch onChange={handleSearchInputChange}
                            type="search"
                            placeholder="Поиск по объявлениям"
                            name="search" />
                        <S.InputSearchMobile
                            type="search"
                            placeholder="Поиск"
                            name="search-mob" />
                        <S.ButtonSearch
                            onClick={HandleSearchClick}>
                            Найти
                        </S.ButtonSearch>
                    </S.Form>
                </S.MainSearch>

                <S.MainContainer>
                    <S.h2>Объявления</S.h2>
                    <S.Content>
                        <S.CardsContent>
                             {searchResults === '' ? data.map((item) => (
                                <CardsItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    place={item.user.city}
                                    date={item.created_on.split("T")[0]}
                                    picture={`http://localhost:8090/${item.images[0]?.url}`}
                                />
                            )) :
                                searchResults.map((item) => (
                                    <CardsItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        place={item.user.city}
                                        date={item.created_on.split("T")[0]}
                                        picture={`http://localhost:8090/${item.images[0]?.url}`}
                                    />
                                ))}
                        </S.CardsContent>
                    </S.Content>
                </S.MainContainer>
            </main>
            <Footer media='590px' />
        </S.Container>
    )

}


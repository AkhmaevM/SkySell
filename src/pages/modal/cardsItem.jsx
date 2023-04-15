import { NavLink } from "react-router-dom";
import * as S from './styles/styledCards'



 const CardsItem = ({ id, title, price, place, date, myAdvt, picture }) => {

    return (
        <S.Item>
            <S.Card>
                <NavLink to={myAdvt ? `/product/${myAdvt}/${id}` : `/product/${id}`} replace>
                    <S.ImageContainer>
                        <S.Image src={picture} alt="picture" />
                    </S.ImageContainer>
                </NavLink>
                <S.Container>
                    <NavLink to={myAdvt ? `/product/${myAdvt}/${id}` : `/product/${id}`} replace>
                        <S.Title>{title}</S.Title>
                    </NavLink>
                    <S.Price>{price} ₽</S.Price>
                    <S.Place>{place}</S.Place>
                    <S.Date>{date}</S.Date>
                </S.Container>
            </S.Card>
        </S.Item>
    );
};

export default CardsItem
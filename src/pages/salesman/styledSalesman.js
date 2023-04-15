// import styled, { css } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const Header = styled.header`
  background-color: #009EE4;

  @media screen and (max-width: 620px) {
    width: 100%;
    height: 55px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    }
`;

export const Nav = styled.nav`
    max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 620px) {
    height: 55px;
    justify-content: start;
    padding: 0 20px;
    }
`;

export const Logo = styled.div`
  display: none;

  @media screen and (max-width: 620px) {
    display: block;
    }
`;

export const MobileLogoWrapper = styled.div`
    display: block;
    width: 32px;
    height: 32px;
`;

export const MobileLogo = styled.img`
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
`;


export const ButtonEnter = styled.button`
  width: 232px;
  height: 40px;
    border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;

  &:hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
  }

  @media screen and (max-width: 620px) {
  display: none;
    }
`;

export const ButtonSalesman = styled.button`
  width: 173px;
  height: 40px;
  margin-left: 10px;
    border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;

  &:hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
}

  @media screen and (max-width: 620px) {
  display: none;
    }
`;

export const Main = styled.main`
  width: 224px;
  height: 40px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;

  &:hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
}
`;

export const MainWrapper = styled.div`
  max-width: 1178px;
  margin: 0 auto;
 
 @media screen and (max-width: 768px) {
      padding: 85px 0px 84px;
  }
`;

export const CenterBlock = styled.div`
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (max-width: 620px) {
    margin: 0 auto;
    padding: 0 20px;
    }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 31px 10px 64px;

  @media screen and (max-width: 620px) {
   display: none;
    }
`;

export const MenuLink = styled.div`
  width: 54;
  height: 50px;
`;

export const MenuLogo = styled.img`
  width: 54px;
  height: auto;
`;

export const Form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;

export const ButtonExit = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #009EE4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;

  &:hover {
  background-color: #0080C1;
}
`;


export const h2 = styled.h2`
  font-style: normal;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media screen and (max-width: 580px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;

    &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 0;
    cursor: pointer;
  }
    }
`;

export const Salesman = styled.div`
  width: 100%;
  padding: 0 0 70px;

  @media screen and (max-width: 580px) {
    width: 100%;
    padding: 0 0 40px;
    }
`;

export const SalesmanContent = styled.div`
  width: 100%;

  @media screen and (max-width: 580px) {
    max-width: 100%;
    width: 100%;
    }

    @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;

export const SalesmanSaleBox = styled.div`
    display: flex;
  align-items: top;
  justify-content: start;

  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
    }

    @media screen and (max-width: 890px) {
 flex-wrap: wrap;
  }
`;

export const SaleLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 580px) {
    display: none;
    margin-right: 0px;
    }
`;

export const SaleWrapper = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;

  @media screen and (max-width: 580px) {
    display: none;
    }
`;

export const SaleLogo = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;

  @media screen and (max-width: 580px) {
    display: none;
    }
`;

export const SaleRighttBox = styled.div`
  width: auto;

  @media screen and (max-width: 580px) {
    width: 100%;
    }
`;

export const SaleTitle = styled.h3`
    font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;

  @media screen and (max-width: 580px) {
       font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
    }
`;

export const SalesmanCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 10px;

  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 6px;
    }
`;

export const SalesmanDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 10px;

  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 6px;
    }
`;

export const MobileBlock = styled.div`
  display: none;

  @media screen and (max-width: 580px) {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
    }
`;

export const MobileWrapper = styled.div`
  @media screen and (max-width: 580px) {
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #F0F0F0;
    }
`;

export const MobileSalesmanImg = styled.img`
  @media screen and (max-width: 580px) {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
    }
`;

export const SalesmanButton = styled.button`
  margin-top: 20px;
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  width: 214px;
  height: 62px;
  font-size: 16px;
   font-weight: 600;
  line-height: 22px;
  color: #FFFFFF;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 580px) {
    width: 100%;
    height: 57px;
    font-size: 16px;
     font-weight: 600;
    line-height: 20px;
    }
`;

export const SalesmanSpan = styled.span`
  display: block;
  font-size: 14px;
   font-weight: 600;

  @media screen and (max-width: 580px) {
    font-size: 12px;
    }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 40px;
   font-weight: 600;
  color: #000000;

  @media screen and (max-width: 580px) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
    }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 580px) {
    width: 100%;
    margin: 0 auto;
    }
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  height: 441px;

  &::-webkit-scrollbar {
  display: none;
}

  @media screen and (max-width: 1158px) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: 890px) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: 580px) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 596px;
    }
`;

export const CardsItem = styled.div`
  margin: 0;

  @media screen and (max-width: 580px) {
    margin: 0;
    }
`;

export const СardsСard = styled.div`
    width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 580px) {
       width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 14px;
    border-radius: 6px;
    }
`;

export const CardImageContainer = styled.div`
  width: 270px;
  height: 270px;
  background-color: #F0F0F0;

  @media screen and (max-width: 580px) {
    width: 137px;
    height: 132px;
    background-color: #D9D9D9;
        border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;

  @media screen and (max-width: 580px) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
               border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    }
`;

export const CardInfoContainer = styled.div`
  @media screen and (max-width: 580px) {
    padding-left: 10px;
    }
`;

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
   font-weight: 600;
  line-height: 26px;
  color: #009EE4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 580px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009EE4;
    margin-bottom: 10px;
    margin-top: 10px;
    }
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
   font-weight: 600;
  line-height: 33px;
  margin-bottom: 10px;

  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 24px;
    }
`;

export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
    margin-bottom: 4px;

  @media screen and (max-width: 580px) {
    font-size: 12px;
    line-height: 16px;
    color: #5F5F5F;
    }
`;

export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;

  @media screen and (max-width: 580px) {
    font-size: 12px;
    line-height: 16px;
    color: #5F5F5F;
    }
`;





import styled from "styled-components"

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;

  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #FFFFFF;
    }
`;

export const Header = styled.header`
  background-color: #009EE4;

  @media screen and (max-width: 590px) {
    display: none;
    }
`;

export const Navigation = styled.nav`
    max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const HeaderButton = styled.button`
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

export const HeaderButtonEnter = styled.button`
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

export const MainSearch = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;

  @media screen and (max-width: 590px) {
    width: 100%;
    height: 55px;
    background-color: #009EE4;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    }
`;

export const SearchLogo = styled.a`
@media screen and (max-width: 590px) {
   display: none;
}
`;

export const MainLogo = styled.img`
  width: 54px;
  height: auto;
}
`;

export const Form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
  @media screen and (max-width: 590px) {
        margin-left: 10px;
    max-width: 1044px;
    width: 100%;
    display: flex;
}
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::-moz-placeholder {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

&::placeholder {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  }

  @media screen and (max-width: 590px) {
  display: none;
  }
`;

export const InputSearchMobile = styled.input`
  display: none;

  @media screen and (max-width: 590px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #FFFFFF;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    
    &::-moz-placeholder {
    background-color: transparent;
    color: #B3B3B3;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    }

    &::placeholder {
    background-color: transparent;
    color: #B3B3B3;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    }
  }
`;

export const MobileLogoWrapper = styled.div`
 display: none;

 @media screen and (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const MobileLogo = styled.img`
@media screen and (max-width: 590px) {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
}
`;

export const ButtonSearch = styled.button`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #009EE4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;

    &:hover {
  background-color: #0080C1;
  }

   @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
  @media screen and (max-width: 590px) {
        padding: 85px 10px 84px;
}
`;

export const h2 = styled.h2`
  font-style: normal;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
  }

  @media screen and (max-width: 590px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
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
    left: 13px;
    cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 590px) {
        width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
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
  scrollbar-color: #FFFFFF #2E2E2E;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;

  &::-webkit-scrollbar {
  width: 0px;
  background-color: #009EE4;
    }
  &::-webkit-scrollbar-thumb {
  background-color: #0080C1;
  border-radius: 3px;
    }
}
`;


export const CardsItem = styled.div`
  margin: 0;
  
  @media screen and (max-width: 590px) {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const CardWrapper = styled.div`
  @media screen and (max-width: 620px) {
   padding-left: 10px;
    }
`;

export const CardsContent = styled.div`
    max-width: 1158px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    justify-content: center;
    overflow-y: auto;
    scrollbar-color: #FFFFFF #2E2E2E;
    scrollbar-width: thin;
    scrollbar-width: 0px;
    height: 922px;

  &::-webkit-scrollbar {
  width: 0px;
  background-color: #009EE4;
  }

  &::-webkit-scrollbar-thumb {
  background-color: #0080C1;
  border-radius: 3px;
  }

  @media screen and (max-width: 1158px) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: 890px) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
    }

  @media screen and (max-width: 620px) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
   height: 100%;
    }
`;

export const CardsList = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 590px) {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    }
}
`;

export const CardImageWrapper = styled.div`
  width: 270px;
  height: 270px;
  background-color: #F0F0F0;

  @media screen and (max-width: 590px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #D9D9D9;
    }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;

  @media screen and (max-width: 590px) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    }
`;

export const CardSubtitle = styled.h3`
  height: 52px;
  font-size: 22px;
  line-height: 26px;
  color: #009EE4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 590px) {
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
  line-height: 33px;
  margin-bottom: 10px;
 
 @media screen and (max-width: 590px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
   margin-bottom: 4px;

   @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5F5F5F;
}
`;

export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;

  @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5F5F5F;
    }
`;

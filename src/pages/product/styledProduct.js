
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const Header = styled.header`
  background-color: #009EE4;

  @media screen and (max-width: 728px) {
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

  @media screen and (max-width: 728px) {
    height: 55px;
    justify-content: start;
    padding: 0 20px;
    }
`;

export const Logo = styled.div`
  display: none;

  @media screen and (max-width: 728px) {
    display: block;
    }
`;

export const LogoMobLink = styled.div`
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

  @media screen and (max-width: 728px) {
  display: none;
    }
`;

export const HeaderBtnLk = styled.button`
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

  @media screen and (max-width: 728px) {
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
  padding: 0px 5px;
 
 @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`;

export const CenterBlock = styled.div`
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (max-width: 728px) {
    margin: 0 auto;
    padding: 0 20px;
    }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  padding: 43px 5px 77px;

  @media screen and (max-width: 728px) {
   display: none;
    }
`;

export const MenuLink = styled.div`
  width: 54;
  height: 50px;
`;

export const MenuImg = styled.img`
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

export const MainH2 = styled.h2`
  font-style: normal;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media screen and (max-width: 728px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    }
`;

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;

  @media screen and (max-width: 728px) {
    width: 100%;
    padding: 0 0 40px;
    }
`;

export const ProfileContent = styled.div`
  max-width: 834px;

  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
    }
`;

export const ProfileTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
    line-height: 70px;
    color: #000000;

    @media screen and (max-width: 728px) {
          font-size: 18px;
    line-height: 1;
      }
`;

export const ProfileSettings = styled.div`
  margin-bottom: 20px;

    display: flex;
    justify-content: center;

  @media screen and (max-width: 890px) {
   flex-wrap: wrap;
    }
`;

export const SettingsLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 43px;

  @media screen and (max-width: 728px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    }
`;

export const SettingsImgContainer = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;

  @media screen and (max-width: 728px) {
    width: 132px;
    height: 132px;
    }
`;

export const SettingsImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const SettingsChangePhoto = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009EE4;
`;

export const SettingsRight = styled.div`
  width: 630px;

  @media screen and (max-width: 728px) {
    width: 100%;
    }
`;

export const SettingsForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  
  @media screen and (max-width: 728px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    }
`;

export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media screen and (max-width: 728px) {
    display: inline-block;
    margin: 0 0px 18px;
    }
`;

export const SettingsFormLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #C4C4C4;
  margin-bottom: 4px;
  display: block;

  @media screen and (max-width: 728px) {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
    margin-bottom: 6px;
    }
`;

export const SettingsFormInput = styled.input`
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
   width: 300px;
           &: focus {
    border: 2px solid #009EE4;

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 728px) {
    font-size: 14px;
    line-height: 21px;
    }
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 728px) {
    font-size: 14px;
    line-height: 21px;
    }
    }
  }

      @media screen and (max-width: 728px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;
    } 
  }
`;

export const SettingsPhoneInput = styled.input`
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  width: 614px;
          &: focus {
    border: 2px solid #009EE4;
    } 

    @media screen and (max-width: 728px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

  }

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 728px) {
    font-size: 14px;
    line-height: 21px;
    }
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 728px) {
    font-size: 14px;
    line-height: 21px;
    }
  }
`;

export const SettingsBtn = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;

  @media screen and (max-width: 728px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
    }

    &:hover {
  background-color: #0080C1;
  }
`;


export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
    line-height: 70px;
    color: #000000;

  @media screen and (max-width: 728px) {
    margin-bottom: 30px;
        font-size: 18px;
    line-height: 1;
    }
`;

export const ContentCards = styled.div`
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
  height: 441px;

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

  @media screen and (max-width: 728px) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 596px;
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

//--------------------------CardsItem----------------------------------------

export const CardsItem = styled.div`
  margin: 0;
}
`;

export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 728px) {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    }
}
`;

export const CardImageContainer = styled.div`
  width: 270px;
  height: 270px;
  background-color: #F0F0F0;

  @media screen and (max-width: 728px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #D9D9D9;
    }
`;

export const CardContainer = styled.div`
  @media screen and (max-width: 728px) {
   padding-left: 10px;
    }
`;


export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;

  @media screen and (max-width: 728px) {

    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
    }
`;

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  line-height: 26px;
  color: #009EE4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 728px) {
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
 
 @media screen and (max-width: 890px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
   margin-bottom: 4px;

   @media screen and (max-width: 890px) {
    font-size: 12px;
    line-height: 16px;
    color: #5F5F5F;
}
`;

export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;

  @media screen and (max-width: 890px) {
      font-size: 12px;
    line-height: 16px;
    color: #5F5F5F;
    }
`;

// -----------------------------------АРТИКУЛ САМОГО ТОВАРА

export const MainArtic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media screen and (max-width: 768px) {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
    }
`;

export const ArticContent = styled.div`
  display: flex;
  align-items: top;
 

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media screen and (max-width: 966px) {
    margin-right: 20px;
    }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
    }
`;

export const ArticleFillImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

export const ArticleImgContainer = styled.div`
  width: 480px;
  height: 480px;
  background-color: #F0F0F0;
  margin: 0 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
    }
`;

export const ArticleImg = styled.img`
  width: 100%;
  height: 480px;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;

  @media screen and (max-width: 768px) {
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
    }
`;

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;

  @media screen and (max-width: 768px) {
    display: none;
    }
`;

export const ArticleImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #F0F0F0;
  border: 2px solid #F0F0F0;
  margin: 0 5px;

  &:hover {
  border: 2px solid #009EE4;
  }
`;

export const ArticleImgBarDivImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
`;

export const ArticleImgBarMob = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: ${props => props.containerWidth};
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 34px);
    display: flex;
    justify-content: space-between;
    }
`;

export const ImgBarMobCircle = styled.div`
  background-color: ${props => props.active};
  &:active {
  background-color: #FFFFFF;
  }

  @media screen and (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    }
`;

export const ArticleRight = styled.div`
  max-width: 621px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
    }
`;

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleTitle = styled.h3`
    margin-bottom: 10px;
      font-size: 32px;
  line-height: 46px;
  color: #000000;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
        font-size: 18px;
    line-height: 1;
    }
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    }
`;

export const ArticleDate = styled.p`
    font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
        font-size: 14px;
    line-height: 17px;
    color: #5F5F5F;
    margin-bottom: 4px;
    }
`;

export const ArticleCity = styled.p`
    font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
        font-size: 14px;
    line-height: 17px;
    color: #5F5F5F;
    margin-bottom: 4px;
    }
`;

export const ArticleLink = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #009EE4;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 19px;
    color: #009EE4;
    }
`;

export const ArticlePrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
    }
`;

export const ArticleBtn = styled.button`
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #FFFFFF;
  font-family: "Roboto", sans-serif;
  display: ${props => props.myadvt};

  @media screen and (max-width: 890px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    }
`;

export const ArticleBtnSpan = styled.span`
  display: block;
  font-size: 14px;

  @media screen and (max-width: 890px) {
    font-size: 12px;
    }
`;

export const ArticleAuthor = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
    }
`;

export const AuthorImgContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #F0F0F0;
  border-radius: 50%;
`;

export const AuthorImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
`;

export const AuthorCont = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009EE4;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
    }
`;

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5F5F5F;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
    }
`;

//------------------------------ОПИСАНИЕ ТОВАРА ВНИЗУ--------------------------------------

export const Maintitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
    font-size: 32px;
  line-height: 46px;
  color: #000000;

  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
    padding: 0;
        font-size: 18px;
    line-height: 1;
    }
`;

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
    }
`;

export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;




export const ArticleBtnBlock = styled.div`
  display: ${props => props.myadvt};
  flex-wrap: wrap;
`;

export const ArticleBtnRedact = styled.button`
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #FFFFFF;
  margin-bottom: 10px;
  width: 189px;
  margin-right: 10px;

  &:hover {
  background-color: #0080C1;
  }

    @media screen and (max-width: 966px) {
    width: 225px;
    margin-right: 0;
    }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    }
`;

export const ArticleBtnRemove = styled.button`
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #FFFFFF;
  margin-bottom: 10px;
 width: 225px;

  &:hover {
  background-color: #0080C1;
  }

    @media screen and (max-width: 966px) {
      width: 225px;
    margin-right: 0;
    }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    }
`;

export const StyledNavLink = styled(NavLink)`

  @media (max-width: 768px) {
    width: 100%;
  }
`;

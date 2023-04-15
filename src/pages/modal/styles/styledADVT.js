
import styled, { css } from "styled-components";

//-------------------newADVT-----------------------------------------------------

export const ContainerBg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #F4F5F6;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - 300px);
  top: 60px;
  opacity: 1;

  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 5;
    left: calc(50% - 160px);
    top: 55px;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #FFFFFF;
  border-radius: 12px;
  position: relative;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  &:hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
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

export const ModalBtnClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ModalBtnCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after, &::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 47%;
  right: -4px;
  }

  &::before {
  transform: rotate(45deg);
  }

  &::after {
  transform: rotate(-45deg);
  }

  &:hover::after, &:hover::before {
  background-color: #0080C1;
  }
`;

export const ModalFormNewArt = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const FormNewArtLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
      margin-bottom: 4px;

  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;

export const FormNewArtCss = css`
  padding: 13px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
`;

export const FormNewArtCssMob = css`
    padding: 9px 17px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
`;

export const FormNewArtInput = styled.input`
    ${FormNewArtCss}
  width: 100%;
  font-size: 16px;
  line-height: 24px;

        &: focus {
      border: 2px solid #009EE4;
  } 

  &::-moz-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.3019607843);
}
  &::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.3019607843);
}

  @media screen and (max-width: 600px) {
    ${FormNewArtCssMob}
    width: 100%;
    &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
    &::-moz-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  }
`;

export const FormNewArtArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
    border-radius: 6px;
  line-height: 24px;
      border: 1px solid rgba(0, 0, 0, 0.2);
            &: focus {
      border: 2px solid #009EE4;
  } 

  &::-moz-placeholder {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.3019607843);
  }
  &::placeholder {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.3019607843);
  }

  @media screen and (max-width: 600px) {
    ${FormNewArtCssMob}
    font-family: "Roboto", sans-serif;
    width: 100%;
    max-height: 107px;

    &::-moz-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
    }

    &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  }
`;

export const FormNewArtP = styled.p`
   font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
  }
`;

export const FormNewArtPSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 600px) {
    display: block;
    margin-left: 0px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const FormNewArtBarImg = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`;

export const FormNewArtImgContainer = styled.div`
  display: ${props => props.display};
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

    &:hover {
  background-color: #0080C1;
  
  }

  @media screen and (max-width: 600px) {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #F0F0F0;
    margin: 0 5px;
  }
`;

export const FormNewArtImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
     object-fit: cover;
  z-index: 2;

  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
       object-fit: cover;
  }
`;

export const FormNewArtImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #F0F0F0;
  z-index: -1;
      cursor: pointer;

  &:hover {
  background-color: rgb(199 190 190);
}

  &::after, &::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 50%;
  right: calc(50% - 15px);
}

&::before {
  transform: rotate(90deg);
}
`;

export const AdvtImg = styled.img`
 max-width: 100%;
  position: absolute;
  z-index: 1;
`;

export const FormNewArtImgCoverInput = styled.input`
  opacity: 0;
  position: absolute;
  top: -9999px;
  left: -9999px;  
`;

export const FormNewArtImgCoverInputLabel = styled.label`

`;


export const FormNewArtBlockPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   position: relative;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const FormNewArtInputPrice = styled.input`
  ${FormNewArtCss}
    width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
        &: focus {
      border: 2px solid #009EE4;
  } 

  &::-moz-placeholder {
  text-align: end;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

  &::placeholder {
  text-align: end;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

  @media screen and (max-width: 600px) {
    ${FormNewArtCssMob}
        width: 100%;

     &::-moz-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  }
`;

export const FormNewArtInputPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #FFFFFF;
        &: focus {
      border: 2px solid #009EE4;
  } 

  &::after {
  content: "₽";
  width: 24px;
  height: 24px;
  position: absolute;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  z-index: 2;
}

  @media screen and (max-width: 600px) {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;

    &::after {
    font-size: 14px;
    line-height: 21px;
  }
  }
`;

export const FormNewArtBtnPub = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background: ${props => props.active};
  border: 1px solid ${props => props.active};
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;

  &:hover {
  background-color: ${props => props.activeHover};
}

  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
`;


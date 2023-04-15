import styled from "styled-components";

export const ButtonSignup = styled.button`
    width: 278px;
    height: 46px;
    background-color: #009EE4;
    border-radius: 6px;
    border: none;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

  &:hover {
  background-color: #0080C1;
  }

  @media screen and (max-width: 768px) {
    height: 46px;
    border: none;
    margin-top: 26px;
        font-size: 16px;
    line-height: 24px;
  }
`;

export const SignUpWrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #F4F5F6;
`;

export const Block = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - 183px);
  top: calc(50% - 323.5px);
  opacity: 1;

  @media screen and (max-width: 768px) {
    left: calc(50% - 160px);
    top: 55px;
  }
`;

export const LoginForm = styled.form`
  width: 366px;
  height: 717px;
  background-color: #FFFFFF;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 42px 47px;
  
  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    border-radius: 0px;
    padding: 40px 20px;
    }
`;

export const Logo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 42px;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
    }
`;

export const LogoImg = styled.img`
  width: 140px;
  height: auto;

    @media screen and (max-width: 768px) {
    width: 120px;
    height: auto;
    }
`;

export const Input = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #D0CECE;
  padding: 8px 1px;
  margin-bottom: 38px;

  &::-moz-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #D0CECE;
}
  &::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #D0CECE;
}

    @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 30px;
    padding: 9px 19px;
    margin-bottom: 14px;
    
    &: focus {
    border: 2px solid #009EE4;
    } 

    &::-moz-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #B3B3B3;
    }

    &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #B3B3B3;
    }
  }
`;

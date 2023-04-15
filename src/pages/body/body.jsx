import {GlobalStyle, Wrapper} from './globalStyle'
import { StartPage } from './startPage';

export  const Body = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <StartPage />
      </Wrapper>
    </>
  );
}

export default Body
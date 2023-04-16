import {GlobalStyle, Wrapper} from './globalStyle'
import { StartPage } from './startPage';

const Body = () => {
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
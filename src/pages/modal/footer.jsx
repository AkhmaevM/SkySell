import { NavLink } from "react-router-dom";
import Icon_1 from './icons/icon_01.png';
import Icon_2 from './icons/icon_02.png';
import Icon_3 from './icons/icon_03.png';
import PropTypes from 'prop-types';
import * as S from './styles/styledFooter'


 const Footer = ({ media }) => {
    return (
        <S.Footer media={media}>
            <S.FooterWrapper>
                <S.FooterImageWrapper>
                    <NavLink to={`/`} replace>
                        <S.FooterImg src={Icon_1} />
                    </NavLink>
                </S.FooterImageWrapper>
                <S.FooterImageWrapper>
                    <NavLink to={`/addnewat`} replace>
                        <S.FooterImg src={Icon_2} />
                    </NavLink>
                </S.FooterImageWrapper>
                <S.FooterImageWrapper>
                    <NavLink to={`/profile`} replace>
                        <S.FooterImg src={Icon_3} />
                    </NavLink>
                </S.FooterImageWrapper>
            </S.FooterWrapper>
        </S.Footer>
    );
};

export default Footer

Footer.propTypes = {
  media: PropTypes.string,
};

Footer.defaultProps = {
  media: '768px',
};

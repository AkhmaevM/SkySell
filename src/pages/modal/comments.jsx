import { Wrapper, GlobalStyle } from './styles/globalStyle';
import CommentItems from './commentItem';
import { useParams } from "react-router-dom";
import { useGetAdvtCommentsQuery } from "../../services/services";
import { useRefreshTokenMutation } from '../../services/services';
import { NavLink } from "react-router-dom";
import { useSetCommentMutation } from '../../services/services';
import React, { useState, useEffect } from 'react';
import * as S from './styles/styledComment'


const Comments = () => {
    const [text, setText] = useState('');
    const [authorized, setAuthorized] = useState(false);
    const [setComment] = useSetCommentMutation();
    const [inputAndAvaFilled, setInputAndAvaFilled] = useState();
    let { id } = useParams();
    const { data: getAdvtComments } = useGetAdvtCommentsQuery(id);
    const [refreshToken] = useRefreshTokenMutation();

    const handleSaveChanges = async (event) => {
        event.preventDefault();
        const textArea = document.querySelector('textarea');
        textArea.value = '';
        await refreshToken();
        await setComment({ id, text });
        getAdvtComments.refetch();
    };

    const handleChanges = (event) => {
        setText(event.target.value);
        setInputAndAvaFilled(event.target.value)
    };

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            setAuthorized(true)
        }
        return
    }, []);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <S.ContainerBackground>
                    <S.ModalBlock>
                        <S.ModalContent>
                            <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                            <S.ButtonClose>
                                <NavLink to={`/product/${id}`} replace>
                                    <S.ButtonCloseLine></S.ButtonCloseLine>
                                </NavLink>
                            </S.ButtonClose>
                            <S.ModalScroll>
                                <S.FormNewArt display={authorized ? 'flex' : 'none'}>
                                    <S.FormNewArtBlock>
                                        <S.FormNewLabel for="text">Добавить отзыв</S.FormNewLabel>
                                        <S.FormNewArea onChange={handleChanges} name="text" id="formArea" cols="auto" rows="5"
                                            placeholder="Введите описание"></S.FormNewArea>
                                    </S.FormNewArtBlock>
                                    <S.FormButtonPublicate
                                        active={inputAndAvaFilled === '' ? '#D9D9D9' : '#009EE4'}
                                        activeHover={inputAndAvaFilled === '' ? '#D9D9D9' : '#0080C1'}
                                        onClick={handleSaveChanges}>
                                        Опубликовать
                                    </S.FormButtonPublicate>
                                </S.FormNewArt>
                                <S.ModalComments>
                                    {getAdvtComments && getAdvtComments.map((item) => (
                                        <CommentItems key={item.id} comments={item} />
                                    ))}
                                </S.ModalComments>
                            </S.ModalScroll>

                        </S.ModalContent>
                    </S.ModalBlock>
                </S.ContainerBackground>
            </Wrapper>
        </>
    );
};

export default Comments
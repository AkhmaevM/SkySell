import * as S from './styles/styledComment'

 const CommentItems = (comments) => {
    const dateString = comments.comments.created_on;
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <S.CommentBox>
            <S.CommentItem>
                <S.CommentLeft>
                    <S.CommentImageContainer>
                        <S.CommentImage src={`http://localhost:8090/${comments.comments.author.avatar}`} />
                    </S.CommentImageContainer>
                </S.CommentLeft>
                <S.CommentRight>
                    <S.CommentName>{comments.comments.author.name}<S.CommentSpan>{formattedDate}</S.CommentSpan></S.CommentName>
                    <S.CommentTitle>Комментарий</S.CommentTitle>
                    <S.CommentText>{comments.comments.text}</S.CommentText>
                </S.CommentRight>
            </S.CommentItem>
        </S.CommentBox>
    );
};
export default CommentItems
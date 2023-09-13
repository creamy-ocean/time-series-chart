import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ErrorPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>404 - 페이지를 찾을 수 없습니다.</StyledTitle>
      <StyledLink to="/">홈으로 돌아가기</StyledLink>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled.h1`
  margin-top: 10rem;
  margin-bottom: 3rem;
`;
const StyledLink = styled(Link)`
  color: #666;
`;

export default ErrorPage;

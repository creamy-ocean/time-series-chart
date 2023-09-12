import styled from "styled-components";
import ChartPage from "./pages/ChartPage";

const App = () => {
  return (
    <>
      <Heading>시계열 차트</Heading>
      <ChartPage />
    </>
  );
};

export default App;

const Heading = styled.h2`
  margin-top: 5rem;
  text-align: center;
`;

import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const App = () => {
  return (
    <>
      <Heading>시계열 차트</Heading>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;

const Heading = styled.h2`
  margin-top: 5rem;
  text-align: center;
`;

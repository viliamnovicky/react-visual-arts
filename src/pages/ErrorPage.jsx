import styled from "styled-components";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Error = styled.div`
  width: 100vw;
  height: calc(100vh - 37rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

function ErrorPage({ error }) {
  return (
    <>
      <Navbar />
      <Error>{error} 😥</Error>
    </>
  );
}

export default ErrorPage;

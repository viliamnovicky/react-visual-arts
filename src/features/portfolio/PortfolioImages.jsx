import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { usePortfolioImages } from "./usePortfolioImages";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

const Portfolio = styled.div`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80vw;
  gap: 2rem;
  min-height: 80rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin: auto;
  cursor: pointer;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11000;
  overflow: hidden;
  backdrop-filter: blur(3px);
`;

const ModalInner = styled.div`
    position: absolute;
    left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 40vw;
`

const ModalImage = styled.img`
  width: 60vw;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 12000;
`;

const Button = styled.button`
  position: fixed;
  right: 2rem;
  top: 2rem;
  z-index: 121000;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: rgba(230, 230, 230, 0.1);
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background: rgba(230, 230, 230, 0.2);
  }
`;

function PortfolioImages() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [image, setImage] = useState("");

  function handleOpenModal(src) {
    setIsOpenModal(true);
    setImage(src);
    console.log("click");
  }

  const { id } = useParams();
  const { isLoadingPortfolioImages, portfolioImages, error } = usePortfolioImages(id);

  if (isLoadingPortfolioImages) return <Spinner/>;

  return (
    <>
      <Navbar />
      <Portfolio>
        {portfolioImages.map((image) => (
          typeof image !== "object" && <Image src={image} key={image} onClick={() => handleOpenModal(image)} />
        ))}
      </Portfolio>
      {isOpenModal && (
        <Modal onClick={() => setIsOpenModal(false)}>
          <ModalInner>
            <Button onClick={() => setIsOpenModal(false)}>&#x2715;</Button>
            <ModalImage src={image} />
          </ModalInner>
        </Modal>
      )}
    </>
  );
}

export default PortfolioImages;

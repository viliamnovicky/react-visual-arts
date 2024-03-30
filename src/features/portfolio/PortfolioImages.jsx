import styled from "styled-components";
import Navbar from "../../ui/Navbar";
import { usePortfolioImages } from "./usePortfolioImages";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";

const Portfolio = styled.div`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80vw;
  gap: 2rem;
  min-height: 80rem;

  @media screen and (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90vw;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    width: 95vw;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin: auto;
  cursor: pointer;
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
    console.log(image);
  }

  const { id } = useParams();
  const { isLoadingPortfolioImages, portfolioImages, error } = usePortfolioImages(id);

  if (isLoadingPortfolioImages) return <Spinner />;

  return (
    <>
      <Navbar />
      <Portfolio>
        {portfolioImages.map(
          (image) =>
            typeof image !== "object" && (
              <Image src={image} key={image} onClick={() => handleOpenModal(image)} />
            )
        )}
      </Portfolio>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)} background={image} type="image"></Modal>
      )}
    </>
  );
}

export default PortfolioImages;

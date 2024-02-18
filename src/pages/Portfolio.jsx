import styles from "./Portfolio.module.css";
import Navbar from "../components/Navbar";
import { getPortfolio } from "../services/apiPortfolio";
import { usePortfolioData } from "../features/usePortfolioData";
import { usePortfolioCategoriesImages } from "../features/usePortfolioCategoriesImages";
import styled from "styled-components";
import PortfolioCategory from "../ui/PortfolioCategory";

const StyledPortfolio = styled.div`
  margin-top: 5rem;
`;

function Portfolio() {
  const { isLoading, portfolio, error } = usePortfolioData();
  const { isLoadingPortfolioCategoriesImages, portfolioImages } = usePortfolioCategoriesImages();
  console.log(portfolioImages);
  if (isLoading || isLoadingPortfolioCategoriesImages) return <p>loading</p>;
  return (
    <>
      <Navbar />
      <StyledPortfolio>
        {portfolioImages.map((image, index) => (
          <PortfolioCategory image={image} name={portfolio[index].name} textAlign={index & 1 ? "right" : "left"} />
        ))}
      </StyledPortfolio>
    </>
  );
}

export default Portfolio;

import Navbar from "../ui/Navbar";
import { usePortfolioData } from "../features/portfolio/usePortfolioData";
import { usePortfolioCategoriesImages } from "../features/portfolio/usePortfolioCategoriesImages";
import styled from "styled-components";
import PortfolioCategory from "../ui/PortfolioCategory";
import { NavLink } from "react-router-dom";
import Spinner from "../ui/Spinner"

const StyledPortfolio = styled.div`
  margin-top: 5rem;
`;

function Portfolio() {
  const { isLoading, portfolio, error } = usePortfolioData();
  const { isLoadingPortfolioCategoriesImages, portfolioImages } = usePortfolioCategoriesImages();
  
  if (!portfolio) return <Spinner/>;
  if(!portfolioImages) return <Spinner/>
  if(error) return <p>Error</p>
  
  return (
    <>
      <Navbar />
      <StyledPortfolio>
        {portfolio.map((category) => (
          <NavLink to={category.name.toLowerCase()}>
            <PortfolioCategory
              image={category.coverImage}
              name={category.name}
              textAlign={"right"}
              key={category.id}
            />
          </NavLink>
        ))}
      </StyledPortfolio>
    </>
  );
}

export default Portfolio;

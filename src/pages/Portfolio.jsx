import Navbar from "../ui/Navbar";
import { usePortfolioData } from "../features/portfolio/usePortfolioData";
import { usePortfolioCategoriesImages } from "../features/portfolio/usePortfolioCategoriesImages";
import styled from "styled-components";
import PortfolioCategory from "../ui/PortfolioCategory";
import { NavLink } from "react-router-dom";
import Spinner from "../ui/Spinner"
import ErrorPage from "./ErrorPage";

const StyledPortfolio = styled.div`
  margin-top: 5rem;
`;

function Portfolio() {
  const { isLoading, portfolio, error } = usePortfolioData();
  const { isLoadingPortfolioCategoriesImages, portfolioImages } = usePortfolioCategoriesImages();
  
  if (isLoading || isLoadingPortfolioCategoriesImages) return <Spinner/>;
  if(error) return <ErrorPage error={error}/>
  
  return (
    <>
      <Navbar />
      <StyledPortfolio>
        {portfolio.map((category) => (
          <NavLink to={category?.name?.toLowerCase()} key={category.id + "link"}>
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

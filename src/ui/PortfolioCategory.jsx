import styled, { css } from "styled-components";

const Category = styled.div`
  width: 100%;
  height: 35rem;
  position: relative;
  overflow: hidden;
  transition: all 0.2s;
  margin-bottom: 1px;
  background: url(${(props) => props.imageUrl}) no-repeat center center/cover;
  filter: grayscale(50%);

  @media screen and (max-width: 1000px) {
  }

  &:hover  {
    filter: grayscale(0%);
  }

  &:hover h1 {
    color: var(--color-white-transp-2);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  opacity: 0.8;
  transition: all 0.2s;
`;

const CategoryName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-size: 15rem;
  color: transparent;
  font-weight: 100;
  transition: all 0.2s;
  text-align: center;
  font-weight: 800;

  @media screen and (max-width: 1200px) {
    font-size: 10rem;
  }
`;

function PortfolioCategory({ image, name }) {
  return (
    <Category imageUrl={image}>
      <CategoryName>{name}</CategoryName>
    </Category>
  );
}

export default PortfolioCategory;

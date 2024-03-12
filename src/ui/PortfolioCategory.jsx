import styled, { css } from "styled-components";

const Category = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all .2s;

  &:hover img{
    opacity: 1;
  }

  &:hover h1 {
    color: var(--color-white-transp-2)
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  opacity: 0.8;
  transition: all .2s;
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
  transition: all .2s;
  text-align: center;
  font-weight: 800;
`;

function PortfolioCategory({ image, name }) {
  return (
    <Category>
      <CategoryImage src={image} />
      <CategoryName>{name}</CategoryName>
    </Category>
  );
}

export default PortfolioCategory;

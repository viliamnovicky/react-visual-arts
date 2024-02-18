import styled, { css } from "styled-components";

const textAlign = {
  left: css`
    left: 15rem;
    transform: translateY(-50%);
  `,
  right: css`
    right: 15rem;
    left: auto;
    transform: translateY(-50%);
  `,
};

const Category = styled.div`
  width: 100%;
  position: relative;
`;

const CategoryImage = styled.img`
  width: 100%;
`;

const CategoryName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-size: 12rem;
  color: rgba(234, 234, 234, 1);
  ${(props) => textAlign[props.textAlign]}
`;

function PortfolioCategory({ image, name, textAlign }) {
  return (
    <Category>
      <CategoryImage src={image} />
      <CategoryName textAlign={textAlign}>{name}</CategoryName>
    </Category>
  );
}

export default PortfolioCategory;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledStoreItem = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center/cover;
  width: 100%;
  height: 50rem;
  border-radius: 2rem;
  position: relative;
  z-index: 1;
  transition: all 0.2s;
  background-size: 115%;

  &:hover {
    background-size: 120%;
  }
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 5rem;
  background: var(--color-white-transp-3);
  padding: 3rem 0;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 100;
  color: var(--color-grey);
`;

const Button = styled(NavLink)`
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 5rem !important;
  width: 50% !important;
  font-weight: 800 !important;
  text-transform: uppercase;
  color: var(--color-grey);
  font-family: "Dosis", sans-serif;
  text-decoration: none;
  font-size: 2rem;
  background: var(--color-white-transp);
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;

  &:hover {
    background: var(--color-white-transp-2)
  }
`;

function StoreItem({ item }) {
  return (
    <StyledStoreItem bg={item.imageUrl}>
      <Heading type="store">{item.name}</Heading>
      <Button to={item.name} type="store" color="secondary">
        detail
      </Button>
    </StyledStoreItem>
  );
}

export default StoreItem;

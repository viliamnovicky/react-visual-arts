import styled from "styled-components"
import Button from "../../ui/Button"

const StyledStoreItem = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center/cover;
  width: 100%;
  height: 50rem;
  border-radius: 2rem;
  position: relative;
  z-index: 1;
  transition: all .2s;
  background-size: 115%;

  &:hover {
    background-size: 120%;
  }
`

const Heading = styled.h1`
    text-transform: uppercase;
    font-size: 5rem;
    background:var(--color-white-transp-3);
    padding: 3rem 0;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 100;
    color: var(--color-grey)
`

function StoreItem({item}) {
    return (
        <StyledStoreItem bg={item.imageUrl}>
            <Heading type="store">{item.name}</Heading>
            <Button type="store" color="secondary">detail</Button>
        </StyledStoreItem>
    )
}

export default StoreItem

import { useParams } from "react-router-dom";
import Navbar from "../../ui/Navbar";
import { useStoreData } from "./useStoreData";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { useState } from "react";
import Modal from "../../ui/Modal";
import sunset from "../../../public/img/sunset.jpg"

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  border-radius: 2rem;
  margin: 5rem auto;
  max-width: 1366px;
  height: 910px;
  background: url(${(props) => props.bg}) no-repeat center center/cover;
`;

const ItemDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 2rem;
  margin: 5rem auto;
  max-width: 1366px;
  gap: 2rem;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-grey);
  width: 100%;
  height: 20rem;
  font-size: 5rem;
  text-transform: uppercase;
  background: var(--color-white-transp-3);
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 2rem;
  cursor: pointer;
`;

const Details = styled.div`
  width: 100%;
  background: transparent;
  transition: all 0.2s;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const Detail = styled.div`
  text-align: center;
  font-size: 2rem;
  
  h1 {
    text-transform: uppercase;
    padding: 2rem 0;
    background: var(--color-white-transp-2);
    margin: 2px 0;
    font-size: 2rem;
  }

  p {
    padding: 2rem 0;
    background: var(--color-white-transp);
    font-weight: 800;
    margin-bottom: 2px;
  }
`;

const ButtonCont = styled.div`
  background: var(--color-white-transp-3);
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

function StoreItemDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { id } = useParams();
  const { isLoadingStore, store, errorStore } = useStoreData();

  if (isLoadingStore) return <Spinner />;

  function handleOpenModal() {
    setIsOpenModal(true);
    console.log(isOpenModal);
  }

  let item = store?.filter((item) => item.name === id);
  item = item[0];
  return (
    <>
      <Navbar />
      <ItemDetail bg={item.imageUrl}>
        <Heading type="store_item">{item.name}</Heading>
        <Details>
          <Detail>
            <h1>Rozmery</h1>
            {item.prices.map((dimension) => (
              <p key={dimension.dimensions}>{dimension.dimensions}</p>
            ))}
          </Detail>
          <Detail>
            <h1>Cena</h1>
            {item.prices.map((price) => (
              <p key={price.price}>{price.price} €</p>
            ))}
          </Detail>
          <Detail>
            <h1>Dostupnosť</h1>
            {item.prices.map((i) => (
              <p key={i.dimensions + i.price}>{i.isAvailable ? "na objednávku" : "predané"}</p>
            ))}
          </Detail>
        </Details>
        <ButtonCont type="store_item">
          <Button color="primary" onClick={handleOpenModal}>
            detail
          </Button>
          <Button color="secondary">do košíka</Button>
        </ButtonCont>
      </ItemDetail>
      <ItemDescription>
        <Detail>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab esse enim consequuntur
          nostrum cupiditate aspernatur amet voluptatem iste odio repellendus qui ut fuga, tempore
          sit, suscipit quisquam sint harum! Facere quo illo perferendis? Quisquam nam mollitia ab
          velit exercitationem?
        </Detail>
        <Image src={sunset}></Image>
      </ItemDescription>
      {isOpenModal && (
        <Modal background={item.imageUrl} type="image" onClose={() => setIsOpenModal(false)} />
      )}
    </>
  );
}

export default StoreItemDetail;

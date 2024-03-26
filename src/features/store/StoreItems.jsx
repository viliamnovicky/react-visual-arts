import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useStoreData } from "./useStoreData";
import StoreItem from "./StoreItem";
import ErrorPage from "../../pages/ErrorPage";
import Navbar from "../../ui/Navbar";

const StyledStoreItems = styled.div`
  max-width: 1366px;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  gap: 2rem;
  margin-top: 5rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr
  }
`;

function StoreItems() {
  const { isLoadingStore, store, errorStore } = useStoreData();
 
  if (isLoadingStore) return <Spinner />;
  if (!store) return <ErrorPage error={errorStore.message}/>;

  return (
    <>
      <Navbar />
      <StyledStoreItems>
        {store.map((item) => (
          <StoreItem item={item} />
        ))}
        {store.map((item) => (
          <StoreItem item={item} />
        ))}
        {store.map((item) => (
          <StoreItem item={item} />
        ))}
        {store.map((item) => (
          <StoreItem item={item} />
        ))}
      </StyledStoreItems>
      
    </>
  );
}

export default StoreItems;

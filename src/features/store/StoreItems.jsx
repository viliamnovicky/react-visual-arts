import styled from "styled-components"
import Spinner from "../../ui/Spinner"
import { useStoreData } from "./useStoreData"
import StoreItem from "./StoreItem"

const StyledStoreItems = styled.div`
    width: 1366px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    gap: 2rem;
    margin-top: 5rem;
`


function StoreItems() {
    const { isLoadingStore, store, errorStore } = useStoreData() 
    console.log(store)
    if(isLoadingStore) return <Spinner/>
    
    return (
        <StyledStoreItems>
            {store.map((item) => <StoreItem item={item}/>)}
            {store.map((item) => <StoreItem item={item}/>)}
            {store.map((item) => <StoreItem item={item}/>)}
            {store.map((item) => <StoreItem item={item}/>)}
        </StyledStoreItems>
    )
}

export default StoreItems

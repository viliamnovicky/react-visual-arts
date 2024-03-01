import { RingSpinner } from "react-spinners-kit"
import styled from "styled-components"

const StyledSpinner = styled.div`
    width: 100vw;
    height: calc(100vh - 32rem);
    display: flex;
    justify-content: center;
    align-items: center;

`

function Spinner() {
    return (
        <StyledSpinner>

            <RingSpinner color="var(--color-grey)" size={100}/>
        </StyledSpinner>
    )
}

export default Spinner

import styled from "styled-components"

const StyledBackButton = styled.button`
    position: absolute;
`



function BackButton({onClick}) { 
    return (
        <StyledBackButton onClick={onClick}>
            Naspäť
        </StyledBackButton>
    )
}

export default BackButton

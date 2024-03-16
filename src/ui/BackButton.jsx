import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledBackButton = styled(NavLink)`
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

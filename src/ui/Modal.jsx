import styled from "styled-components"
import Button from "./Button"

const ModalOuter = styled.div`
    position: fixed;
    background: var(--color-grey-transp);
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index:1000;
    backdrop-filter: blur(2px);
    transition: all .2s;
`

const ModalInner = styled.div`
    position: absolute;
    width: 80vw;
    height: 80vh;
    background: var(--color-white);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
`

function Modal({children, onClose}) {
    return (
        <ModalOuter>
            <ModalInner>
                <Button type="close" onClick={onClose}>&#x2715;</Button>
                {children}
            </ModalInner>
        </ModalOuter>
    )
}

export default Modal

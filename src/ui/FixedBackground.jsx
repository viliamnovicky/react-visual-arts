import styled from "styled-components";

const FixedBackground = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center/cover;
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  display: table;
  position: relative;
  
  &:hover {
    h6 {
      width: 90rem !important;
      background: var(--color-grey-transp);
      border-radius: 2rem;
      opacity: 1;
    }
  }
`;

export default FixedBackground;

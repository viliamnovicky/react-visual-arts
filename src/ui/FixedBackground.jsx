import styled from "styled-components";

const FixedBackground = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center/cover;
  width: 100vw;
  height: 60vw;
  background-attachment: fixed;
  display: table;
  position: relative;
`;

export default FixedBackground;

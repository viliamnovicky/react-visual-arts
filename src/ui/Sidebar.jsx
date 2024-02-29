import { BrowserRouter, Routes } from "react-router-dom";
import styled from "styled-components";
import Admin from "../pages/Admin";
import AddNewImagesForm from "../features/dashboard/AddNewImagesForm";

const StyledSidebar = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: 2rem;
  padding: 0 2rem;
`;

function Sidebar({ children }) {
  return <StyledSidebar>{children}</StyledSidebar>;
}

export default Sidebar;

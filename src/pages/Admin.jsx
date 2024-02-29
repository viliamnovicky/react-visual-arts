import styled from "styled-components";
import Sidebar from "../ui/Sidebar";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../ui/Button";
import AdminNavLink from "../ui/AdminNavLink";

const StyledAdmin = styled.div`
  width: 100vw;
  height: calc(100vh - 32rem);
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 2rem;
  gap: 2rem;
`;

function Admin() {
  return (
    <StyledAdmin>
      <Sidebar>
        <AdminNavLink to="new-image">Pridať fotografie</AdminNavLink>
        <AdminNavLink to="new-category">Pridať Kategóriu</AdminNavLink>
        <AdminNavLink to="new-blog">Pridať Blog</AdminNavLink>
        <AdminNavLink to="new-product">Pridať Produkt</AdminNavLink>
        {/* <AdminNavLink to="update-prices">Upraviť cenník</AdminNavLink>
        <AdminNavLink to="change-password">Zmena hesla</AdminNavLink>
        <AdminNavLink to="logout">Odhlásiť</AdminNavLink> */}
      </Sidebar>
      <Outlet />
    </StyledAdmin>
  );
}

export default Admin;

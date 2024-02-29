import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AdminNavLink = styled(NavLink)`
  width: 100%;
  height: 5rem;
  background: transparent;
  text-transform: uppercase;
  color: var(--color-grey);
  border-radius: 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.2s;

  &:hover {
    background: var(--color-grey-transp-2);
  }

  &.active {
    background:var(--color-grey);
    color: var(--color-white);
  }
`;

export default AdminNavLink;

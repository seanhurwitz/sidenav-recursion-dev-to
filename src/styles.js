import styled, { css } from "styled-components";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidenav content";
`;

const Header = styled.div`
  background: darkcyan;
  color: white;
  grid-area: header;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const SideNav = styled.div`
  grid-area: sidenav;
  background: #eeeeee;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Content = styled.div`
  grid-area: content;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const MenuOption = styled.div`
  color: #333;
  width: 100%;
  height: 2rem;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ level }) => `0 ${0.5 * (level + 1)}rem`};
  cursor: pointer;
  :hover {
    background: #bbb;
  }

  ${({ isTop }) =>
    isTop &&
    css`
      background: #ccc;
      :not(:first-child) {
        margin-top: 0.2rem;
      }
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      border-left: 5px solid #333;
    `}
`;

export { Body, Content, Header, SideNav, MenuOption };

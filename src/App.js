import { CaretDown20, CaretRight20 } from "@carbon/icons-react";
import { Fragment, useState } from "react";
import "./App.css";
import sideNavOptions from "./sidenavOptions";
import { Body, Content, Header, MenuOption, SideNav } from "./styles";

function App() {
  const [openOptions, setOpenOptions] = useState([]);
  const generateSideNav = (options, level = 0) => {
    return Object.values(options).map((option, index) => {
      const openId = `${level}.${index}`;
      const { sub } = option;
      const isOpen = openOptions.includes(openId);
      const caret = sub && (isOpen ? <CaretDown20 /> : <CaretRight20 />);
      return (
        <Fragment>
          <MenuOption
            isTop={level === 0}
            level={level}
            onClick={() =>
              setOpenOptions((prev) =>
                isOpen ? prev.filter((i) => i !== openId) : [...prev, openId]
              )
            }
          >
            {option.title}
            {caret}
          </MenuOption>
          {isOpen && sub && generateSideNav(sub, level + 1)}
        </Fragment>
      );
    });
  };
  return (
    <Body>
      <Header>
        <h3>My Cool App</h3>
      </Header>
      <SideNav>{generateSideNav(sideNavOptions)}</SideNav>
      <Content>Put content here</Content>
    </Body>
  );
}

export default App;

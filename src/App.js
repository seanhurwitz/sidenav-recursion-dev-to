import { CaretDown20, CaretRight20 } from "@carbon/icons-react";
import { Fragment, useCallback, useState } from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { routes, sidenavOptions } from "./sidenavOptions";
import { Body, Content, Header, MenuOption, SideNav } from "./styles";

function App() {
  const [openOptions, setOpenOptions] = useState([]);
  const { pathname } = useLocation();

  const determineActive = useCallback(
    (option) => {
      const { sub, link } = option;
      if (sub) {
        return Object.values(sub).some((o) => determineActive(o));
      }
      return link === pathname;
    },
    [pathname]
  );

  const generateSideNav = (options, level = 0) => {
    return Object.values(options).map((option, index) => {
      const openId = `${level}.${index}`;
      const { sub, link } = option;
      const isOpen = openOptions.includes(openId);
      const caret = sub && (isOpen ? <CaretDown20 /> : <CaretRight20 />);
      const LinkComponent = link ? Link : Fragment;
      return (
        <Fragment>
          <LinkComponent to={link} style={{ textDecoration: "none" }}>
            <MenuOption
              isActive={determineActive(option)}
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
          </LinkComponent>
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
      <SideNav>{generateSideNav(sidenavOptions)}</SideNav>
      <Content>
        <Switch>
          <Route
            path={routes.messageAuthor}
            render={() => <div>Message Author!</div>}
          />
          <Route
            path={routes.viewAuthor}
            render={() => <div>View Author!</div>}
          />
          <Route
            path={routes.viewPosts}
            render={() => <div>View Posts!</div>}
          />
          <Route
            path={routes.createPost}
            render={() => <div>Create Post!</div>}
          />
          <Route path={routes.users} render={() => <div>View Users!</div>} />
          <Route render={() => <div>Home Page!</div>} />
        </Switch>
      </Content>
    </Body>
  );
}

export default App;

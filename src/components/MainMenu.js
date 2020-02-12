import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import menu from "../styles/menu.css";
import { injectIntl, FormattedMessage, Link, navigate } from "gatsby-plugin-intl"

const GlobalMenu = styled.div`
  ${"" /* background-color: rgba(255, 255, 255, 1); */}
  background-color: rgba(31, 31, 31, 0.9);
  marin: 0 auto 0 auto;

  text-align: center;

  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;

  box-shadow: 0px 15px 10px 5px #cfcfcf96;
  &:hover {
    text-decoration: none;
  }
`;

const MenuItems = styled(Link)`
  display: block;
  padding: 0.5rem 2rem;
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (min-width: 1341px) {
    &:not(:first-child) > &:before {
      position: absolute;
      color: #fff;
      top: 12px;
      left: 0;
      width: 3px;
      height: calc(100% - 23px);
      background: #fff;
      opacity: 0.9;
      content: " ";
      transition: background-color 0.6s;
      text-decoration: none;
    }
  }
`;
const Contact = styled(Link)`
  border: 1px solid #fff;
  border-radius: 60px;
  padding: 0 10px 0 10px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.5s;
  color: #fff;
  &:hover {
    transition: 0.5s;
    color: #333333;
    text-decoration: none;
    background-color: #fff;
  }
`;

const activeStyles = {
  borderBottom: "2px solid #fff"
};
let men
const MainMenu = ({intl}) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems {
            edges {
              node {
                name
                items {
                  title
                  object_id
                  object_slug
                  url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <GlobalMenu>
          <Navbar collapseOnSelect expand="lg" variant="dark">
            {/* <Navbar.Brand href="#home">Gallery 122</Navbar.Brand> */}
            <Navbar.Toggle
              className={menu.navbar}
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              {intl.formatMessage({ id: "title" }) !== "Gatsby English" ? men=1 : men = 2}
                {props.allWordpressWpApiMenusMenusItems.edges[men].node.items.map(
                  item => (
                    <MenuItems
                      className="menu"
                      variant="bold"
                      activeStyle={activeStyles}
                      to={"/" + item.url}
                      key={item.object_id}
                    >
                      {item.title}
                    </MenuItems>
                  )
                )}
                <Contact
                  to="/contact"
                  className="mb-0 mt-0 pt-2 pb-2 pr-4 pl-4"
                >
                  Contact
                </Contact>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <Font className="align-self-center">
            <FaInstagram /> <FaFacebookF />
          </Font> */}
        </GlobalMenu>
      )}
    />
  );
};

export default injectIntl(MainMenu);

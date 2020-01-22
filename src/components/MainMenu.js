import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery, Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import menu from "../styles/menu.css";

const GlobalMenu = styled.div`
  background-color: rgba(255, 255, 255, 1);
  marin: 0 auto 0 auto;

  text-align: center;

  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;

  box-shadow: 0px 15px 10px 5px #cfcfcf96;
  &:hover {
  }
`;

const MenuItems = styled(Link)`
  display: block;
  padding: 0.5rem 2rem;

  @media screen and (min-width: 1341px) {
    &:not(:first-child) > &:before {
      position: absolute;
      top: 12px;
      left: 0;
      width: 2px;
      height: calc(100% - 23px);
      /* background: #fff;*/
      opacity: 0.5;
      content: " ";
      transition: background-color 0.3s;
    }
  }
`;
const Contact = styled(Link)`
  border: 1px solid #333333;
  border-radius: 60px;
  padding: 0 10px 0 10px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    color: white;
    
    background-color: #333333;
  }
`;

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(
            filter: { name: { eq: "main Menu" } }
          ) {
            edges {
              node {
                name
                items {
                  title
                  object_id
                  object_slug
                }
              }
            }
          }
        }
      `}
      render={props => (
        <GlobalMenu>
          <Navbar collapseOnSelect expand="lg">
            {/* <Navbar.Brand href="#home">Gallery 122</Navbar.Brand> */}
            <Navbar.Toggle
              className="navbar"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="mr-auto">
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                  item => (
                    <MenuItems
                      className="menu"
                      variant="bold"
                      to={"/" + item.object_slug}
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

export default MainMenu;

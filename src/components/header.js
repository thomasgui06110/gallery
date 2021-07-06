import PropTypes from "prop-types";
import React from "react";
import MainMenu from "./MainMenu";
import logo from "../img/Vieceli_122.jpg";
import styled from "styled-components";
// import Sticky from "react-stickynode";

const HeaderMain = styled.header`
  top: 0px;
  width:100%;
  padding:1rem 0rem 0.5rem 0rem;
  align-items:center;
  display: bloc;
  justify-content: space-between;
  position: fixed;
  background:rgba(0,0,0,0.99);
  z-index: 10;
  @media screen and (max-width: 995px) {
    display:block;
    background:rgba(0,0,0,0.99);
  }
`;

const TopLogo = styled.div`
  width: auto;
  border-radius: 5px;
  height: auto;
  margin: 0 0 0px 20px;
  @media screen and (max-width:995px) {
    width:auto;
    margin-right: 20px;
    margin-left:20px;
  }
`;
/*const Titlelogo = styled.h1`

text-align: center;
color:white;
font-weight: 700;
letter-spacing:0.5rem;
@media (max-width: 995px) {
   font-size: 1.8rem;
  }

`*/
const Titlelogo1 = styled.div`
  width: 550px;
  text-align:center;
  margin: 0 auto 0 auto;
 @media (max-width: 995px) {
   width: 95%;
  }

`

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <TopLogo>
    
      <Titlelogo1>
      <img width="100%" src={logo} alt="122 galerie vieceli" /></Titlelogo1>
    </TopLogo>
  
      <MainMenu />
  
  </HeaderMain>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

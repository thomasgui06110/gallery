import PropTypes from "prop-types";
import React from "react";
import ImageH from "./imageHome";
import MainMenu from "./MainMenu";
import styled from "styled-components";
// import Sticky from "react-stickynode";

const HeaderMain = styled.header`
  top: 0px;
  width:100%;
  padding:1rem 0rem 0.5rem 0rem;
  align-items:center;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background:rgba(0,0,0,0.99);
  z-index: 10;
  @media screen and (max-width: 995px) {
    display:block;
    background:rgba(255,255,255,0.99);
  }
`;

const TopLogo = styled.div`
  width: 400px;
  border-radius: 5px;
  height: auto;
  margin: 0 0 0px 20px;
  @media screen and (max-width:995px) {
    width:auto;
    margin-right: 20px;
    margin-left:20px;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <TopLogo>
      <ImageH alt="Logo Galerie 122 Cannes" />
    </TopLogo>
    {/* <Sticky enabled={true} top={0} bottomBoundary={1200}> */}
      <MainMenu />
    {/* </Sticky> */}
  </HeaderMain>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

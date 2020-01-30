import PropTypes from "prop-types";
import React from "react";
import ImageH from "./imageHome";
import MainMenu from "./MainMenu";
import styled from "styled-components";
import Sticky from "react-stickynode";

const HeaderMain = styled.header`
  top: 0px;
  {'' /* width:1140px; */}
  width:100%;
  padding:1rem 0rem 2rem 0rem;
  
  display: block;
  justify-content: space-between;
  position: relative;


  z-index: 10;
`;

const TopLogo = styled.div`
  width: 200px;
  height: auto;
  margin: 0 auto 0 auto;
`;

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <TopLogo>
      <ImageH alt="Expo du 22 novembre"/>
    </TopLogo>
    <Sticky enabled={true} top={0} bottomBoundary={1200}>
      <MainMenu />
    </Sticky>
  </HeaderMain>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

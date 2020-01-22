/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Header from "./header";
import Footer from "./Footer";

import styled, { createGlobalStyle } from "styled-components";
import { Container } from "react-bootstrap";

const GlobalStyles = createGlobalStyle`
body {
  { /* background-color: rgba(245,242,240,.95); 
  background-color: rgba(255,255,255,.95);*/}
  background-color: rgba(228, 228, 228, 0.15);
  font-family:"Helvetica Neue",Arial;
  color: #71818c !important;
  }
.bg-light {
    background-color: #f8f9fa !important;   
}
h1 {
  color: #000;
  text-align: center;
}
h2 {
  color:#000;
  margin: 0;
}
a {
    color:#000
    
}
a:hover {
    text-decoration: none;
    color: rgba(33, 37, 41, 0.87)
}
figure {
  text-align:center:
}
`;

const Section = styled.section`
  margin: 1rem auto 2rem auto;
`;

const GLayout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />

      <Header />
      <Container>
        <Section> {children}</Section>
      </Container>
      <Footer />
    </div>
  );
};

export default GLayout;

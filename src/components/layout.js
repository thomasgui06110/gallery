/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Header from "./header";
import Footer from "./Footer";
import SEO from "./SEO";
import styled, { createGlobalStyle } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const GlobalStyles = createGlobalStyle`
body {
  { /* background-color: rgba(245,242,240,.95); 
  background-color: rgba(255,255,255,.95);*/}
  ${"" /* background-color: #f8f9fa; */}
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
const Space = styled.div`
  padding: 1vh 10vw 1vw 10vw;

  @media (max-width: 1000px) {
    padding: 1vh 2vw 1vw 2vw;
  }
`;
const Section = styled.section`
  margin: 1rem auto 2rem auto;
`;
const Wrapper = styled.div`
  background-color: rgba(210, 210, 210, 0.5);
`;
const GLayout = ({ children, title, description }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <SEO title={title} description={description} />
      <Header />
      <Container fluid>
        <Space>
          <Section> {children}</Section>
        </Space>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default GLayout;

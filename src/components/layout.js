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
import { Container} from "react-bootstrap";



const Space = styled.div`
  padding: 1vh 10vw 1vw 10vw;

  @media (max-width: 1000px) {
    padding: 1vh 2vw 1vw 2vw;
  }
`;
const Section = styled.section`
  margin: 1rem auto 2rem auto;
`;
// const Wrapper = styled.div`
//   background-color: rgba(210, 210, 210, 0.5);
// `;
const GLayout = ({ children, title, description }) => {
  return (
    <>
     
      <SEO title={title} description={description} />
      <Header />
      <Container fluid>
        <Space>
          <Section> {children}</Section>
        </Space>
      </Container>
      <Footer />
    </>
  );
};

export default GLayout;

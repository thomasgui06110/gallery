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
import styled from "styled-components";
import { Container} from "react-bootstrap";



const Space = styled.div`
  padding: 1vh 7vw 1vw 7vw;

  @media (max-width: 1000px) {
    padding: 1vh 2vw 1vw 2vw;
  }
`;
const Section = styled.section`
  margin: 1rem auto 1rem auto;
  background-color: #fff;
  padding: 2% 2% 5% 2%;
  border-radius:10px;
  @media (max-width: 1000px) {
    padding: 1vh 1vw 1vw 1vw;
  }
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

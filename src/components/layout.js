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
import CookieConsent from "react-cookie-consent";

const Space = styled.div`
  padding: 1vh 7vw 1vw 7vw;
  margin-top: 30px;

  @media (max-width: 995px) {
    padding: 1vh 2vw 1vw 2vw;
    margin-top: 85px;
  }
`;
const Section = styled.section`
  margin: 5rem auto 1rem auto;
  background: black;
  color: white;
  padding: 2% 2% 5% 2%;
  border-radius: 10px;
  @media (max-width: 995px) {
    padding: 1vh 0vw 1vw 0vw;
    margin: 3rem auto 1rem auto;
  }
`;

const ContainerFluid = styled.div`
  max-width: 1750px;
  width: 100%;
  margin: 0 auto;
`;
// const Wrapper = styled.div`
//   background-color: rgba(210, 210, 210, 0.5);
// `;
const GLayout = ({ children, title, description }) => {


  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <ContainerFluid>
        <Space>
          <Section > {children}</Section>
        </Space>
      </ContainerFluid>
      <Footer />
      <CookieConsent
        acceptOnScroll={true}
        acceptOnScrollPercentage={50}
        onAccept={({ acceptedByScrolling }) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("You must accept cookies. Click Ok. Thanks");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
        flipButtons
        location="bottom"
        buttonText="OK, I accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        By continuing on this site, you accept the use of third-party services
        that may install cookies for statistical purposes only.
        <span style={{ fontSize: "10px" }}></span>
      </CookieConsent>
    </>
  );
};

export default GLayout;

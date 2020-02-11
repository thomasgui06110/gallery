import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import ArtistsItems from "../components/ArtistsItems";
import { Row, Col } from "react-bootstrap";
import Artistes from "../styles/artistes.css";
import SEO from "../components/SEO";
import Newsletter from "../components/newsletter";
import { injectIntl, Link } from "gatsby-plugin-intl"

const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;

    margin: 15px auto;

    border: 2px solid #4f5153;
  }
`;

const artistes = ({ pageContext, intl }) => {
  return (
  <GLayout>
    <SEO title={intl.formatMessage({ id: "expoArtistes" })} />
    <Row>
      <Col className="text-center" mt="0" md="12">
        <h1 mb="0">
          <HeadlineCenter className="display-4">{intl.formatMessage({ id: "expoArtistes" })}</HeadlineCenter>
        </h1>
      </Col>
    </Row>

    <Row>
      <ArtistsItems />
    </Row>
    <Row>
      <Col>
        <Newsletter></Newsletter>
      </Col>
    </Row>
  </GLayout>
)}
export default injectIntl(artistes)

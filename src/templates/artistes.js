import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import ArtistsItems from "../components/ArtistsItems";
import { Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import { injectIntl } from "gatsby-plugin-intl"

const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;

    margin: 15px auto;

    border: 2px solid #fff;
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

  </GLayout>
)}
export default injectIntl(artistes)

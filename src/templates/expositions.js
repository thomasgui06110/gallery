import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import OuevresItems from "../components/oeuvresItems";
import { Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import { injectIntl } from "gatsby-plugin-intl"

const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;
    margin: 15px auto;
    border: 2px solid #4f5153;
  }
`;
const expositions = ({ data, intl }) => {
  return(
  
  <GLayout>
  <SEO title={intl.formatMessage({ id: "expoTitre" })}
  description={intl.formatMessage({ id: "expodesc" })}
  keywords="fr"
  
/>
    <Row>
      <Col className="text-center" mt="0" md="12">
        <h1 mb="0">
          <HeadlineCenter className="display-4">{intl.formatMessage({ id: "expoTitre" })}</HeadlineCenter>
        </h1>
      </Col>
    </Row>

    <OuevresItems />
  </GLayout>
  
)
  }

export default injectIntl(expositions)

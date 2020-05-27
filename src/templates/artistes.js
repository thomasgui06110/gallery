import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import { injectIntl } from "gatsby-plugin-intl";
import ArtistsPop from "../components/ArtistsPop";
import ArtistsUrban from "../components/ArtistsUrban";

const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;

    margin: 20px auto;

    border: 2px solid #fff;
  }
`;

const Title = styled.h2`
text-transform: uppercase;
`

const artistes = ({ pageContext, intl }) => {
  return (
    <GLayout>
      <SEO title={intl.formatMessage({ id: "artistes" })} />
     
      <Row >
        <Col className="text-center" mt="0" md="12">
          <Title mb="0">
            <HeadlineCenter className="display-4">
              {intl.formatMessage({ id: "urbanart" })}
            </HeadlineCenter>
          </Title>
        </Col>
      </Row>

      <Row>
        <ArtistsUrban />
      </Row>
      <Row style={{marginTop: '40px'}}>
        <Col className="text-center" mt="0" md="12">
          <Title mb="0">
            <HeadlineCenter className="display-4">
              {intl.formatMessage({ id: "popart" })}
            </HeadlineCenter>
          </Title>
        </Col>
      </Row>

      <Row>
        <ArtistsPop />
      </Row>
    </GLayout>
  );
};
export default injectIntl(artistes);

import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import ArtistsItems from "../components/ArtistsItems";
import { Row, Col } from "react-bootstrap";

const H1 = styled.h1`
text-align:center;
color:rgba(0, 0, 0, 0.7);
font-weight: 600;
text-decoration: underline;
 text-decoration-color: transparent;
 transition: 900ms;

&:hover {
  text-decoration-color: rgba(0, 0, 0, 0.7);
  }
}
`;
const Headline_center = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;

    margin: 15px auto;
    
    border: 2px solid #4f5153;
  }
`;

export default ({ pageContext }) => (
  <GLayout>
        <Row>
      <Col className="text-center" mt="0" md="12">
        <h1 mb="0">
          <Headline_center>Les Artistes</Headline_center>
        </h1>
      
      </Col>
    </Row>

    <Row>
      <ArtistsItems />
    </Row>
  </GLayout>
);

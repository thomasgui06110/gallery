import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import ArtistsItems from "../components/ArtistsItems";
import { Row, Col } from "react-bootstrap";
import artistes from "../styles/artistes.css";

const HeadlineCenter = styled.span`
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
          <HeadlineCenter>Les Artistes</HeadlineCenter>
        </h1>
      
      </Col>
    </Row>

    <Row>
      <ArtistsItems />
    </Row>
  </GLayout>
);

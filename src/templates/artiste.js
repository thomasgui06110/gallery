import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Img from "gatsby-image";
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
const Article = styled.article`
  margin: 3rem auto;
  font-size: 1.3rem;
`;

export default ({ pageContext }) => (
  <GLayout>
    <Row>
      <Col className="text-center" mt="0" md="12">
        <HeadlineCenter>
          <h1
            className="display-4"
            dangerouslySetInnerHTML={{ __html: pageContext.title }}
          ></h1>
          {pageContext.acf.dates !== null && (
            <p>
              <em>{pageContext.acf.dates}</em>
            </p>
          )}
        </HeadlineCenter>
      </Col>
    </Row>

    <Row>
      <Col>
        <Article dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </Col>
    </Row>
    <Row>
      <Col md="4">
        {(pageContext.acf.photo_1) !== null && (
          <img
            src={pageContext.acf.photo_1.localFile.childImageSharp.fluid.src}
            alt={pageContext.acf.photo_1.alt_text}
            width="100%"
          />
        )} 
        
      </Col>
      <Col md="4">
        {pageContext.acf.wordpress_2eme_photo !== null && (
          <img
            src={pageContext.acf.wordpress_2eme_photo.localFile.childImageSharp.fluid.src}
            alt={pageContext.acf.wordpress_2eme_photo.alt_text}
            width="100%"
          />
        )}
      </Col>
      <Col md="4">
        {pageContext.acf.wordpress_3eme_photo !== null && (
          <img
            src={pageContext.acf.wordpress_3eme_photo.localFile.childImageSharp.fluid.src}
            alt={pageContext.acf.wordpress_3eme_photo.alt_text}
            width="100%"
          />
        )}
      </Col>
    </Row>
  </GLayout>
);

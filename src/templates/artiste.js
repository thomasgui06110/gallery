import React from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import Newsletter from "../components/newsletter";
import { injectIntl } from "gatsby-plugin-intl";

const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;
    margin: 15px auto;
    border: 2px solid #fff;
  }
`;
const Article = styled.article`
  margin: 3rem auto;
  font-size: 1.3rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const Wrap = styled.div`
  background-color: #000;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 10px;
  @media (max-width: 1000px) {
    font-size: 1rem;
    padding: 1rem 2px;
  }
`;

const artiste = ({ pageContext, intl }) => {
  return (
    <GLayout>
      <Wrap>
        <SEO title={pageContext.title} description={pageContext.content} />
        <Row>
          <Col className="text-center" mt="0" md="12">
            <HeadlineCenter>
              <h1 className="display-4">
                {intl.formatMessage({ id: "title" }) !== "Gatsby English"
                  ? pageContext.title
                  : pageContext.acf.titre_anglais}
              </h1>
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
            <Article>
              {intl.formatMessage({ id: "title" }) !== "Gatsby English" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageContext.content
                  }}
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageContext.acf.texte_anglais
                  }}
                />
              )}
            </Article>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            {pageContext.acf.photo_1 !== null && (
              <img
                src={
                  pageContext.acf.photo_1.localFile.childImageSharp.fluid.src
                }
                alt={pageContext.acf.photo_1.alt_text}
                width="100%"
                className="mb-3"
              />
            )}
          </Col>
          <Col md="4">
            {pageContext.acf.wordpress_2eme_photo !== null && (
              <img
                src={
                  pageContext.acf.wordpress_2eme_photo.localFile.childImageSharp
                    .fluid.src
                }
                alt={pageContext.acf.wordpress_2eme_photo.alt_text}
                width="100%"
                className="mb-3"
              />
            )}
          </Col>
          <Col md="4">
            {pageContext.acf.wordpress_3eme_photo !== null && (
              <img
                src={
                  pageContext.acf.wordpress_3eme_photo.localFile.childImageSharp
                    .fluid.src
                }
                alt={pageContext.acf.wordpress_3eme_photo.alt_text}
                width="100%"
                className="mb-3"
              />
            )}
          </Col>
        </Row>
      </Wrap>
      <Row>
        <Col>
          <Newsletter></Newsletter>
        </Col>
      </Row>
    </GLayout>
  );
};
export default injectIntl(artiste);

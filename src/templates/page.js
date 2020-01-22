import React from "react";
import GLayout from "../components/layout";
import { createGlobalStyle } from "styled-components";
import { Row, Col, Media } from "react-bootstrap";
import { graphql, StaticQuery } from "gatsby";

const GlobalStyles = createGlobalStyle`
figure {
  text-align:center:
}

h1 {
  text-align:center;
}
`;

export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(filter: { slug: { eq: "home" } }) {
          edges {
            node {
              id
              slug
              title
              content
              featured_media {
                alt_text
                source_url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                    }
                  }
                }
              }
              acf {
                photo_artiste {
                  path
                  source_url
                }
                expositions {
                  path
                  source_url
                }
                Photo_principale {
                  path
                  source_url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <GLayout>
        {pageContext.title !== "HomePage" && (
          <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
        )}
        <GlobalStyles />
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
        <Row>
          <Col className="ml-0 mr-0">
             {pageContext.acf.Photo_principale !== null && (
          <Media>
            <img
              width="100%"
              className="mt-3 mb-5"
              src={pageContext.acf.Photo_principale.source_url}
              alt="Gallery 1222"
            />
          </Media>
        )} 
          </Col>
        </Row>
        <Row>
          <Col md="6" className="text-center mt-3">
            {pageContext.acf.expositions !== null && (
              <img
                src={pageContext.acf.expositions.source_url}
                alt="Artistes"
                width="100%"
              />
            )}
          </Col>
          <Col md="6" className="text-center  mt-3">
            {pageContext.acf.photo_artiste !== null && (
              <img
                src={pageContext.acf.photo_artiste.source_url}
                alt="Artistes"
                width="100%"
              />
            )}
          </Col>
        </Row>
      </GLayout>
    )}
  />
);

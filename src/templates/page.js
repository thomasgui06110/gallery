import React from "react";
import GLayout from "../components/layout";
import styled, { createGlobalStyle } from "styled-components";
import { Row, Col, Media } from "react-bootstrap";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";

const GlobalStyles = createGlobalStyle`
figure {
  text-align:center:
}

h1 {
  text-align:center;
}
`;

const Liens = styled.span`
  font-size: 1.8rem;
  color: #333333;



  &:hover {
    cursor: pointor;
    font-weight: bold;
    text-decoration: none;
  }
`;
const ImgHover = styled.div`
  transition: 0.5s;
  border: 10px solid white;
  border-radius: 10px;
  width:100%;
  heigth:100%;
  &:hover {
    transition: 0.5s;
    opacity: 0.5;
    overflow: hidden;
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
                  alt="Gallery 122"
                />
              </Media>
            )}
          </Col>
        </Row>
        <Row>
          <Col md="6" className="text-center mt-3">
            {pageContext.acf.expositions !== null && (
              <Link to="/artistes">
                <ImgHover>
                  <img
                    src={pageContext.acf.expositions.source_url}
                    alt="Artistes"
                    width="100%"
                    className="mb-0"
                  />
                </ImgHover>
              </Link>
            )}
            <Link to="/artistes">
              <Liens>Artistes</Liens>
            </Link>
          </Col>
          <Col md="6" className="text-center  mt-3">
            {pageContext.acf.photo_artiste !== null && (
              <ImgHover>
                <Link to="/expositions">
                  <img
                    src={pageContext.acf.photo_artiste.source_url}
                    alt="Artistes"
                    width="100%"
                    className="mb-0"
                  />
                </Link>
              </ImgHover>
            )}
            <Link to="/expositions">
              <Liens>Expositions</Liens>
            </Link>
          </Col>
        </Row>
      </GLayout>
    )}
  />
);

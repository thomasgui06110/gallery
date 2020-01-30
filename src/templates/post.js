import React from "react";
import GLayout from "../components/layout";
import styled, { createGlobalStyle } from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import moment from "moment";
import SEO from "../components/SEO";
import { Row, Col } from "react-bootstrap";
const GlobalStyles = createGlobalStyle`
figure {
  text-align:center:
}
h1 {
  text-align:center;
}
`;

const Small = styled.small`
  font-style: italic;
  margin: 0 0 5rem 0;
`;

const Article = styled.article`
  margin: 3rem auto;
  font-size: 1.3rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const Wrap = styled.div`
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
`;
export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost {
          edges {
            node {
              id
              slug
              excerpt
              title
              content
              acf {
                photo_principale {
                  alt_text
                  source_url
                  localFile {
                    base
                  }
                }
              }
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
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <GLayout>
            <SEO title={pageContext.title} description={pageContext.excerpt} />
            <Wrap>
              <Row>
                <Col>
                  {pageContext.title !== "HomePage" && (
                    <h1
                      dangerouslySetInnerHTML={{ __html: pageContext.title }}
                    ></h1>
                  )}
                </Col>
              </Row>
              <Row >
                <Col >
                  {pageContext.title !== "HomePage" && (
                    <Small>
                      le {moment(pageContext.date).format("DD MMMM YYYY")}
                    </Small>
                  )}
                </Col>
              </Row>

              <GlobalStyles />
              <Row>
                <Col >
                  {/* <img
                    width="20%"
                    
                    className="mt-0"
                    src={
                      pageContext.featured_media.localFile.childImageSharp.fluid
                        .src
                    }
                    alt={pageContext.title}
                  /> */}
                  <Article
                    dangerouslySetInnerHTML={{ __html: pageContext.content }}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  
                </Col>
              </Row>
            </Wrap>
          </GLayout>
        </div>
      );
    }}
  />
);

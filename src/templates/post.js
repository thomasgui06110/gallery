import React from "react";
import GLayout from "../components/layout";
import styled, { createGlobalStyle } from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import moment from "moment";
import SEO from "../components/SEO";
import { Row, Col } from "react-bootstrap";
import { useIntl } from "gatsby-plugin-intl";

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
  background-color: #000;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 2px solid white;
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
      const intl = useIntl();
      return (
        <div>
          <GLayout>
            {intl.formatMessage({ id: "title" }) !== "Gatsby English" ? (
              <SEO
                title={pageContext.title}
                description={pageContext.excerpt}
              />
            ) : (
              <SEO
                title={pageContext.acf.titre_anglais}
                description={pageContext.acf.extrait_anglais}
              />
            )}
            <Wrap>
              <Row>
                <Col>
                  {pageContext.title !== "HomePage" && (
                    <h2>
                      {intl.formatMessage({ id: "title" }) !== "Gatsby English"
                        ? pageContext.title
                        : pageContext.acf.titre_anglais}
                    </h2>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  {pageContext.title !== "HomePage" && (
                    <Small>
                      le {moment(pageContext.date).format("DD MMMM YYYY")}
                    </Small>
                  )}
                </Col>
              </Row>

              <GlobalStyles />
              <Row>
                <Col>
                  <Article>
                    {intl.formatMessage({ id: "title" }) !==
                    "Gatsby English" ? (
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
                <Col></Col>
              </Row>
            </Wrap>
          </GLayout>
        </div>
      );
    }}
  />
);

import React from "react";
import GLayout from "../components/layout";
import styled, { createGlobalStyle } from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import moment from "moment";

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
    render={data => (
      <GLayout>
        {pageContext.title !== "HomePage" && (
          <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
        )}
        <Small>le {moment(pageContext.date).format("DD MMMM YYYY")}</Small>
        <GlobalStyles />
        <Article dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </GLayout>
    )}
  />
);

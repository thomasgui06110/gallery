import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Col } from "react-bootstrap";
import SEO from "../components/SEO";

const PageItems = (props) => {
  return (
    
    <StaticQuery
      query={graphql`
        {
          allWordpressPage {
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
                      fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                        src
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
      render={props =>
        props.allWordpressPage.edges.map(PageItem => (
          <div>
           <SEO title= "fgsfg" />
            <Col md="3" key={PageItem.node.id}>
             {props.page} -
              {PageItem.node.acf.expositions !== null && (
                <Img
                  fluid={
                    PageItem.node.featured_media.localFile.childImageSharp.fluid
                  }
                  alt={PageItem.node.title}
                />
              )}
            </Col>
            <Col>{PageItem.node.title}</Col>
          </div>
        ))
      }
    />
  );
};

export default PageItems;

import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Img from "gatsby-image";
import SEO from "./SEO";
const StyledFlexBox = styled.div`
  
  {'' /* border: 12px solid #fff;
  border-radius: 5px; */}
  box-shadow: 1rem 1rem 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.9s;
  will-change: transform;
  { /* overflow: hidden; */}
  margin: 0rem 0.5rem;
  transition-duration: 1s;
  &:hover {
    box-shadow: -1em -2em 20px 2px rgba(0,0,0,0.3)
    transition: opacity 0.3s ease-in-out, transform 0.6s ease-in-out,
      -webkit-transform 0.6s ease-in-out;
    }
  
`;

const StyledFlexBoxArtist = styled.div`
   {
    /* width: 380px; */
  }
  max-height: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin: 0px 0px;
  background-size: cover;
  background-position: center center;
  @media (max-width: 1000px) {
    max-height: 27rem;
  }
`;

const StyledTexte = styled.div`
  width: 100%;
  padding: 10px 20px 10px 20px;
  height: 100%;
  text-align: justify;
  border-radius: 10px;
  line-height: 20px;

  -webkit-transition: 500ms;
  transition: 500ms;

  @media (max-width: 1000px) {
    opacity: 1;
    transition: 800ms;
  }
`;

const StyledImg = styled.div`
  border-radius: 20px;
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out,
    -webkit-transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.3) rotate(5deg);
    opacity: 0.9;
  }
`;

const OuevresItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio2(sort: { fields: date, order: DESC }) {
            edges {
              node {
                excerpt
                id
                content
                title
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
              }
            }
          }
        }
      `}
      render={props =>
        props.allWordpressWpPortfolio2.edges.map(ArtistsItem => (
          <>
            <SEO title="Nos expositions | Gallerie 122" />
            <Row
              className="mt-3 mb-5 mr-1 ml-1 pb-4 pt-4 rowExpo"
              key={ArtistsItem.node.id}
            >
              <Col md="6">
                <StyledFlexBox>
                  <StyledFlexBoxArtist className="cadre">
                    <StyledImg className="mt-0">
                      <Img
                        className="mt-0"
                        fluid={
                          ArtistsItem.node.featured_media.localFile
                            .childImageSharp.fluid
                        }
                        alt={ArtistsItem.node.title}
                      />
                    </StyledImg>
                  </StyledFlexBoxArtist>
                </StyledFlexBox>
              </Col>

              <Col md="6">
                <StyledTexte>
                  <h2
                    className="mt-0 display-4 text-center bold"
                    dangerouslySetInnerHTML={{ __html: ArtistsItem.node.title }}
                  />
                  <p
                    className="mt-3"
                    dangerouslySetInnerHTML={{
                      __html: ArtistsItem.node.content
                    }}
                  ></p>
                </StyledTexte>
              </Col>
            </Row>
          </>
        ))
      }
    />
  );
};

export default OuevresItems;

import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledFlexBox = styled.div`
  
  border: 12px solid #fff;
  border-radius: 5px;
  box-shadow: 1rem 1rem 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.9s;
  will-change: transform;
  { /* overflow: hidden; */}
  margin: 1rem 0.5rem;
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
  max-height: 10rem;
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
  position: absolute;
  bottom: 8px;
  min-width: 40%;
  padding: 0px 10px 10px 10px;
  height: 33px;
  text-align: center;
  border-radius: 60px;
  line-height: 20px;
  background-color: #e5e5e5ad;
  left: 6px;
  opacity: 0.1;
  -webkit-transition: 500ms;
  transition: 500ms;

  @media (max-width: 900px) {
    opacity: 1;
    transition: 800ms;
    background-color: #e5e5e5;
  }
`;

const StyledImg = styled.div`
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out,
    -webkit-transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.3) rotate(5deg);
    opacity: 0.9;
  }
`;

const StyledH2 = styled.h2`
  opacity: 1;
  width: 100%;
  z-index: 5;
  text-align: center;
  left: 0px;
  height: auto;
  margin: 0 auto;
  font-size: 20px;
  line-height: 20px;
  padding: 5px 0 0 0;
  border-radius: 30%;
  color: #000;
  font-weight: bold;
  transition-duration: 0.8s;
  @media (max-width: 900px) {
    
    height: 50px;
    
  
  }
`;

const ArtistsItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio(sort: { fields: date, order: DESC }) {
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
        props.allWordpressWpPortfolio.edges.map(ArtistsItem => (
          <Col md="3" key={ArtistsItem.node.id}>
            <StyledFlexBox>
              <StyledFlexBoxArtist className="cadre">
                <StyledImg className="photo">
                  <Img
                    fluid={
                      ArtistsItem.node.featured_media.localFile.childImageSharp
                        .fluid
                    }
                    alt={ArtistsItem.node.title}
                  />
                </StyledImg>
                <StyledTexte className="texte">
                  <StyledH2>{ArtistsItem.node.title}</StyledH2>
                </StyledTexte>
              </StyledFlexBoxArtist>
            </StyledFlexBox>
          </Col>
        ))
      }
    />
  );
};

export default ArtistsItems;

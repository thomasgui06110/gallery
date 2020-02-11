import React from "react";
import GLayout from "../components/layout";
import styled, { createGlobalStyle } from "styled-components";
import { Row, Col, Media } from "react-bootstrap";
import { graphql, StaticQuery } from "gatsby";
import {} from "gatsby";
import Newsletter from "../components/newsletter";
import { useIntl, Link, formatMessage, FormattedMessage } from "gatsby-plugin-intl";

const GlobalStyles = createGlobalStyle`
figure {
  text-align:center:
}

h1 {
  text-align:center;
}
`;
const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;
    margin: 15px auto;
    border: 2px solid #4f5153;
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
  width: 100%;
  heigth: 100%;
  box-shadow: 2rem 1rem 30px -5px rgba(0, 0, 0, 0.3);
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
        allWordpressPage {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `}
    render={data => {
      const intl = useIntl();
      const textEn = pageContext.acf.contenu_anglais
      return (
        <GLayout>
          <Row>
            <Col className="ml-0 mr-0">
              {pageContext.acf.Photo_principale !== null && (
                <Media>
                  <img
                    width="100%"
                    className="mt-3 mb-5"
                    src={
                      pageContext.acf.Photo_principale.localFile.childImageSharp
                        .fluid.src
                    }
                    alt={pageContext.title}
                  />
                </Media>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {pageContext.slug === "home" && (
                <HeadlineCenter>
                  <h1 className="display-4">
                   
                    {intl.formatMessage({ id: "title" }) == "Gatsby English"
                      ? pageContext.acf.titre_anglais
                      : pageContext.title}
                  </h1>
                </HeadlineCenter>
              )}
              <GlobalStyles />
              <div> 
                {intl.formatMessage({ id: "title" }) == "Gatsby English" ? 
                  (<p
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(textEn)
                    }}
                  /> )
                  
                : 
                 pageContext.content
                 
                  
                }
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" className="text-center mt-3">
              {pageContext.acf.expositions !== null && (
                <Link to="/artistes">
                  <ImgHover>
                    <img
                      src={
                        pageContext.acf.photo_artiste.localFile.childImageSharp
                          .fluid.src
                      }
                      alt="Nos Artistes"
                      width="100%"
                      className="mb-0"
                    />
                  </ImgHover>
                </Link>
              )}
              {pageContext.slug === "home" && (
                <Link to="/artistes">
                  <Liens>{intl.formatMessage({ id: "build" })}</Liens>
                </Link>
              )}
            </Col>
            <Col md="6" className="text-center  mt-3">
              {pageContext.acf.photo_artiste !== null && (
                <ImgHover>
                  <Link to="/expositions">
                    <img
                      src={
                        pageContext.acf.expositions.localFile.childImageSharp
                          .fluid.src
                      }
                      alt="Nos expositions"
                      width="100%"
                      className="mb-0"
                    />
                  </Link>
                </ImgHover>
              )}
              {pageContext.slug === "home" && (
                <Link to="/expositions">
                  <Liens>{intl.formatMessage({ id: "go_page2" })}</Liens>
                </Link>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Newsletter></Newsletter>
            </Col>
          </Row>
        </GLayout>
      );
    }}
  />
);

import React, { useState } from "react";
import GLayout from "../components/layout";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import SEO from "../components/SEO";
import { injectIntl } from "gatsby-plugin-intl";
import DetailOeuvre from "../components/DetailOeuvre";

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
    padding: 1rem;
  }
`;
const Wrap = styled.div`
  background-color: #000;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 10px;
  @media (max-width: 1000px) {
    font-size: 1rem;
    padding: 1rem 0px;
    margin-top: 1rem;
  }
`;
const Images = styled.img`
&:hover {
  cursor:pointer;
}
`

class artiste extends React.Component {
  state={
    detail: true
  }

  render(){
    const { pageContext, intl}  = this.props
    const {detail} = this.state
    console.log(this.state)
    return (
      <GLayout>
        <Wrap>
          <SEO title={pageContext.title} description={pageContext.content} />
        
              <Row>
                <Col className="text-center" mt="0" md="12">
                  <HeadlineCenter>
                    <h1 className="display-5">
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
              {detail && (
            <>
              <Row>
                <Col>
                  <Article>
                    {intl.formatMessage({ id: "title" }) !== "Gatsby English" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: pageContext.content,
                        }}
                      />
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: pageContext.acf.texte_anglais,
                        }}
                      />
                    )}
                  </Article>
                </Col>
              </Row>
              <Row className="justify-content-md-center align-items-center">
              
                <Col md="4">
                  {pageContext.acf.photo_1 !== null && (
                    <Images
                   
                    onClick={(event) => {this.setState({detail:false})}}
                      src={
                        pageContext.acf.photo_1.localFile.childImageSharp.fluid
                          .src
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
                        pageContext.acf.wordpress_2eme_photo.localFile
                          .childImageSharp.fluid.src
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
                        pageContext.acf.wordpress_3eme_photo.localFile
                          .childImageSharp.fluid.src
                      }
                      alt={pageContext.acf.wordpress_3eme_photo.alt_text}
                      width="100%"
                      className="mb-3"
                    />
                  )}
                </Col>
              </Row>
            </>
          )}
  
          {!detail && (
            <Row>
              <Col>
              <Button className="md-5" variant="secondary" size="lg"  onClick={(e) => this.setState({detail: true})}>Retour</Button>
                <DetailOeuvre
               
                  title={pageContext.acf.photo_1.title}
                  description={pageContext.acf.titre_photo_1}
                  dimension={pageContext.acf.photo_1.caption}
                  artiste={pageContext.title}
                  photo={
                        pageContext.acf.photo_1.localFile.childImageSharp.fluid
                          .src
                      }
                      alt={pageContext.acf.wordpress_3eme_photo.alt_text}
                />
              </Col>
            </Row>
          )}
        </Wrap>
      </GLayout>
    );
  }
} 
export default injectIntl(artiste);

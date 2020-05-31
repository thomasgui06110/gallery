import React from "react";
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
    cursor: pointer;
  }
`;
const Rubrique = styled.h3`
  font-size: 1.6rem;
  text-transform: capitalize;
`;

class artiste extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail1: false,
      detail: true,
      detail2: false,
      detail3: false,
      detail4: false,
      detail5: false,
      detail6: false,
    };
  }

  render() {
    const { pageContext, intl } = this.props;
    const {
      detail,
      detail2,
      detail3,
      detail1,
      detail4,
      detail5,
      detail6,
    } = this.state;
    const title_ok = (t) => {
      return <span dangerouslySetInnerHTML={{__html: t}}></span>
    }
   
    
    return (
      <GLayout>
        <Wrap>
          <SEO
            title= { pageContext.title + " | " + pageContext.acf.rubrique}
            description={pageContext.content}
          />

          <Row>
            <Col className="text-center" mt="0" md="12">
              <HeadlineCenter>
                <h2 className="display-5">
                  {intl.formatMessage({ id: "title" }) !== "Gatsby English" ? (
                    title_ok(pageContext.title)
                  ) : (
                    title_ok(pageContext.acf.titre_anglais)

                  )}
                
                </h2>
              </HeadlineCenter>
              <Rubrique>
            
               { title_ok(pageContext.acf.rubrique)}
              </Rubrique>
            </Col>
          </Row>
          {detail &&
            !detail1 &&
            !detail2 &&
            !detail3 &&
            !detail4 &&
            !detail5 &&
            !detail6 && (
              <>
                <Row>
                  <Col>
                    <Article>
                      {intl.formatMessage({ id: "title" }) !==
                      "Gatsby English" ? (
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
                        onClick={(event) => {
                          this.setState({ detail1: true });
                        }}
                        src={
                          pageContext.acf.photo_1.localFile.childImageSharp
                            .fluid.src
                        }
                        alt={pageContext.acf.photo_1.alt_text}
                        width="100%"
                        className="mb-3"
                      />
                    )}
                  </Col>
                  <Col md="4">
                    {pageContext.acf.wordpress_2eme_photo !== null && (
                      <Images
                        onClick={(event) => {
                          this.setState({ detail2: true });
                        }}
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
                      <Images
                        onClick={(event) => {
                          this.setState({ detail3: true });
                        }}
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
                {/* 2eme ligne photos  */}
                <Row className="justify-content-md-center align-items-center">
                  <Col md="4">
                    {pageContext.acf.photo_4 !== null && (
                      <Images
                        onClick={(event) => {
                          this.setState({ detail4: true });
                        }}
                        src={
                          pageContext.acf.photo_4.localFile.childImageSharp
                            .fluid.src
                        }
                        alt={pageContext.acf.photo_4.alt_text}
                        width="100%"
                        className="mb-3"
                      />
                    )}
                  </Col>
                  <Col md="4">
                    {pageContext.acf.photo_5 !== null && (
                      <Images
                        onClick={(event) => {
                          this.setState({ detail5: true });
                        }}
                        src={
                          pageContext.acf.photo_5.localFile.childImageSharp
                            .fluid.src
                        }
                        alt={pageContext.acf.photo_5.alt_text}
                        width="100%"
                        className="mb-3"
                      />
                    )}
                  </Col>
                  <Col md="4">
                    {pageContext.acf.photo_6 !== null && (
                      <Images
                        onClick={(event) => {
                          this.setState({ detail6: true });
                        }}
                        src={
                          pageContext.acf.photo_6.localFile.childImageSharp
                            .fluid.src
                        }
                        alt={pageContext.acf.photo_6.alt_text}
                        width="100%"
                        className="mb-3"
                      />
                    )}
                  </Col>
                </Row>
              </>
            )}

          {detail1 && (
            <Row style={{ padding: "5px" }}>
              <Col>
                <Button
                  className="mb-5"
                  variant="secondary"
                  size="lg"
                  onClick={(e) => this.setState({ detail1: false })}
                >
                  Retour
                </Button>
                <DetailOeuvre
                  title={pageContext.acf.photo_1.title}
                  description={pageContext.acf.titre_photo_1}
                  dimension={pageContext.acf.photo_1.caption}
                  technique={pageContext.acf.technique_photo_1}
                  artiste={pageContext.title}
                  photo={
                    pageContext.acf.photo_1.localFile.childImageSharp.fluid.src
                  }
                  alt={pageContext.acf.photo_1.alt_text}
                />
              </Col>
            </Row>
          )}
          {detail2 && (
            <Row style={{ padding: "5px" }}>
              <Col>
                <Button
                  className="mb-5"
                  variant="secondary"
                  size="lg"
                  onClick={(e) => this.setState({ detail2: false })}
                >
                  Retour
                </Button>
                <DetailOeuvre
                  title={pageContext.acf.wordpress_2eme_photo.title}
                  description={pageContext.acf.descriptif_photo_2}
                  dimension={pageContext.acf.wordpress_2eme_photo.caption}
                  technique={pageContext.acf.technique_photo_2}
                  artiste={pageContext.title}
                  photo={
                    pageContext.acf.wordpress_2eme_photo.localFile
                      .childImageSharp.fluid.src
                  }
                  alt={pageContext.acf.wordpress_2eme_photo.alt_text}
                />
              </Col>
            </Row>
          )}
          {detail3 && (
            <Row style={{ padding: "5px" }}>
              <Col>
                <Button
                  className="mb-5"
                  variant="secondary"
                  size="lg"
                  onClick={(e) => this.setState({ detail3: false })}
                >
                  Retour
                </Button>
                <DetailOeuvre
                  title={pageContext.acf.wordpress_3eme_photo.title}
                  description={pageContext.acf.descriptif_photo_3}
                  dimension={pageContext.acf.wordpress_3eme_photo.caption}
                  technique={pageContext.acf.technique_photo_3}
                  artiste={pageContext.title}
                  photo={
                    pageContext.acf.wordpress_3eme_photo.localFile
                      .childImageSharp.fluid.src
                  }
                  alt={pageContext.acf.wordpress_3eme_photo.alt_text}
                />
              </Col>
            </Row>
          )}
          {detail4 && (
            <Row style={{ padding: "5px" }}>
              <Col>
                <Button
                  className="mb-5"
                  variant="secondary"
                  size="lg"
                  onClick={(e) => this.setState({ detail4: false })}
                >
                  Retour
                </Button>
                <DetailOeuvre
                  title={pageContext.acf.photo_4.title}
                  description={pageContext.acf.descriptif_photo_4}
                  dimension={pageContext.acf.photo_4.caption}
                  technique={pageContext.acf.technique_photo_4}
                  artiste={pageContext.title}
                  photo={
                    pageContext.acf.photo_4.localFile.childImageSharp.fluid.src
                  }
                  alt={pageContext.acf.photo_4.alt_text}
                />
              </Col>
            </Row>
          )}
          {detail5 && (
            <Row style={{ padding: "5px" }}>
              <Col>
                <Button
                  className="mb-5"
                  variant="secondary"
                  size="lg"
                  onClick={(e) => this.setState({ detail5: false })}
                >
                  Retour
                </Button>
                <DetailOeuvre
                  title={pageContext.acf.photo_5.title}
                  description={pageContext.acf.descriptif_photo_5}
                  dimension={pageContext.acf.photo_5.caption}
                  technique={pageContext.acf.technique_photo_5}
                  artiste={pageContext.title}
                  photo={
                    pageContext.acf.photo_5.localFile.childImageSharp.fluid.src
                  }
                  alt={pageContext.acf.photo_5.alt_text}
                />
              </Col>
            </Row>
          )}
          {detail6 && (
            <Row style={{ padding: "5px" }}>
              <Col>
                <Button
                  className="mb-5"
                  variant="secondary"
                  size="lg"
                  onClick={(e) => this.setState({ detail6: false })}
                >
                  Retour
                </Button>
                <DetailOeuvre
                  title={pageContext.acf.photo_6.title}
                  description={pageContext.acf.descriptif_photo_6}
                  dimension={pageContext.acf.photo_6.caption}
                  technique={pageContext.acf.technique_photo_6}
                  artiste={pageContext.title}
                  photo={
                    pageContext.acf.photo_6.localFile.childImageSharp.fluid.src
                  }
                  alt={pageContext.acf.photo_6.alt_text}
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

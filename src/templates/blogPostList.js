import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import styled from "styled-components";
import moment from "moment";
import { Row, Col } from "react-bootstrap";


const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background: ${props => (props.isCurrentPage ? "#eee" : "white")};
`;

const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
`;
const Wrap = styled.div`
  column-count: 2;
  column-gap: 10px;

  color: #71818c !important;
  @media (max-width: 1000px) {
    column-count: 1;
    padding-left:0;
    margin-left: -15px;
  }
`;

const StyledFlexBox = styled.div`
  display: inline-block;
  border: 12px solid #fff;
  border-radius: 5px;
  box-shadow: 1rem 1rem 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.9s;
  will-change: transform;
  { /* overflow: hidden; */}
  margin: 1rem 0.5rem;
  transition-duration: 1s;
  width:200%;
  @media (max-width: 1000px) {
    width:100%;
  }
  &:hover {
    box-shadow: -1em -2em 20px 2px rgba(0,0,0,0.3)
    transition: opacity 0.3s ease-in-out, transform 0.6s ease-in-out,
      -webkit-transform 0.6s ease-in-out;
    }
  
`;
const StyledFlexBoxArtist = styled.div`
  max-height: auto;
  border-radius: 5px;
  overflow: hidden;
  margin: 0px 0px;
  background-size: cover;
  background-position: center center;
  @media (max-width: 1000px) {
    max-height: auto;
  }
`;
const Picture = styled.div`
  overflow: hidden;
  heigth: auto;
  margin-bottom: 2rem;
`;
const StyledImg = styled.div`
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out,
    -webkit-transform 0.5s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.3) rotate(5deg);
    opacity: 0.9;
    overflow: hidden;
  }
`;
const Next = styled.span`
  border: 2px solid #e9eff5;
  color: #71818c !important;
  width: 30%;
  text-transform: uppercase;
  border-radius: 60px;
  background-color: #f7f9fb;
  padding: 0.6rem 2rem;
  text-align: center;
  transition: 0.5s;
  &:hover {
    color: #fff;
    border: 2px solid #b4b4b4;
    transition: 0.5s;
  }
`;
const NextWrap = styled.div`
  height: 4rem;
  margin: 2rem 1rem 0 0;
  float: right;
`;
const Small = styled.small`
  font-style: italic;
  margin: 0 0 2rem 0;
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
export default ({ pageContext, data }) => (
  
  <Layout>
    <Row>
      <Col className="text-center" mt="0" md="12">
        <h1 mb="0">
          <HeadlineCenter className="display-4">
            Le Blog Gallery 122
          </HeadlineCenter>
        </h1>
        <p className="font-italic">Suivez notre actu !</p>
      </Col>
    </Row>
    <Wrap>
      {pageContext.posts.map(post => (
        <Col md="6" key={post.node.wordpress_id}>
         
          <StyledFlexBox>
            <StyledFlexBoxArtist className="cadre">
              <Picture>
                <StyledImg>
                  <Link to={`/post/${post.node.slug}`}>
                    <img
                      width="100%"
                      className="mt-0"
                      src={post.node.featured_media.localFile.childImageSharp.fluid.src}
                      alt={post.node.title}
                    />
                  </Link>
                </StyledImg>
              </Picture>
              <h2
                className="pl-2"
                dangerouslySetInnerHTML={{ __html: post.node.title }}
              />
              <Small className="pl-2">
                le {moment(post.node.date).format("DD MMMM YYYY")}
              </Small>
              <p
                className="pl-2 pr-2 mt-2"
                dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
              ></p>
              <NextWrap>
                <Link to={`/post/${post.node.slug}`}>
                  <Next>Lire la suite </Next>
                </Link>
              </NextWrap>
            </StyledFlexBoxArtist>
          </StyledFlexBox>
        </Col>
      ))}
    </Wrap>
    <Pagination>
      {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
        <PageNumberWrapper
          key={index}
          isCurrentPage={index + 1 === pageContext.currentPage}
        >
          <PageNumber to={index === 0 ? `/blog` : `/blog/${index + 1}`}>
            {index + 1}
          </PageNumber>
        </PageNumberWrapper>
      ))}
    </Pagination>
  </Layout>
);


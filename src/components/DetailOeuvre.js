import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "./Formulaire";

const DetailOeuvre = ({
  title,
  artiste,
  dimension,
  description,
  alt,
  photo,
  technique,
}) => {
  return (
    <div>
      <Row>
        <Col className="text-center" md="6" xs="12">
          <img
            max-width={620}
            min-height={700}
            width="93%"
            src={photo}
            alt={alt}
          />
        </Col>
        <Col md="6" xs="12">
          <p style={{ fontSize: "2rem", marginTop:"10px", marginBottom: "-5px" }} dangerouslySetInnerHTML={{
                __html:title}}></p>
          <p>
            <span
              style={{ fontSize: "1rem", fontStyle: 'italic', marginLeft: "3px", marginBottom: "80px" }}
              dangerouslySetInnerHTML={{ __html: technique }}
            ></span>
          </p>
          <p style = {{ marginTop: "2rem"}}>
            Dimensions :
            <span
              dangerouslySetInnerHTML={{
                __html: dimension.replace(/<p>/, " "),
              }}
            ></span>
          </p>

          <p style = {{ marginTop: "3rem"}}>
            <span dangerouslySetInnerHTML={{ __html: description }}></span>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="8" mr="auto" ml="auto">
          <Form title={title} artiste={artiste} photo={photo} />
        </Col>
      </Row>
    </div>
  );
};

export default DetailOeuvre;

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
}) => {
  return (
    <div>
    
      <Row>
        <Col className="text-center" md="6" xs="12">
          <img width={400} src={photo} alt={alt} />
        </Col>
        <Col md="6" xs="12">
         <p> Nom de l'oeuvre : {title} </p>
          <p>
            Dimensions :
            <span dangerouslySetInnerHTML={{ __html: dimension.replace(/<p>/, ' ') }}></span>
          </p>
          <br />
          <p>Description{ ` : `} 
          <span dangerouslySetInnerHTML={{ __html: description }}></span></p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="8" mr="auto" ml="auto">
          <Form title={title} artiste={artiste} />
        </Col>
      </Row>
    </div>
  );
};

export default DetailOeuvre;

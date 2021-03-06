import React from "react";
import { Col, Row, Alert } from "react-bootstrap";
import styled from "styled-components";
import SEO from "../components/SEO";
import GLayout from "../components/layout";

const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;
    margin: 15px auto;
    border: 2px solid #4f5153;
  }
`;

const LeftCol = styled.div`
  background-color: #fff;
  padding: 2rem 5rem 2rem 5rem;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: auto;
  margin: 0;
  @media (max-width: 1000px) {
    padding: 2rem 1rem 2rem 1rem;
    transition: 800ms;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
const RCol = styled.div`
  background-color: #333333;
  padding: 2rem 5rem 2rem 5rem;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 0;
  color: #fff;
  a {
    color: white;
  }
  @media (max-width: 1000px) {
    padding: 2rem 1rem 2rem 1rem;
    transition: 800ms;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    margin-left: 1rem;
    background-color: #333333;
    color: #fff;
  }
`;

const Contact = () => {
  return (
    <div>
      <GLayout>
        <SEO
          title="Message envoyé"
          description="Pour toute demande de renseignements, n'hésitez pas à contacter la Gallerie 122 à l'aide du formulaire. Nous vous répondrons très rapidement"
        />
        <h1 mb="0" className="text-center">
          <HeadlineCenter className="display-4">Contactez nous</HeadlineCenter>
        </h1>
        <Row>
          <Col md="8" xs="12" className="mr-0 pr-0">
            <LeftCol>
              <Alert variant="success">
                <p>
                  Thank you, your message has been sent successfully / Merci
                  votre message a été correctement envoyé
                </p>
              </Alert>
            </LeftCol>
          </Col>
          <Col md="4" xs="12" className=" pl-0">
            <RCol>
              <h3>Phone /Téléphone</h3>
              <p>+33 4 93 93 93 93</p>
              <h3>Address / Adresse</h3>
              Gallerie 122
              <br />
              122 Rue d'Antibes
              <br />
              06400 Cannes - France <p></p>
              <h3>Mail</h3>
              <p>
                <a href="mailto:contact@122gallerievieceli.com">
                  contact@122gallerievieceli.com
                </a>
              </p>
              <h3> Horaires</h3>
              <p>De 10h à 12h et 14h à 18h</p>
            </RCol>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <iframe
              title="Gallery 122 Cannes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.6199390697197!2d7.024202915720587!3d43.55196376698875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce8195c5ea6603%3A0x9caff7af986269d7!2s122%20Rue%20d&#39;Antibes%2C%2006400%20Cannes!5e0!3m2!1sfr!2sfr!4v1580144183896!5m2!1sfr!2sfr"
              width="100%"
              height="500px"
              allowFullScreen=""
            ></iframe>
          </Col>
        </Row>
      </GLayout>
    </div>
  );
};

export default Contact;

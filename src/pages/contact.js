import React from "react";
import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
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

const Contact = () => {
  return (
    <div>
      <GLayout>
        <SEO
          title="Contacter la Gallerie 122 Cannes"
          description="Pour toutedemande de renseignements, n'hésitez pas à contacter la Gallerie 122 à l'aide du formulaire. Nous vous répondrons très rapidement"
        />
        <h1 mb="0">
          <HeadlineCenter className="display-4">Contactez nous</HeadlineCenter>
        </h1>
        <Row>
          <Col className="col-8">
            <h3>Envoyez-nous un message</h3>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="Contact Form" />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your Name / Votre Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your email / Votre email</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      name="email"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Mail"
                      id="email"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Subject / Sujet</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    id="subject"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    id="message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">Send / Envoyer</Button>
                
              </Form>
            </form>
          </Col>
          <Col className="col-4">Téléphone</Col>
        </Row>
      </GLayout>
    </div>
  );
};

export default Contact;

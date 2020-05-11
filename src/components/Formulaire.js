import React from "react";
import styled from "styled-components";
import { Col, Row, Form, InputGroup } from "react-bootstrap";
import { FaUserCircle, FaEnvelopeOpenText } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import menuCss from "./menuCss.css";

const Submit = styled.button`
  display: inline-block;
  padding: 10px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: rgba(31, 31, 31, 0.9);
  border: none;
  border-radius: 15px;
  box-shadow: 0 7px #999;
  transition-duration: 0.5s;
  &:hover {
    background-color: #131313;
    transition-duration: 0.5s;
    outline: none;
  }
  &:active {
    background-color: #333333;
    transition-duration: 0.5s;
    box-shadow: 0 4px #666;
    transform: translateY(4px);
    outline: none;
    &:visited {
      outline: none;
    }
  }
`;

const Formulaire = ({ title, artiste, photo }) => {
  return (
    <form
      name="artiste"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="artiste" />
      <Row>
        <Col>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <FaUserCircle />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name2"
                placeholder="Your Name / Votre Nom"
                id="name2"
              />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <FaUserCircle />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="prenom"
                placeholder="Your FirstName / Votre Prenom"
                id="firstname"
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                name="email"
                required
                aria-describedby="inputGroupPrepend"
                placeholder="Mail"
                id="email"
              />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <MdPhoneIphone />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="Phone"
                aria-describedby="inputGroupPrepend"
                placeholder="Your Phone / Votre Téléphone"
                id="Phone"
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Form.Control type="hidden" name="photo " value={photo} id={photo} />

      <Form.Control type="hidden" name="title " value={title} id={title} />

      <Form.Control type="hidden" name="artiste" value={artiste} id={artiste} />

      <Form.Group>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">
              <FaEnvelopeOpenText />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            as="textarea"
            name="message"
            rows="4"
            placeholder="Your Message / Votre message"
            id="message"
          />
        </InputGroup>
      </Form.Group>

      <p>
        <Submit type="submit">Send / Envoyer</Submit>
      </p>
    </form>
  );
};
export default Formulaire;

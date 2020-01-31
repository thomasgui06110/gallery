import React from "react";
import styled from "styled-components";

const HeadlineCenter = styled.span`
  &::after {
    content: " ";
    display: block;
    width: 100px;
    margin: 15px auto;
    border: 2px solid #4f5153;
  }
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: rgba(31, 31, 31, 0.9);
  border: none;
  width: 260px !important;
  height: 45px;
  border-radius: 7px;
  color: white;
  padding: 0 0 0 15px;
  outline: none;
  box-shadow: 5px 6px 10px 3px rgba(0, 0, 0, 0.3);
  &::placeholder {
    color: rgba(245, 245, 245, 0.7);
    font-size: 1em;
  }
`;

const Button = styled.button`
  width: 260px !important;
  margin: 0.5em;
  background-color: rgba(31, 31, 31, 0.9);
  height: 43px;
  outline: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: rgba(31, 31, 31, 0.9);
  border: none;
  border-radius: 10px;
  box-shadow: 0 6px #999;
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
const Newsletter = () => {
  return (
    <div>
      <h2 mt="4" mb="0" className="text-center mt-4">
        <HeadlineCenter className="display-5">
          Abonnez-vous à notre newsletter
        </HeadlineCenter>
      </h2>
      <form
        className="mt-2 text-center"
        name="newsletter"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <Input type="text" placeholder="First Name / Prénom" name="Prenom" />
        <Input type="text" placeholder="Name / Nom" name="Nom" />
        <Input type="mail" placeholder="Mail" name="Mail" />

        <Button type="submit">S'ABONNER</Button>
      </form>
    </div>
  );
};
export default Newsletter;

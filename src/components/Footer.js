import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const FooterMain = styled.footer`
  top: 0px;
  {'' /* width:1140px; */}
  width:100%;
  padding:2rem 2rem 1rem 2rem;
  background-color: rgba(0, 0, 0, 1);
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 5px 0.5rem 1.5rem 1px rgba(0, 0, 0, 0.3);
  text-align:center;
  color:#fff;
  a {
    color:#000   
}
`;
const Font = styled.span`
font-size:1.5rem;
transition:500ms;

&:hover{
    opacity:0.5
    cursor:pointer;
}
a {
    color: white;
  }
`;
const styledLink = {
  color: "#f1f1f1"
};

const Footer = () => (
  <FooterMain>
    <p>
      © 122 Galerie Vieceli | 122 Rue d'Antibes 06400 Cannes - France | Tous droits
      réservés |
      <Link to="/politique-de-confidentialite" style={styledLink}>
        <em>
          <small> Mentions Légales</small>
        </em>
      </Link>
    </p>
    <Font>
      <a href="https://instagram.com/galerievieceli?igshid=1vgijnannwbqf" target="_blanck">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/Galerie-Vieceli-414384205380337" target="_blanck" >
        <FaFacebookF />
      </a>
    </Font>
  </FooterMain>
);

export default Footer;

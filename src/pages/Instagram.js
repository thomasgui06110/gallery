import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout"
import styled from "styled-components";

const H1 = styled.h1`
  
  margin-bottom: 25px;
  text-align:center;
`;

const Insragram = () => (
  <Layout>
 <SEO
          title="Nos publications Instagram"
          description="Retrouvez nos publications Instagram"
        />
    <H1>Instagram</H1>
    
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div class="elfsight-app-a6bb62f3-9da3-4df0-98a8-b8192507bb2b"></div> 
  </Layout>
)

export default Insragram

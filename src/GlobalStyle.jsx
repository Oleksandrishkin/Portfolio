import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import  heroBackground  from "./images/dgeg2dp-a04e53c1-1c1a-4739-b54a-09803493680d.jpg";
export const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 320px) {
        width: 320px;
        margin-top: 17px;
        margin-bottom: 17px;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
 
        margin: 0;
        font-family: 'Montserrat Alternates', 'Montserrat';
        font-weight: 500;
        font-style: normal;
        line-height: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
padding-bottom: 210px;
padding-top: 170px;

width: auto;
height:400px;

background-image: linear-gradient(
  to left,
  rgba(47, 48, 58, 0.4),
  rgba(0, 0, 0, 0.907)
),
url(${heroBackground});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
    }
  
    code {
        font-family: 'Montserrat Alternates', 'Montserrat';
    }
  
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
  
    ul {
        list-style: none;
    }
  
    a {
        text-decoration: none;
    }
  
    h1,
    h2,
    h3,
    p,
    ul {
        margin: 0;
        padding: 0;
    }
`;
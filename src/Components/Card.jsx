import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ image, title, id }) => {
 return (
  <CARD>
   <Link to={"/recipe/"+ id}>
    <img src={image} alt={title} />
    <h4>{title}</h4>
   </Link>
  </CARD>
 );
};

const CARD = styled.div`
 img {
  width: 100%;
  border-radius: 2rem;
 }
 a {
  text-decoration: none;
 }
 h4 {
  text-align: center;
  padding: 1rem;
 }
`;
export default Card;

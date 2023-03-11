import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { Link } from "react-router-dom";

const Popular = () => {
 const [popular, setPopular] = useState([]);

 useEffect(() => {
  getPopular();
 }, []);

 const getPopular = async () => {
  const check = localStorage.getItem("popular");
  if (check) {
   setPopular(JSON.parse(check));
  } else {
   const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=806f36ed0a3b460882b139ab5cfdda75&number=9`
   );
   const data = await api.json();
   localStorage.setItem("popular", JSON.stringify(data.recipes));
   setPopular(data.recipes);
  }
 };
 return (
  <div>
   <Wrapper>
    <h3>Popular Picks</h3>
    <Splide
     options={{
      perPage: 4,
      arrows: false,
      pagination: false,
      drag: "free",
      gap: "2rem",
      autoplay: true,
      perMove:3,
      breakpoints: {
       480: {
        perPage: 1,
        autoplay: true,
       },
       928:{
        perPage:3,
       }
      },
     }}
     data-splide-interval="300"
    >
     {popular.map((recipe) => {
      return (
       <SplideSlide key={recipe.id}>
        <Card>
         <Link to={"/recipe/" + recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
         </Link>
        </Card>
       </SplideSlide>
      );
     })}
    </Splide>
   </Wrapper>
  </div>
 );
};

const Wrapper = styled.div`
 margin: 3rem 0rem;
`;
const Card = styled.div`
 min-height: 15rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;

 img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
 }
 p {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
 }
`;

export default Popular;

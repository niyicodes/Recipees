import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Card from "../Components/Card";

const Cuisine = () => {
 const [cuisine, setCuisine] = useState([]);
 let params = useParams();
 const getCuisine = async (name) => {
  const api = await fetch(
   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=100`
  );
  const recipes = await api.json();
  setCuisine(recipes.results);
 };
 useEffect(() => {
  getCuisine(params.type);
 }, [params.type]);
 return (
  <Grid
   animate={{ opacity: 1 }}
   initial={{ opacity: 0 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.5 }}
  >
   {cuisine.map((item) => {
    return (
     <Card image={item.image} title={item.title} key={item.id} id={item.id} />
    );
   })}
  </Grid>
 );
};

const Grid = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
 grid-gap: 3rem;
`;

export default Cuisine;

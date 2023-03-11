import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import styled from "styled-components";
const Searched = () => {
 const [searched, setSearched] = useState([]);
 let params = useParams();
 const getSearched = async (name) => {
  const api = await fetch(
   `https://api.spoonacular.com/recipes/complexSearch?apiKey=806f36ed0a3b460882b139ab5cfdda75&query=${name}&number=100`
  );
  const recipes = await api.json();
  setSearched(recipes.results);
 };
 useEffect(() => {
  getSearched(params.search);
 }, [params.search]);
 return (
  <Grid>
   {searched.map((item) => {
    return (
     <Card image={item.image} title={item.title} key={item.id} id={item.id} />
    );
   })}
  </Grid>
 );
};

const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
 grid-gap: 3rem;
`;
export default Searched;

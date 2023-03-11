import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
 const [details, setDetails] = useState({});
 const [activeTab, setActiveTab] = useState("instructions");
 let params = useParams();

 const fetchDetails = async () => {
  const data = await fetch(
   `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const detailsData = await data.json();
  setDetails(detailsData);
 };

 useEffect(() => {
  fetchDetails();
 },[]);

 return (
  <DetailWrapper>
   <div>
    <h2>{details.title}</h2>
    <img src={details.image} alt="" />
   </div>
   <Info>
    <div className="btn">
    <Button
     className={activeTab === "instructions" ? "active" : ""}
     onClick={() => setActiveTab("instructions")}
    >
     Instructions
    </Button>
    <Button
     className={activeTab === "ingredients" ? "active" : ""}
     onClick={() => setActiveTab("ingredients")}
    >
     Ingredients
    </Button>
    </div>
    {activeTab === "instructions" && (
     <div>
      <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
      <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
     </div>
    )}
    {activeTab === "ingredients" && (
     <ul>
      {details.extendedIngredients.map((ingredient) => {
       return <li key={ingredient.id}>{ingredient.original}</li>;
      })}
     </ul>
    )}
   </Info>
  </DetailWrapper>
 );
};

const DetailWrapper = styled.div`
 margin-top: 3rem;
 margin-bottom: 2.5rem;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 gap:3rem;
 img{
  width: 100%;
  border-radius: 10px;
 }
 h3{
  text-align: justify;
 }
 .active {
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
 }

 h2 {
  margin-bottom: 2rem;
 }
 li {
  font-size: 1.2rem;
  line-height: 2.5rem;
 }
 ul {
  margin-top: 2rem;
 }
 @media screen and (max-width:1024px){
   h3{
   font-size:1rem;
   text-align: justify;
  }
 }
`;
const Button = styled.button`
 padding: 1rem 2rem;
 color: #313131;
 background: white;
 border: 2px solid black;
 margin-right: 2rem;
 font-weight: 600;
`;

const Info = styled.div`
 margin-left: .5rem;
 @media (min-width: 280px) and (max-width: 480px){
.btn{
 display: flex;
 flex-direction:column ;
 align-items: center;
 gap:1rem;
}
 }
 
`;
export default Recipe;

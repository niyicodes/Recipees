import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
 const [input, setInput] = useState("");
 const navigate = useNavigate();
 const submitHandler = (e) => {
  e.preventDefault();
  navigate("/searched/" + input);
 };

 return (
  <FormStyle onSubmit={submitHandler}>
   <div>
    <FaSearch />
    <input
     type="text"
     name=""
     id=""
     value={input}
     onChange={(e) => setInput(e.target.value)}
    />
   </div>
  </FormStyle>
 );
};

const FormStyle = styled.form`
 div {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:1rem auto;
 }

 input {
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 1rem;
  outline: none;
  width: 100%;
 }
 svg {
  position: absolute;
  right:10px;
  color: white;
 }
`;
export default Search;

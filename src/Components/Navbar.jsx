import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import {GiKnifeFork} from "react-icons/gi"
const Navbar = () => {
  return (
    <Logo>
     <nav>
      <GiKnifeFork />
      <Link to="/">Recipees!</Link>
     </nav>
    </Logo>
  )
}

const Logo = styled.div`
 text-decoration: none;
 font-size: 1.5rem;
 font-weight: 400;
 position: sticky;
 /* font-family: ; */
 nav{
  padding:1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
   font-size: 2rem;
  }
 }
`
export default Navbar
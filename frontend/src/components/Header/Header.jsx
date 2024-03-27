import React from 'react'
import { ReactNavbar } from "overlay-navbar";
import logo from "../../Image/logo.jpeg";
import {FaUserAlt} from"react-icons/fa";
 
const Header = () => {
  return (
    <ReactNavbar 

    logo={logo}
    navColor1="white"
    navColor2="black" 
    burgerColor="red"
    burgerColorHover="Black"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Project"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/project"
    link4Url="/contact"
    link1Color="white"
    link1ColorHover="yellow"
    link1Size="1.5rem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    />
  )
}

export default Header
import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Faq from "./Faq"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard />
      <Faq />
    </>
  )
}

export default About

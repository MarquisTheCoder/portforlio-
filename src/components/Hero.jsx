import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar";


const Section = styled.div`
  scroll-snap-align: center;
  background-color: transparent;
  height: 100vh;
`;


function Hero(){
    return(
        <Section>
           <Navbar />
        </Section>
    )
}

export default Hero
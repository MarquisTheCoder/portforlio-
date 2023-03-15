import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar";


const Section = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
   height: 100px;
   width: 1200px;
   justify-content: space-between;
`
function Hero(){
    return(
        <Section>
           <Navbar />
           <Container>Hero</Container>
        </Section>
    )
}

export default Hero
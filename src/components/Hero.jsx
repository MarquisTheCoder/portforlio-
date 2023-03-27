import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;
const Right = styled.div``;
const Container = styled.div``;
const Title = styled.div``;
const What = styled.div``;
const Line = styled.div``;
const Subtitle = styled.div``;

// making the hero section for the website
function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Plan. Prepare. Execute</Title>
          <What>
            <Line />
            <Subtitle>What I do</Subtitle>
          </What>
        </Left>
        <Right> </Right>
      </Container>
    </Section>
  );
}

export default Hero;

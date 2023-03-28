import React from "react";
import { Button } from "selenium-webdriver";
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

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 85vw;
  display: flex;
  gap: 50px;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Right = styled.div`
  flex: 3;
`;
const Title = styled.div`
  font-size: 74px;
  font-weight: 400;
`;
const What = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background-color: #db2ef1;
  opacity: 0.6;
`;
const Subtitle = styled.div`
  color: #da4ea2;
`;

const Description = styled.div`
  font-size: 30px;
  color: lightgrey;
  font-weight: 300;
`;

const Button = styled.button`
  width: fit-content;
  height: 50px;
  border-radius: 5px;
  background-color: #5a62e1;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 450;
  padding: 10px 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 700px;
`;

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
            {/* <Subtitle>What I do</Subtitle> */}
          </What>
          <Description>
            Creating and developing to maximize my impact on your projects.
          </Description>
          <Button>Learn more</Button>
        </Left>
        <Right>
          {/* {3d model} */}
          <Image src="./img/dollarbomb.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;

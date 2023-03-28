import React from "react";
import styled from "styled-components";

const Section = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse !important;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
   @media (max-width: 768px) {
    flex: 1;
    width: 100vw;
    height: 250px;
    width: 250px;
    justify-content: center;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem; 
`;
const ListItem = styled.li`
  list-style: none;
  font-size: 5rem;
  font-weight: 400;
  color: white;
`;
const Image = styled.img`

  filter: invert(100%);
  opacity: 0.78;
  width: 100%;
    @media (max-width: 768px) {
    width: 115%;
  }
`;
const SelfieImage = styled.img`
  opacity: 0.78;
  width: 100%;
`;
const Line = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 10px;
  /* border-bottom: 1px dotted white; */
  opacity: 0.4;
  margin-top: 1.2em;
`;
const Heading = styled.h1`
  font-size: 4em;
  font-weight: 400;
`;
const ImageContainer = styled.div`
padding: 20px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 1px dotted #fff5;
  @media (max-width: 768px) {
    height: 250px;
    width: 250px;
  }
`;
const focusPoints = [
  "Full Stack Development ",
  
];
function Works() {
  return (
    <Section>
      <Container>
        <Left>
          
          <List>
            {/* mapping out all focus point to the page using javascript */}
            {/* {focusPoints.map(item => <ListItem>{item}</ListItem>)}  */}
            <ImageContainer>
              <SelfieImage src="./img/layers.png"/>
            </ImageContainer>
            {/* <Heading>Full Stack Developer.</Heading> */}
          </List> 
        </Left>
        <Right>    
            <Line />
            <Image src="./img/symbols.png" />
          {/* <Image src="./img/cryptomami.png"/> */}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;

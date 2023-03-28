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
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
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
`;

const focusPoints = [
  "Full Stack Development ",
  
];
function Works() {
  return (
    <Section>
      <Container>
        <Left>
      
        </Left>
        <Right>    
          <List>
            {/* mapping out all focus point to the page using javascript */}
            {focusPoints.map(item => <ListItem>{item}</ListItem>)}
          </List>
          {/* <Image src="./img/cryptomami.png"/> */}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;

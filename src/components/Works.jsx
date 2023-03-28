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

const List = styled.ul``;
const ListItem = styled.li``;

const focusPoints = [
  "Development",
  "Project Management",
  "Marketing",
  "Design",
];
function Works() {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {/* mapping out all focus point to the page using javascript */}
            {focusPoints.map(item => <ListItem>{item}</ListItem>)}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
}

export default Works;

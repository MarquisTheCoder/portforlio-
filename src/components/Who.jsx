import React from "react";
import styled from "styled-components";

const Section = styled.div`
  scroll-snap-align: center;
  background-color: transparent;
  height: 100vh;
  width: 100vw;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color: lightgrey;
`;
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 99%;
height: 50%;
padding: 1px;
gap: 3vw;
overflow-x: scroll;
`;


const Image = styled.img`
  width: 400px;
`;

const ProjectImage = styled.img`
height: 400px;
width: auto;
padding-bottom: 100px;
`;
const focusPoints = [
  "Development",
  "Design",
  "Marketing",
  "Product Management",
];

const allProjectImages = [
  "./img/projects/lisa.png",
  "./img/projects/lisa.png",
  "./img/projects/mami.png",
  "./img/projects/profile_venued.png",
  "./img/projects/venued.png",
];

function Who() {
  return (
  <Section>
    <Container>
      <Content>
        <Heading>What I Can Do</Heading>
      </Content>
      <Content>
        {allProjectImages.map((image, index) => <ProjectImage key={index} src={image} />)}
      </Content>
    </Container>
  </Section>);
}

export default Who;

import React from "react";
import styled from "styled-components";

const Section = styled.div`
  scroll-snap-align: center;
  background-color: transparent;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  width: 400px;
`;
const focusPoints = [
  "Development",
  "Design",
  "Marketing",
  "Product Management",
];

function Who() {
  return <Section>
    <Image src="./img/projects.png"/>
  </Section>;
}

export default Who;

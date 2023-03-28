import React from "react";
import styled from "styled-components";

const Section = styled.div`
  scroll-snap-align: center;
  background-color: transparent;
  height: 100vh;
  width: 100vw;
`;

const focusPoints = [
  "Development",
  "Design",
  "Marketing",
  "Product Management",
];

function Who() {
  return <Section></Section>;
}

export default Who;

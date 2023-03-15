import React from "react"
import styled from "styled-components"

const Section = styled.div`
  background-color: rgb(62, 135, 184);
  scroll-snap-align: center;
  scroll-snap-stop: always;
  height: 100vh;
  width: auto;
`;

function Who(){
    return (
        <Section>Who</Section>
    )
}

export default Who
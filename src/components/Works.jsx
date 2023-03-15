import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  background-color: rgb(102, 51, 153);
  scroll-snap-align: center;
  scroll-snap-stop: always;
  height: 100vh;
  width: 100vw;
`;

function Works(){
    return (
        <Section> Works </Section>
    )
}

export default Works
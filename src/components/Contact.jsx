import React from "react"
import styled from "styled-components"

const Section = styled.div`
  scroll-snap-align: center;
  background-color: transparent;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProfileContainer = Styled.div``;
const ContactContainer = Styled.div``;

function Contact(){
    return(
        <Section>
          <Container>
            <ProfileContainer></ProfileContainer>
            <ContactContainer></ContactContainer>
          </Container>
        </Section>
    )
}

export default Contact
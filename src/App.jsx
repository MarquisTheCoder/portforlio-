import styled from "styled-components";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  background-color: black;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpg");
`;

function App() {
  return (
    <Container>
      <Hero />
      <Works />
      <Who />
      <Contact />
    </Container>
  );
}

export default App;

import { Base, Navbar } from "../components";
import { useSpring } from "@react-spring/web";
import { Home, About, Projetos, Contato } from "./";
import styled from "styled-components";
import { Route, Routes } from "react-router";

export const Container = styled.section`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  .section{
    height: 100%;
    padding-top: 7rem;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;


export default function App() {

  const animation = useSpring({
    delay: 2,
    from:{ opacity: 0.1, y: -10 },
    to:{ opacity: 1, y: 0 }
  });

  return (
    <>
      <Navbar/>
      <Container>
        <Home />
        <About/>
        <Projetos />
        <Contato/>
      </Container>
    </>
  )
}

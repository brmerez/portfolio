import { Column, Container, Project } from "./styles";
import { Base } from "../../components";
import { useState, useRef } from "react";

enum projetos {
  assaz = "ASSAZ",
  chat = "CHAT",
  wordle = "WORDLE"
}

export default function Projetos() {

  const [ active, setActive ] = useState(projetos.assaz)

  return (
    <Base className="section" style={{backgroundColor: "#a47551"}}>
      <Container>
        <Column>
          <Project onClick={() => setActive(projetos.assaz)}>
            <h4>assaz organica</h4>
          </Project>
          <Project onClick={() => setActive(projetos.chat)}>
            <h4>chat react</h4>
          </Project>
          <Project onClick={() => setActive(projetos.wordle)}>
            <h4>clone wordle</h4>
          </Project>
        </Column>
        <Column>
          {
            active === projetos.assaz &&
            <Projeto />
          }
          {
            active === projetos.chat &&
            <Projeto />
          }
          {
            active === projetos.wordle &&
            <Projeto />
          }
        </Column>
      </Container>
    </Base>
  )
}

function Projeto() {
  return (
    <div>index</div>
  )
}

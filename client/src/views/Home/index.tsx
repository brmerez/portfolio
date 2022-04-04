import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Container, Wrapper, Chamada, Socials } from "./styles";
import { Base, Navbar } from "../../components";
import { useSpring } from "@react-spring/web";
import { About, Projetos, Contato } from "../";

export default function Home() {

  const animation = useSpring({
    delay: 2,
    from:{ opacity: 0.1, y: -10 },
    to:{ opacity: 1, y: 0 }
  });

  return (
    <Base className="section">
      <Wrapper>
        <Chamada style={animation}>
          <h2>Oi,<br/> meu nome é <span className="detail">Bruno</span>.</h2>
          <p>Trabalho criando aplicações usando <span className="detail">React</span>, <span className="detail">styled-components</span> e outras coisas.</p>
          <Socials>
            <a href="https://github.com/brmerez" target="_blank" ><BsGithub/></a>
            <a href="https://www.linkedin.com/in/bruno-merez/" target="_blank"><BsLinkedin/></a>
            <a href="https://twitter.com/brmerez" target="_blank"><BsTwitter/></a>
          </Socials>
        </Chamada>
      </Wrapper>
  </Base>
  )
}

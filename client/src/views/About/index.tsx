import { Base } from '../../components';
import { Container, Column, Tech, TechStack, Legenda } from './styles';
import { useMediaQuery } from 'react-responsive';
import { FaReact, FaNodeJs, FaDocker, FaGit } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTypescript, SiJavascript, SiPython } from "react-icons/si";
import { BsTerminalFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function About() {

  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <Base className="section" style={{backgroundColor: "#d0b49f"}}>
      <Container>
        <Column>
          <Legenda>
            <h4 style={{fontSize: "2.8rem"}}>Trabalho desenvolvendo soluções para <span className="detail">pessoas e problemas reais.</span></h4>
            <br /><br />
            <p style={{textAlign: "justify"}}>
              Tenho 21 anos, sou estudante de História pela Universidade de São Paulo e 
               <span className="detail">Desenvolvedor Full-stack</span> em tempo integral  
              na startup de gastronomia <span className="detail">Assaz Orgânica</span> em São Paulo - SP.
              <br /><br />
              Hoje me encarrego principalmente em desenvolver, arquitetar e manter aplicações visando
              <span className="detail"> facilitar e otimizar</span> processos internos da empresa.
            </p>
          </Legenda>
          <TechStack>
            <Tech><SiJavascript/></Tech>
            <Tech><SiTypescript/></Tech>
            <Tech><SiPython/></Tech>
            <Tech><FaReact/></Tech>
            <Tech><FaNodeJs/></Tech>
            <Tech><FaDocker/></Tech>
            <Tech><FaGit/></Tech>
            <Tech><BsTerminalFill/></Tech>
            <Tech><SiMongodb/></Tech>
            <Tech><SiMysql/></Tech>
          </TechStack>
          <Link id="vejamais" to="#">veja mais &rarr;</Link>
        </Column>
      </Container>
    </Base>
  )
}

import { animated } from "@react-spring/web";
import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  .section{
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

interface ChamadaProps {
  isMobile: boolean
}


export const Socials = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 3.2rem;
  & > a{
    cursor:pointer;
    color: inherit;
    transition: all ease 0.15s;
    :hover{
      transition: all ease 0.15s;
      color: #523a28;
    }
  }
`;

// export const Chamada = styled.div<ChamadaProps>`
export const Chamada = styled(animated.div)`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  .detail{
    color: #523a28;
    text-decoration: dashed;
    font-style: italic;
    font-weight: 600;
  }
  h2{
    font-size: 7.2rem;
  }
  p{
    font-size: 2.4rem;
  }
`;

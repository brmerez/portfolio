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
  /* flex-direction: column; */
  align-items: center;
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

export const Animation = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 50rem;
  height: 5rem;
  align-items: center;
  justify-content:center;
  overflow: hidden;
  /* border: 1px solid magenta; */
  gap: 1rem;
  .animate{
    /* animation: scroll 1s infinite linear forwards; */
    font-size: 4rem;
    width: 5rem;
    border: 1px dashed #222;
    height: 100vh;
    /* min-width:2.5rem;
    min-height:2.5rem; */
    /* border-radius: 50%; */
    border: 2px solid #222;
  }

  @keyframes scroll{
    0%{
      transform: translateY(200%);
    }
    100%{
      transform: translateY(-200%);
    }
  }

  @keyframes dots {
    0%{
      transform: translateY(0%);
    }
    25%{
      transform: translateY(166%);
    }
    50%{
      transform: translateY(0%);
    }
    75%{
      transform: translateY(-166%);
    }
    100%{
      transform: translateY(0%);
    }
  }
`;
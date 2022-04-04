import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 2rem 0;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 5% 1fr;

  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Legenda = styled.div`
  flex-grow: 1;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* align-items: center; */
  padding: 2rem 1rem;
  p{ 
    font-size: 1.6rem;
    line-height: 180%;
  }
  .detail{
    font-style: italic;
    font-weight: bold;
    /* background-color: #271c13; */
    background-color: yellow;
    /* color: #fff; */
    padding: 0 0.5rem;
    transition: all ease 0.25s;
    &:hover{
      transition: all ease 0.25s;
      background-color: #271c13;
      color: #fff;
    }
  }

  #vejamais{
    font-size: 2rem;
    font-style: italic;
    margin-top: auto;
    margin-left: auto;
    padding: 2rem 0;
  }
`;


export const Tech = styled.div`
  transition: all ease 0.25s;
  &:hover{
    transition: transform ease 0.25s;
    color: #fff;
    transform: scale(1.3);
    background-color: #271c13;
  }
  cursor: pointer;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.3rem;
  padding: 1rem;
  border: 1px solid #271c13;
  border-radius: 3px;
  p{ font-size: 2rem}
  flex-shrink: 1;

`;

export const TechStack = styled.div`
  /* display: inline-flex;
  flex-wrap: wrap; */
  width: fit-content;
  display: grid;
  margin: 0 auto;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
`;
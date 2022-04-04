import styled from  "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
  gap: 2rem;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Project = styled.div`
  width: 100%;
  padding: 2rem;
  border: 1px solid #271c13;
  color: #271c13;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  transition: all ease 0.25s;
  h4{
    font-size: 2.4rem;
  }
  &:hover{
    background-color: #271c13;
    color: #fff;
    transition: all ease 0.25s;
    padding: 3rem 2rem;

  }
`;
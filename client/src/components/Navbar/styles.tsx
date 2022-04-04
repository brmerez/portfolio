import { animated } from  "@react-spring/web"
import styled from "styled-components";

export const NavStyles = styled(animated.div)`
  top: 0;
  left: 0;
  width: 100vw;
  height: 7rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5%;
  font-size: 1.8rem;
  font-family: 'Roboto';
`;

export const NavItem = styled.a`
  cursor: pointer;
  padding: 1rem;
  transition: all ease 0.25s;
  &:hover{
    transition: all ease 0.25s;
    border-bottom: 1px solid #222;
  }
`;
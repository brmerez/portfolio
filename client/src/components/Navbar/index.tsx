import { useSpring } from "@react-spring/web";
import { NavItem, NavStyles } from "./styles"

export default function Navbar() {
  const animation = useSpring({
    from:{
      opacity: 0.1,
      y: -10
    },
    to:{
      opacity: 1,
      y: 0
    }
  });

  return (
    <NavStyles style={animation}>
      <NavItem>início</NavItem>
      <NavItem>sobre</NavItem>
      <NavItem>projetos</NavItem>
      <NavItem>contato</NavItem>
    </NavStyles>
  )
}

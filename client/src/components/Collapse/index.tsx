import { BsChevronDown, BsChevronUp } from  "react-icons/bs";
import styled from 'styled-components';
import { useState } from 'react'

interface CollapseProps {
  children: React.ReactNode[],
  text?: string,
}

const CollapseStyles = styled.div`
  width: 100%;
  padding: 2rem;
  border: 1px solid #222;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content:space-between;
  font-size: 2rem;
`;

export default function Collapse(props:CollapseProps) {
  const [ open, setOpen ] = useState(false);
  const { children, text } = props;
  return (
    <>
    <CollapseStyles onClick={() => setOpen(!open)}>
      {text}
      {open ? <BsChevronUp /> : <BsChevronDown/> }
    </CollapseStyles>
    {
      open &&
      children
    }
    </>
  )
}

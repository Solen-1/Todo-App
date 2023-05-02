import React from "react";
import { Container } from "./styles";

export default function Wrapper({children, ...restProps}){
  return (
    <Container {...restProps}>{children}</Container>
  )
}
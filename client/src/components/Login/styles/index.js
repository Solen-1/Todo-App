import styled from "styled-components/macro";

export const Container = styled.div`
  padding:3rem;
  background:rgba(0,0,0,0.3);
  margin-top:100px;
  ${(props)=>props.todo?'min-width:800px':'min-width:400px'}
`;

export const Header = styled.h1`
  font-size:30px;
  color:white;
  font-weight:bold;
`;

export const Input = styled.input`
  display:block;
  width:-webkit-fill-available;
  margin:1rem 0;
  padding:1rem;
  background-color:rgb(51, 51, 51) !important;
  border-radius:5px;
`;

export const Button = styled.button`
  display:block;
  width:-webkit-fill-available;
  margin:2rem 0;
  padding:1rem;
  text-align:center;
  ${(props)=>props.active?'background-color:rgb(229, 9, 20);':'background-color:rgba(229, 9, 20, 0.6);'}
  ${(props)=>props.active?'cursor:pointer;':'cursor:not-allowed;'}
  border-radius:5px;
  font-weight:bold;
  color:white;
  font-size:1.2rem;
`;

export const Text = styled.p`
    color:white;
`;

export const Link = styled.button`
    color:gray;
    &:hover {
      text-decoration:underline;
      color:white
    }
`;

export const SubText = styled.p``;
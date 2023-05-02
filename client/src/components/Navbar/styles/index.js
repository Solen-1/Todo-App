import styled from "styled-components/macro";

export const Container = styled.div`
  top:0;
  width:100%;
  position:fixed;
  padding:1rem;
  display:flex;
  flex-direction:row;
  align-items:center;
  background:rgba(10,10,10,.5);
  justify-content:space-between;
`;

export const Header = styled.h1`
  color:white;
  margin:0 1rem;
`;

export const Buttons = styled.button`
  width:60%;
  transition:0.5s ease;
  text-align:center;
  &:hover {
    background:gray;
  }
`;

export const PartX = styled.div`
  height:1px;
  width:60%;
  background:gray;
  margin:0.5rem 0;
`;

export const Wrapper = styled.div`
  position:absolute;
  top:70px;
  right:20px;
  display:flex;
  flex-direction:column;
  min-width:150px;
  background:black;
  color:white;
  padding:1rem;
  justify-content:center;
  align-items:center;
`;

export const Icon = styled.div`
  // border:1px solid white;
  display:flex;
  border-radius:50%;
  padding:0.5rem;
  // margin-left:auto;
  color:white;
  &:hover {
    color:black;
    background:gray;
  }
`;
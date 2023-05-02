import styled from "styled-components/macro";

export const TodosContainer = styled.div`
  display:flex;
  flex-direction:column;
  min-height:350px;
`;

export const TodoContainer = styled.div`
  background-color:${({status})=>status?'green;':'rgba(240,240,240);'}
  margin:1rem 0;
  display:flex;
  flex-direction:column;
  border-radius:5px;
  flex:1;
`;

export const AddTodoContainer = styled.div`
  background-color:rgba(20,20,20);
  margin:1rem 0;
  display:flex;
  flex-direction:column;
  border-radius:5px;
`;

export const TodoTitle = styled.h2`
  margin:0.5rem 1rem;
  font-weight:bold;
  font-size:1rem;
`;

export const TodoDescription = styled.p`
  margin:0 1rem;
  // color:darkslategray;
`;

export const TodoControls = styled.button`
  padding:0.5rem 1rem;
  background:rgba(10,10,10,1);
  color:white;
  width:100%;
  border-right:1px solid rgb(128, 128, 128);
  text-align:center;

  &:hover {
    background:rgba(10,10,10,0.5);
  }

  &:last-child {
    border-right:none;
  }
`;

export const AddTodoTitle = styled.input`
  background:black;
  padding:0.5rem;
  border-radius:5px;
  margin:0.5rem 1rem;
  color:white;
`;

export const AddTodoDescription = styled.textarea`
  background:black;
  padding:0.5rem;
  border-radius:5px;
  min-height:50px;
  margin:0 1rem;
  color:white;
`;

export const AddTodo = styled.button`
  ${(props)=>props.plus?"font-size:30px;padding:0.5rem;border-radius:50%;background:lightgray;color:darkslategray;width:30px;height:30px;":''}
  align-self:center:
  justify-self:center;
`;

export const ButtonContainer = styled.div`
  display:flex;
  width:100%;
  justify-content:space-around;
  margin-top:1rem;
`;


export const TodoWrapper = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
`;

export const CheckBox = styled.input`
  font-size:30px;
`;

export const AddButton = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0.5rem 2rem;
  align-self:center;
  border-radius:5px;
  background:black;
  gap:1rem;
  margin-top:2rem;
  margin-bottom:1rem;
  min-width:150px;
  &:hover {
    background:rgba(0,0,0,0.7);
    cursor:pointer;
  }
`;

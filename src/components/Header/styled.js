import styled from 'styled-components';

export const Wrapper = styled.header`
  display:flex;
  width: 100%;
  justify-content: space-between;
  margin: 16px;
  input{
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 0 16px;
    font-weight: bold;
    transition: .3s ease-in-out;
    &:focus{
      border-color: black;
    }
  }
  button{
    background-color: #ccc;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    transition: .3s ease-in-out;
    font-weight: bold;
    &:hover{
      opacity: 0.7;
    }
  }
`;
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperImg = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  justify-content: space-between;
  height: 200px;
  h1{
    font-size: 32px;
    font-weight: bold;
  }
  h4{
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  h3{
    margin-right: 8px;
    font-size: 18px;
    font-weight: bold;
  }
  a{
    color: blue;
    font-size: 18px;
  }
`;

export const WrapperFollows = styled.div`
  display: flex;
  div{
    margin-right: 16px;
    text-align: center;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Container = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LoginButton = styled.button`
  all: unset;
  font-size: 18px;
  border: 1px solid #b4b4b4;
  border-radius: 15px;
  padding: 5px 20px;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #b4b4b4;
  }
`;

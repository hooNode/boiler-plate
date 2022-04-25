import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const EmailText = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
export const EmailInput = styled.input``;
export const PasswordTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
export const PasswordInput = styled.input``;
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

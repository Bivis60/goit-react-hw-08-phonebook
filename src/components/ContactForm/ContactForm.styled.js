import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  padding-top: 8px;
  color: #000000;
  padding-bottom: 8px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: lightpink;
  }
`;

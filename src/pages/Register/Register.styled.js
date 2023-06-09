import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 16px;
`;

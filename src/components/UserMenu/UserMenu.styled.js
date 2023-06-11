import styled from 'styled-components';

export const P = styled.p`
  color: #000000;
  font-size: 20px;
`;

export const Button = styled.button`
  border-radius: 6px;
  font-size: 20px;
  padding: 3px 8px;

  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: orange;
  }
`;

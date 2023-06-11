import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  gap: 32px;
`;

export const ListText = styled(NavLink)`
  font-size: 20px;
  color: #000000;
  text-decoration: none;

  transition: color 0.2s ease-in-out;

  &.active,
  &:hover,
  &:focus {
    color: orange;
  }
`;

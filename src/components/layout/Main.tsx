import React, { FC } from 'react';
import styled from 'styled-components';

const Main: FC = ({ children }) => <MainStyled>{children}</MainStyled>;

export const MainStyled: FC = styled.main`
  padding: 30px 0;
  background-color: #fff;
  > :last-child {
    margin-bottom: 0;
  }
`;

export default Main;

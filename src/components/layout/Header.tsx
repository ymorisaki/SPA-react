import React, { FC } from 'react';
import styled from 'styled-components';
import { Link, Switch, Route } from 'react-router-dom';

const Header: FC = () => {
  return (
    <HeaderStyled>
      <div className="header__inner">
        <Switch>
          <Route exact path="/">
            <h1 className="header__title">
              <Link to="/">Single Page App</Link>
            </h1>
          </Route>

          <Route path="/">
            <div className="header__title">
              <Link to="/">Single Page App</Link>
            </div>
          </Route>
        </Switch>
      </div>
    </HeaderStyled>
  );
};

export const HeaderStyled: FC = styled.header`
  width: 100%;
  padding: 30px 15px;
  background-color: #191919;

  .header__inner {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: auto;
  }

  .header__title {
    font-size: 30px;
    font-weight: normal;

    > a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

export default Header;

import React, { FC } from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';

const Nav: FC = () => {
  return (
    <Switch>
      <Route path="/">
        <NavStyled>
          <ul className="header-nav">
            <li>
              <NavLink to="/page/Page01">Page 1</NavLink>
            </li>

            <li>
              <NavLink to="/page/Page02">Page 2</NavLink>
            </li>

            <li>
              <NavLink to="/page/Page03">Page 3</NavLink>
            </li>
          </ul>
        </NavStyled>
      </Route>
    </Switch>
  );
};

export const NavStyled: FC = styled.nav`
  background-color: #fff;

  .header-nav {
    display: flex;
    max-width: 900px;
    margin: auto;
    padding: 15px;

    > li {
      list-style: none;

      & + li {
        margin-left: 15px;
      }

      > a {
        color: #000;
        text-decoration: none;

        &[aria-current='page'] {
          color: #9e4141;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Nav;

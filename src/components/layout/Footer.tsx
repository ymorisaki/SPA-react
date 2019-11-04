import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <FooterStyled>
      <div className="footer__inner">
        <Link to="/">Single Page App</Link>
      </div>
    </FooterStyled>
  );
};

export const FooterStyled: FC = styled.footer`
  background-color: #191919;

  .footer__inner {
    max-width: 900px;
    margin: auto;
    padding: 15px;

    > a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Footer;

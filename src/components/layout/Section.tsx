import React, { FC } from 'react';
import styled from 'styled-components';

const Section: FC = ({ children }) => {
  return (
    <SectionStyled>
      <div className="section__inner">{children}</div>
    </SectionStyled>
  );
};

export const SectionStyled: FC = styled.div`
  margin-bottom: 30px;
  background-color: #fff;

  .section__inner {
    position: relative;
    max-width: 900px;
    margin: auto;
    padding: 0 15px;

    > :last-child {
      margin-bottom: 0;
    }
  }
`;

export default Section;

import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 10px 30px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <Heading>Hello Kamil</Heading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Occaecat irure proident est reprehenderit eu culpa adipisicing velit amet. Ullamco labore id
        mollit occaecat ad velit. Irure anim officia reprehenderit officia pariatur proident anim ea
        do laborum. Dolor in aliqua amet elit. Lorem adipisicing aliqua officia et ad tempor quis
        nisi ea qui. Nostrud aliqua laborum cupidatat laborum culpa reprehenderit amet eiusmod
        nostrud Lorem. Magna Lorem dolore duis occaecat adipisicing mollit magna dolore.
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;

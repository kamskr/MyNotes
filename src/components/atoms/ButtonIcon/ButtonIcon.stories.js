import React from 'react';
import styled from 'styled-components';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import ButtonIcon from './ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';

export default {
  title: 'ButtonIcon',
  decorators: [(storyFn) => <YellowBackground>{storyFn()}</YellowBackground>],
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.primary};
`;

export const buttonIconBulbActive = () => <ButtonIcon active icon={bulbIcon} />;
export const buttonIconLogout = () => <ButtonIcon icon={logoutIcon} />;
export const buttonIconPen = () => <ButtonIcon icon={penIcon} />;
export const buttonIconPlus = () => <ButtonIcon icon={plusIcon} />;
export const buttonIconTwitter = () => <ButtonIcon icon={twitterIcon} />;

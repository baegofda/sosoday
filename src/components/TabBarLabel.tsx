import styled from '@emotion/native';
import React from 'react';
import { ITabLabelProps } from '../types/Tab';
import { getTabBarColor } from '../utils/getTabBarColor';
import Font from './Font';

const TabBarLabel = ({ label, isCurrentRoute }: ITabLabelProps) => {
  return <Label isCurrentRoute={isCurrentRoute}>{label}</Label>;
};

export default TabBarLabel;

const Label = styled(Font)<{
  isCurrentRoute: ITabLabelProps['isCurrentRoute'];
}>`
  color: ${({ isCurrentRoute }) => getTabBarColor({ isCurrentRoute })};
  font-size: 12px;
  font-weight: 500;
`;

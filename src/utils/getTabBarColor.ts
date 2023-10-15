import { ITabIconProps } from '../types/Tab';

export const getTabBarColor = ({ isCurrentRoute }: ITabIconProps) =>
  isCurrentRoute ? '#FFB93B' : '#ffffffcc';

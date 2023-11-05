import { ITabIconProps } from '../types/Tab';

export const getTabBarColor = ({ isCurrentRoute }: ITabIconProps) =>
  isCurrentRoute ? '#AAA3EE' : '#ABABAB';

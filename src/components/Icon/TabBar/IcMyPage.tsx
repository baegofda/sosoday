import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { ITabIconProps } from '../../../types/Tab';
import { getTabBarColor } from '../../../utils/getTabBarColor';

const IcMyPage = ({ isCurrentRoute }: ITabIconProps) => {
  return (
    <Svg width="19" height="21" viewBox="0 0 19 21" fill="none">
      <Path
        d="M9.41669 10.5C6.64325 10.5 4.41669 8.27344 4.41669 5.5C4.41669 2.76562 6.64325 0.5 9.41669 0.5C12.1511 0.5 14.4167 2.76562 14.4167 5.5C14.4167 8.27344 12.1511 10.5 9.41669 10.5ZM12.8932 11.75C15.7839 11.75 18.1667 14.1328 18.1667 17.0234V18.625C18.1667 19.6797 17.3073 20.5 16.2917 20.5H2.54169C1.487 20.5 0.666687 19.6797 0.666687 18.625V17.0234C0.666687 14.1328 3.01044 11.75 5.90106 11.75H6.56512C7.4245 12.1797 8.40106 12.375 9.41669 12.375C10.4323 12.375 11.3698 12.1797 12.2292 11.75H12.8932Z"
        fill={getTabBarColor({ isCurrentRoute })}
      />
    </Svg>
  );
};

export default IcMyPage;

import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

const Font = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  const { style, ...rest } = props;

  return (
    <Text {...rest} style={[style, styles.defaultFont]}>
      {children}
    </Text>
  );
};

export default Font;

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'S-Core Dream',
  },
});

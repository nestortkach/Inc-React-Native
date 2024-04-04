import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { scaleFont, theme } from '../styles';
import { FONT_FAMILY } from '../styles/typography';
import { IText } from '../types/components';

interface Props extends IText {}

const CustomText: FC<Props> = props => {
  const {
    fontSize = 16,
    color = theme.colors.primaryText,
    fontWeight = '600'
  } = props;
  return (
    <Text
      style={[
        styles.text,
        {
          lineHeight: fontSize + 10,
          color: color,
          fontSize: scaleFont(fontSize),
          fontWeight: fontWeight
        }
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY
  }
});

export default CustomText;

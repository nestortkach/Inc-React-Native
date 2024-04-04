import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { IInput } from '../types/components';
import { theme } from '../styles';

interface Props extends IInput {}

const CustomInput: FC<Props> = props => {
  const { placeholder = '', onChangeText, value } = props;

  return (
    <TextInput
      onChangeText={onChangeText}
      placeholderTextColor={theme.colors.background}
      style={styles.container}
      placeholder={placeholder}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    borderRadius: 8,
    paddingLeft: 10,
    color: theme.colors.background,
    fontWeight: '700',
    fontSize: 16
  }
});

export default CustomInput;

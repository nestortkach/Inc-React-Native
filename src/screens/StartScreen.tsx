/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { CustomText } from '../components';
import theme from '../styles/theme';

interface Props {
  navigation: any;
}

const StartScreen: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }]
      });
    }, 2000);
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F0F0F'
      }}
    >
      <CustomText
        fontWeight="700"
        fontSize={30}
        color={theme.colors.primary}
      >
        Nice to meet you!
      </CustomText>
    </View>
  );
};
export default StartScreen;

import { StyleSheet, SafeAreaView, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { WINDOW_HEIGHT } from '../styles';
import { ScrollView } from 'react-native';

interface Props {
  children: ReactNode;
}

const Background: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: WINDOW_HEIGHT,
    alignItems: 'center',
    backgroundColor: '#0F0F0F'
  },
  container: {
    width: '100%',
    padding: 16
  }
});
export default Background;

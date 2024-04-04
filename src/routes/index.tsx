import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

//import all screen components
import { AppStackParamList } from '../types/navigation';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from '../store';
import SelectedCharacterScreen from '../screens/SelectedCharacterScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStackRoutes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="SelectedCharacterScreen"
            component={SelectedCharacterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

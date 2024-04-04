import AsyncStorage from '@react-native-async-storage/async-storage';
import { fakeAuthProvider } from '../constants';

const signIn = (email: string, callback: () => void) => {
  return fakeAuthProvider.signIn(async () => {
    try {
      await AsyncStorage.setItem('@email', JSON.stringify(email));
    } catch (e) {
      // saving error
    }
    callback();
  });
};
export default signIn;

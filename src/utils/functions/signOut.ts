import AsyncStorage from '@react-native-async-storage/async-storage';
import { fakeAuthProvider } from '../constants';

const signOut = (callback: () => void) => {
  return fakeAuthProvider.signOut(async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // saving error
    }
    callback();
  });
};
export default signOut;

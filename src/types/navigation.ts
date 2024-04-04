import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface AppStackParamList extends ParamListBase {
  StartScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  Dashboard: undefined;
  ResetPasswordScreen: undefined;
}

export type NavigationProps =
  NativeStackNavigationProp<AppStackParamList>;

import { ReactNode } from 'react';
export interface IButton {
  onPress: () => void;
  style?: any;
  title?: string;
  containerStyle?: any;
  titleColor?: string;
  titleSize?: number;
}
export interface IInput {
  placeholder?: string;
  onChangeText: (text: any) => void;
  value: string;
}

export interface IText {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export interface IPeople {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

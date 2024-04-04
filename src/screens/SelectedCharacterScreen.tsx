import React, { useEffect } from 'react';
import { Background, CustomText } from '../components';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  charactersSelector,
  fetchCharacters
} from '../store/reducers/characters';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectedCharacterScreen: React.FC<any> = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { selectedCharacter, loader } = useAppSelector(
    charactersSelector
  );
  const {
    name,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  } = selectedCharacter;
  const id = route.params.id;

  useEffect(() => {
    dispatch(fetchCharacters(id));
  }, [dispatch, id]);

  if (loader) {
    return (
      <Background>
        <CustomText>Loading...</CustomText>
      </Background>
    );
  }

  return (
    <Background>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomText color="red">Back</CustomText>
      </TouchableOpacity>
      <CustomText>Name: {name}</CustomText>
      <CustomText>Mass: {mass}</CustomText>
      <CustomText>Hair color: {hair_color}</CustomText>
      <CustomText>Skin color: {skin_color}</CustomText>
      <CustomText>Eye color: {eye_color}</CustomText>
      <CustomText>Birth year: {birth_year}</CustomText>
      <CustomText>Gender: {gender}</CustomText>
    </Background>
  );
};

export default SelectedCharacterScreen;

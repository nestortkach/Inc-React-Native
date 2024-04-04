import React, { FC } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { WINDOW_WIDTH, theme } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { IPeople } from '../types/components';
import CustomText from './CustomText';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  charactersSelector,
  setFav
} from '../store/reducers/characters';

interface Props {
  person: IPeople;
}

const CharacterItem: FC<Props> = ({ person }) => {
  const { favourite } = useAppSelector(charactersSelector);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { name, id } = person;

  const isFav =
    favourite.filter(fav => fav.name === name).length > 0;

  const slideHandler = () => {
    navigation.navigate('SelectedCharacterScreen', {
      id
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={slideHandler}
      >
        <CustomText>{name}</CustomText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(setFav(name))}>
        {isFav ? (
          <Image
            style={styles.favIcon}
            source={require('../assets/icons/heart.png')}
          />
        ) : (
          <Image
            style={styles.favIcon}
            source={require('../assets/icons/like.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  favIcon: {
    width: 20,
    height: 20
  }
});
export default CharacterItem;

// screens/CurrenciesScreen.tsx
import React, { FC, useEffect, useState } from 'react';
import { Background, CustomText } from '../components';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { WINDOW_HEIGHT, theme } from '../styles';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  charactersSelector,
  fetchCharacters,
  resetFav
} from '../store/reducers/characters';
import CharacterItem from '../components/CharacterItem';
import CustomInput from '../components/CustomInput';

interface Props {
  navigation: any;
}

const HomeScreen: FC<Props> = () => {
  const { loader, people, favourite, totalCharacters } =
    useAppSelector(charactersSelector);
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const amoutOfBtns = Math.ceil(totalCharacters / 10);
  useEffect(() => {
    dispatch(fetchCharacters(null));
  }, [dispatch]);

  const totalMale = favourite.filter(
    fav => fav.gender === 'male'
  ).length;
  const totalFemale = favourite.filter(
    fav => fav.gender === 'female'
  ).length;
  const totalOther = favourite.filter(
    fav => fav.gender !== 'male' && fav.gender !== 'female'
  ).length;

  const renderItem = ({ item }) => {
    return <CharacterItem person={item} />;
  };

  return (
    <Background>
      <CustomInput
        placeholder="Enter Name"
        onChangeText={text => {
          setText(text);
        }}
        value={text}
      />
      <View style={styles.statistic}>
        <CustomText>Male - {totalMale}</CustomText>
        <CustomText>Female - {totalFemale}</CustomText>
        <CustomText>Other - {totalOther}</CustomText>
        <TouchableOpacity
          onPress={() => dispatch(resetFav())}
          style={styles.btn}
        >
          <CustomText color={theme.colors.background}>
            Reset
          </CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.charactersContainer}>
        {people && (
          <FlatList
            style={{ height: WINDOW_HEIGHT - 250 }}
            data={people.filter(p =>
              p.name.toLowerCase().includes(text.toLowerCase())
            )}
            renderItem={renderItem}
          />
        )}
        {loader && <CustomText>Loading....</CustomText>}
      </View>
      <View style={styles.btnContainer}>
        {[...Array(amoutOfBtns).keys()].map(btn => {
          return (
            <TouchableOpacity
              onPress={() => setCurrentPage(btn)}
              key={btn}
            >
              <CustomText
                color={
                  currentPage === btn
                    ? 'red'
                    : theme.colors.primaryText
                }
              >
                {btn + 1}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  charactersContainer: {
    marginTop: 10
  },
  statistic: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
});
export default HomeScreen;

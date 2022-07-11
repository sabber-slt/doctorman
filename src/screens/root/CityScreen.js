import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import colors from '../../constants/colors';
import Txt from '../../components/Txt';
import { useQuery } from 'react-query';
import { fetchPublics } from '../../constants/useFetch';
import { useNavigation } from '@react-navigation/native';
import ImgCard from '../../components/ImgCard';
import ItemCard from '../../components/ItemCard';
import Load from '../../components/Load';

const CityScreen = ({ route }) => {
  const { id, title } = route.params;
  const navigation = useNavigation();

  const { data, error, isLoading } = useQuery('fetchPublics', fetchPublics);
  if (isLoading) return <Load />;
  const city = data.filter((item) => item.id === 2)[0];
  console.log(city.item1);
  return (
    <View style={tw`flex-1 bg-slate-100 flex-col items-center justify-center`}>
      <View style={tw`flex-0.3 bg-pink-200 w-full`}>
        <Image
          source={require('../../assets/doctor.jpg')}
          style={tw`w-full h-full`}
        />
      </View>
      <View style={tw`flex-0.7 items-center justify-center py-8`}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={city.item1}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemCard
              onPress={() =>
                navigation.navigate('Detail', {
                  title: title,
                  city: item.city,
                })
              }
              src={item.pic}
              txt={item.city}
              z={27}
              w={120}
              h={120}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CityScreen;

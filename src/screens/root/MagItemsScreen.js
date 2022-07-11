import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Card from '../../components/Card';
import colors from '../../constants/colors';
import Txt from '../../components/Txt';
import { useQuery } from 'react-query';
import { fetchMagazine } from '../../constants/useFetch';
import SimpleCard from '../../components/SimpleCard';
import { useNavigation } from '@react-navigation/native';
import ItemCard from '../../components/ItemCard';
import Load from '../../components/Load';

const MagItemsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { slug } = route.params;

  const { data, error, isLoading } = useQuery(['fetchMagazine', slug], () =>
    fetchMagazine(slug)
  );
  if (isLoading) return <Load />;
  console.log(data);
  return (
    <View style={tw`w-full h-full`}>
      <View style={tw`flex-0.3`}>
        <Image
          source={{ uri: data.doctors_magazine[0].pic1 }}
          style={tw`w-full h-full`}
        />
      </View>
      <View style={tw`flex-0.7 items-center justify-center`}>
        <FlatList
          data={data.doctors_magazine}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <ItemCard
              onPress={() => navigation.navigate('Mag', { item })}
              h={200}
              src={item.pic1}
              txt={item.title}
              w={150}
              z={16}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MagItemsScreen;

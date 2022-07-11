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

const MagScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={tw`w-full h-full`}>
      <View style={tw`flex-0.3 bg-slate-800 items-center justify-center`}>
        <Image
          source={{ uri: item.pic1 }}
          style={tw`w-full h-full opacity-75 absolute`}
        />
        <Txt c={colors.slate100} z={22} txtAl="center" txt={item.title} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={tw`flex-0.8 bg-slate-100`}
      >
        <View style={tw`items-end p-3`}>
          <Txt c={colors.purple800} z={16} txtAl="right" txt={item.content} />
        </View>
        <View style={tw`items-center`}>
          <Image source={{ uri: item.pic2 }} style={tw`w-80 h-80`} />
        </View>
        <View style={tw`items-end p-3`}>
          <Txt c={colors.purple800} z={16} txtAl="right" txt={item.content2} />
        </View>
      </ScrollView>
    </View>
  );
};

export default MagScreen;

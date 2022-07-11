import { View, Image, ScrollView } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import Txt from '../../components/Txt';
import tw from 'twrnc';
import { useQuery } from 'react-query';
import { fetchMagazine } from '../../constants/useFetch';

const FeautureScreen = () => {
  const { data, isLoading } = useQuery(['fetchMagazine', 'feauture'], () =>
    fetchMagazine('feauture')
  );
  if (isLoading)
    return <Txt c={colors.slate100} z={20} txtAl="center" txt="درباره " />;
  console.log(data.doctors_magazine[0].title);
  return (
    <ScrollView style={tw`bg-slate-100`}>
      <View style={tw`h-[250px] bg-green-800`}>
        <Image
          source={{ uri: data.doctors_magazine[0].pic1 }}
          style={tw`w-full h-full`}
        />
      </View>
      <View style={tw`h-full items-center justify-around`}>
        <Image
          source={{ uri: data.doctors_magazine[0].pic2 }}
          style={tw`w-80 h-40 `}
        />
        <View style={tw`px-3`}>
          <Txt
            c={colors.purple800}
            z={20}
            txtAl="center"
            txt={data.doctors_magazine[0].content}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FeautureScreen;

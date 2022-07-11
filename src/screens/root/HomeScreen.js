import { View, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import colors from '../../constants/colors';
import Txt from '../../components/Txt';
import { useQuery } from 'react-query';
import { fetchPublics } from '../../constants/useFetch';
import SimpleCard from '../../components/SimpleCard';
import { useNavigation } from '@react-navigation/native';
import ImgCard from '../../components/ImgCard';
import ItemCard from '../../components/ItemCard';
import Load from '../../components/Load';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { data, error, isLoading } = useQuery('fetchPublics', fetchPublics);
  if (isLoading) return <Load />;
  const topDoctors = data.filter((item) => item.id === 1)[0];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw` bg-green-800`}>
      <View style={tw`h-[250px] flex flex-col items-center justify-center`}>
        <View style={tw`mt-7`}>
          <Txt
            c={colors.slate100}
            z={15}
            txtAl="center"
            txt="بهترین پزشکان دکترمن"
          />
        </View>
        <ScrollView
          horizontal
          style={tw`flex-row  pt-2 w-full shadow-lg shadow-green-700`}
        >
          {topDoctors.item1.map((item) => (
            <View key={item.id}>
              <ImgCard
                onPress={() =>
                  navigation.navigate('DocProfile', {
                    add: item.add,
                    avatar: item.avatar,
                    full_name: item.full_name,
                    office_name: item.office_name,
                    phone: item.phone,
                    lat: item.lat,
                    lon: item.lon,
                  })
                }
                h={150}
                w={110}
                src={item.avatar}
                txt2={item.specialities}
                txt={item.full_name}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={tw`bg-slate-100`}>
        <View style={tw`w-full flex-col items-center py-8`}>
          <View
            style={[
              tw`flex-row w-full items-center justify-center`,
              { flexWrap: 'wrap' },
            ]}
          >
            {topDoctors.item2.map((item) => (
              <View key={item.id}>
                <SimpleCard
                  onPress={() =>
                    navigation.navigate('MagItems', {
                      slug: item.slug,
                    })
                  }
                  src={item.pic}
                  txt={item.title}
                  w={110}
                  h={140}
                />
              </View>
            ))}
          </View>
          <View style={tw`py-5`}>
            <Txt
              c={colors.g700}
              z={17}
              txtAl="center"
              txt="پزشکان متخصص را در دکترمن بیابید"
            />
          </View>
          <View
            style={[
              tw`flex-row w-full items-center justify-center `,
              { flexWrap: 'wrap' },
            ]}
          >
            {topDoctors.item3.map((item) => (
              <View key={item.id}>
                <ItemCard
                  onPress={() =>
                    navigation.navigate('City', {
                      id: item.id,
                      title: item.title,
                    })
                  }
                  src={item.pic}
                  txt={item.title}
                  z={15}
                  w={80}
                  h={80}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Card from '../../components/Card';
import colors from '../../constants/colors';
import Txt from '../../components/Txt';
import { useQuery } from 'react-query';
import { fetchDoctors } from '../../constants/useFetch';
import { useNavigation } from '@react-navigation/native';
import DoctorCard from '../../components/DoctorCard';
import Load from '../../components/Load';

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, city } = route.params;
  const { data, error, isLoading } = useQuery(
    ['fetchDoctors', city, title],
    () => fetchDoctors(city, title)
  );
  if (isLoading) return <Load />;
  console.log(data);

  return (
    <View style={tw`flex-1 flex-col items-center justify-center`}>
      <View
        style={tw`bg-slate-100 h-full w-full items-center justify-center mt-5`}
      >
        <FlatList
          data={data.doctors_doctors}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <DoctorCard
              onPress={() =>
                navigation.navigate('DocProfile', {
                  add: item.info.add,
                  id: item.id,
                  avatar: item.info.avatar,
                  full_name: item.info.full_name,
                  office_name: item.info.office_name,
                  phone: item.info.phone,
                  lat: item.info.lat,
                  lon: item.info.lon,
                })
              }
              src={item.info.avatar}
              txt={item.info.full_name}
              specialities={item.info.specialities}
            />
          )}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

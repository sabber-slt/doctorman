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
import { fetchComments } from '../../constants/useFetch';
import SimpleCard from '../../components/SimpleCard';
import { useNavigation } from '@react-navigation/native';
import Load from '../../components/Load';

const height = Dimensions.get('window').height;

const DocProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { add, avatar, full_name, office_name, phone, lat, lon } = route.params;

  const { data, error, isLoading } = useQuery(
    ['fetchComments', `${route.params.id}`],
    () => fetchComments(`${route.params.id}`)
  );
  if (isLoading) return <Load />;
  return (
    <View style={tw`h-full`}>
      <View
        style={tw`h-48 w-full bg-green-800 flex-col items-center justify-center`}
      >
        <Image source={{ uri: avatar }} style={tw`w-40 h-40 rounded-lg`} />
      </View>
      <ScrollView style={tw`h-full w-full h-full bg-slate-100 p-3`}>
        <Txt c={colors.purple800} z={20} txtAl="center" txt={full_name} />
        <View style={tw`w-full pt-5`}>
          <Txt
            c={colors.purple800}
            z={20}
            txtAl="right"
            txt={` شماره تماس : ${phone}`}
          />
          <View style={tw`w-full flex-col items-center pt-5`}>
            <Txt c={colors.purple800} z={20} txtAl="center" txt={add} />
          </View>
          <View style={tw`w-full flex-col items-center`}>
            <Txt
              c={colors.purple800}
              z={20}
              txtAl="center"
              txt={` محدوده ${office_name}`}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Comment', {
              id: route.params.id,
            })
          }
          style={tw`px-5 py-2 mt-12 shadow-lg shadow-green-800 flex-col items-center justify-center z-50 overflow-hidden bg-green-800`}
        >
          <Txt c={colors.slate100} z={20} txt="ثبت نظر" txtAl="center" />
        </TouchableOpacity>
        <View style={tw`m-3`}>
          <Txt
            c={colors.purple800}
            z={20}
            txtAl="right"
            txt={`نظرات شما درباره  ${full_name}:`}
          />
          {data.doctors_comments.length !== 0 ? (
            <FlatList
              data={data.doctors_comments}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => (
                <View
                  style={tw`h-56 w-32 m-3 flex-col items-center justify-around bg-slate-200`}
                >
                  <Txt
                    c={colors.purple800}
                    z={15}
                    txtAl="center"
                    txt={item.user}
                  />
                  <View style={tw`px-2`}>
                    <Txt
                      c={colors.purple800}
                      z={15}
                      txtAl="center"
                      txt={item.comment}
                    />
                  </View>
                </View>
              )}
            />
          ) : (
            <View style={tw`mt-7`}>
              <Txt
                c={colors.purple800}
                z={18}
                txtAl="center"
                txt=" هنوز نظری ثبت نشده، اولین نفزی باشید که نظر خود را ثبت می کنید "
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default DocProfileScreen;

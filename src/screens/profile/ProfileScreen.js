import {
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import Txt from '../../components/Txt';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import SimpleCard from '../../components/SimpleCard';
import Card from '../../components/Card';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-slate-100`}>
      <View style={tw`flex-0.3 items-center justify-center bg-green-800`}>
        <Image
          source={require('../../assets/oo.jpg')}
          style={tw`w-full h-full opacity-75 absolute`}
        />
        <Txt
          c={colors.slate100}
          z={20}
          txtAl="center"
          txt="قدرت و توان بیش از آنکه مربوط به سن و سال باشد، به تندرستی و سلامت وابسته است.

"
        />
      </View>
      <View style={tw`flex-0.7 items-center justify-center`}>
        <View style={tw`flex-row items-center justify-center`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={tw`w-32 h-32 flex-col items-center justify-center m-5 rounded-lg bg-rose-400 `}
          >
            <FontAwesome name="users" size={28} color={colors.slate100} />
            <Txt
              c={colors.slate100}
              z={20}
              txtAl="center"
              txt="درباره دکترمن "
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('DoctorRegister')}
            style={tw`w-32 h-32 flex-col items-center justify-center rounded-lg bg-purple-400 `}
          >
            <FontAwesome name="wpforms" size={35} color={colors.slate100} />
            <Txt
              c={colors.slate100}
              z={20}
              txtAl="center"
              txt="ثبت نام پزشکان"
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center justify-center`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Feauture')}
            style={tw`w-32 h-32 flex-col items-center justify-center m-5 rounded-lg bg-purple-400 `}
          >
            <FontAwesome name="bell" size={28} color={colors.slate100} />
            <Txt
              c={colors.slate100}
              z={20}
              txtAl="center"
              txt="برنامه آینده "
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Soon')}
            style={tw`w-32 h-32 flex-col items-center justify-center rounded-lg bg-rose-400 `}
          >
            <FontAwesome name="contao" size={35} color={colors.slate100} />
            <Txt
              c={colors.slate100}
              z={20}
              txtAl="center"
              txt=" ارتباط با پزشک"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

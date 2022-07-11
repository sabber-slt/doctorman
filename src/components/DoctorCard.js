import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import Txt from './Txt';
import tw from 'twrnc';

const DoctorCard = ({ src, txt, specialities, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw` w-36 h-56 flex-col items-center justify-center m-5 rounded-lg overflow-hidden`}
    >
      <View
        style={tw`w-36 h-32 bg-green-700 flex-col rounded-t-lg items-center justify-center`}
      >
        <Image source={{ uri: src }} style={tw`w-20 h-20 rounded-full`} />
        <View style={tw`pt-3`}>
          <Txt c={colors.slate100} z={14} txtAl="center" txt={txt} />
        </View>
      </View>
      <View
        style={tw`w-36 h-16 bg-slate-200 flex-col items-center justify-around`}
      >
        <View style={tw`px-2`}>
          <Txt c={colors.purple800} z={12} txtAl="center" txt={specialities} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

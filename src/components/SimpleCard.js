import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Txt from './Txt';
import colors from '../constants/colors';

const SimpleCard = ({ w, h, src, txt, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { width: w, height: h },
        tw`rounded-lg flex-col items-center justify-center bg-slate-100 shadow-xl m-2 shadow-green-500 rounded-lg overflow-hidden`,
      ]}
    >
      <Image
        source={{ uri: src }}
        style={tw`w-12 h-12 opacity-80`}
        resizeMode="center"
      />
      <View style={tw`px-2`}>
        <Txt c={colors.blue800} z={18} txtAl="center" txt={txt} />
      </View>
    </TouchableOpacity>
  );
};

export default SimpleCard;

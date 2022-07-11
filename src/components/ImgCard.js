import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Txt from './Txt';
import colors from '../constants/colors';

const ImgCard = ({ w, h, src, txt, onPress, txt2 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { width: w, height: h },
        tw`rounded-lg flex-col items-center justify-center bg-slate-200 shadow-xl m-2 shadow-green-500 rounded-lg overflow-hidden`,
      ]}
    >
      <View style={tw`h-20 shadow-lg shadow-green-700`}>
        <Image
          source={{ uri: src }}
          style={tw`opacity-80 rounded-full w-16 h-16 py-3`}
          resizeMode="center"
        />
      </View>
      <View style={tw`px-2 h-16 items-center justify-around w-full `}>
        <Txt
          z={txt.length > 17 ? 10 : 14}
          c={colors.purple800}
          txt={txt}
          txtAl="center"
        />
        <Txt z={12} c={colors.purple800} txt={txt2} txtAl="center" />
      </View>
    </TouchableOpacity>
  );
};

export default ImgCard;

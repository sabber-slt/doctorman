import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Txt from './Txt';
import colors from '../constants/colors';

const ItemCard = ({ w, h, src, txt, onPress, z }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { width: w, height: h },
        tw`rounded-lg flex-col items-center justify-center bg-slate-800 shadow-xl m-2 shadow-green-500 rounded-lg overflow-hidden`,
      ]}
    >
      <Image
        source={{ uri: src }}
        style={[{ width: w, height: h }, tw`absolute opacity-80 `]}
        resizeMode="cover"
      />
      <View
        style={tw`px-2 h-full items-center justify-center bg-slate-700 bg-opacity-50 w-full py-4`}
      >
        <Txt z={z} c={colors.slate100} txt={txt} txtAl="center" />
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

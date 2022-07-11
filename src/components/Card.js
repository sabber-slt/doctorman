import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Card = ({ w, h, src }) => {
  return (
    <TouchableOpacity
      style={[
        { width: w, height: h },
        tw`rounded-lg flex-col items-center justify-center bg-slate-800 shadow-xl m-2 shadow-blue-400 rounded-lg overflow-hidden`,
      ]}
    >
      <Image
        source={{ uri: src }}
        style={[{ width: w, height: h }, tw`absolute`]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default Card;

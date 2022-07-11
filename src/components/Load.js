import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Image as MotiImage } from 'moti';
import Txt from './Txt';
import colors from '../constants/colors';

const Load = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <MotiImage
        style={{
          width: 85,
          height: 85,
        }}
        from={{
          rotate: '0deg',
        }}
        animate={{
          rotate: '360deg',
        }}
        transition={{
          loop: true,
          repeatReverse: false,
          type: 'timing',
          duration: 3000,
        }}
        source={{
          uri: 'https://cdn2.iconfinder.com/data/icons/colored-controls/96/refresh_reload_update-256.png',
        }}
      />
      <View style={tw`mt-5`}>
        <Txt z={22} c={colors.g700} txt="دکتر من" txtAl="center" />
      </View>
    </View>
  );
};

export default Load;

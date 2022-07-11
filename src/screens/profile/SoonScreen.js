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

const SoonScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-slate-100 items-center justify-center`}>
      <View style={tw`px-3`}>
        <Txt
          c={colors.purple800}
          z={20}
          txtAl="center"
          txt="به زودی این بخش در کنار سایر بخش های تخصص دیگر به اپلیکیشن اضافه خواهد شد "
        />
        <Txt
          c={colors.purple800}
          z={20}
          txtAl="center"
          txt="ممنون بابت حمایت شما"
        />
      </View>
    </View>
  );
};

export default SoonScreen;

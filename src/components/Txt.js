import { Text } from 'react-native';
import React from 'react';

const Txt = ({ txt, z, c, txtAl }) => {
  return (
    <Text
      style={{
        fontSize: z,
        color: c,
        textAlign: txtAl,
        fontFamily: 'Lalezar',
      }}
    >
      {txt}{' '}
    </Text>
  );
};

export default Txt;

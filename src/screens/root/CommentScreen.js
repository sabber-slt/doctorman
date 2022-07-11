import {
  View,
  Text,
  TextInput,
  Platform,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Txt from '../../components/Txt';
import { useForm, Controller } from 'react-hook-form';
import colors from '../../constants/colors';
import { useState } from 'react';

const CommentScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  console.log(id);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: '',
      comment: '',
    },
  });
  const [comments, setComments] = useState('');
  const onSubmit = async (data) => {
    const { user, comment } = data;
    const res = await fetch('https://kartoon.hasura.app/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'public',
      },
      body: JSON.stringify({
        query: `
                mutation MyMutation($comment:String, $doctorId:String,$user:String) {
                    insert_doctors_comments(objects: {comment: $comment, doctorId: $doctorId, user: $user}) {
                      returning {
                        comment
                        doctorId
                        user
                      }
                      affected_rows
                    }
                  }`,
        variables: {
          comment: comment,
          doctorId: `${id}`,
          user: user,
        },
      }),
    }).then((res) => res.json());
    console.log(res);
    if (res.data) {
      reset();
      setComments('نظر شما با موفقیت ثبت شد');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1 bg-slate-100`}
    >
      <View
        style={tw`h-[200px] bg-slate-700 flex-col items-center justify-center`}
      >
        <Image
          source={require('../../assets/comment.jpg')}
          style={tw`w-full h-full absolute z-0`}
        />
        <View style={tw`px-5 py-3 bg-slate-700 bg-opacity-50`}>
          <Txt c={colors.slate100} z={20} txtAl="center" txt={comments} />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[{ direction: 'rtl' }, tw`flex-1 items-center justify-center`]}
        >
          <Txt
            c={colors.purple800}
            z={18}
            txt="نام و نام خانوادگی"
            txtAl="center"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  { direction: 'rtl' },
                  tw`w-40 h-10 rounded-lg shadow-lg shadow-green-800  bg-slate-200 `,
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textAlign="right"
              />
            )}
            name="user"
          />
          {errors.user && (
            <Txt
              c={colors.purple800}
              txtAl="center"
              z={14}
              txt="لطفا نام خود را وارد کنید"
            />
          )}
          <View style={tw`mt-5`}>
            <Txt c={colors.purple800} z={18} txt="نظر" txtAl="center" />
          </View>

          <Controller
            control={control}
            rules={{
              maxLength: 500,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={tw`w-48 h-40 p-2 rounded-lg shadow-lg shadow-green-800 bg-slate-200 `}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textAlign="right"
                textAlignVertical="top"
                multiline={true}
                maxLength={80}
              />
            )}
            name="comment"
          />
          {errors.comment && (
            <Txt
              c={colors.purple800}
              txtAl="center"
              z={14}
              txt="لطفا نظر خود را وارد کنید"
            />
          )}

          <View style={tw`mt-8 `}>
            <TouchableOpacity
              style={tw`px-3 py-2 bg-green-800 rounded-md`}
              onPress={handleSubmit(onSubmit)}
            >
              <Txt c={colors.slate100} txt="ثبت نظر" txtAl="center" z={16} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CommentScreen;

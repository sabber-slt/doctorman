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

const DoctorRegisterScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      lname: '',
      phone: '',
      office_phone: '',
    },
  });
  const [comments, setComments] = useState('');
  const onSubmit = async (data) => {
    const { name, lname, phone, office_phone } = data;
    console.log(name, lname, phone, office_phone);
    const res = await fetch('https://kartoon.hasura.app/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'public',
      },
      body: JSON.stringify({
        query: `
        mutation MyMutation($lname:String,$name:String,$office_phone:String,$phone:String){
            insert_doctors_newDoctor(objects: {lname: $lname, name: $name, office_phone:$office_phone, phone: $phone}) {
              affected_rows
              returning {
                lname
                name
              }
            }
          }`,
        variables: {
          lname: lname,
          name: name,
          office_phone: office_phone,
          phone: phone,
        },
      }),
    }).then((res) => res.json());
    console.log(res);
    if (res.data) {
      reset();
      setComments('ثبت نام شما با موفقیت انجام شد');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1 bg-slate-100`}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[{ direction: 'rtl' }, tw`flex-1 items-center justify-center`]}
        >
          <View style={tw`p-7`}>
            <Txt c={colors.purple800} z={18} txt={comments} b txtAl="center" />
          </View>
          <View style={tw`p-7`}>
            <Txt
              c={colors.purple800}
              z={18}
              txt="پزشک گرامی حداکثر چها و هشت ساعت بعد از ثبت درخواست شما، نتیجه و پنل مدیریت از طریق پیامک به شما اطلاع رسانی خواهد شد"
              b
              txtAl="center"
            />
          </View>
          <Txt c={colors.purple800} z={18} txt="نام " txtAl="center" />
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
            name="name"
          />
          {errors.name && (
            <Txt
              c={colors.purple800}
              txtAl="center"
              z={14}
              txt="لطفا نام خود را وارد کنید"
            />
          )}
          <View style={tw`mt-4`}>
            <Txt
              c={colors.purple800}
              z={18}
              txt="نام خانوادگی "
              b
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
              name="lname"
            />
            {errors.name && (
              <Txt
                c={colors.purple800}
                txtAl="center"
                z={14}
                txt="لطفا نام خانوادگی خود را وارد کنید"
              />
            )}
          </View>
          <View style={tw`mt-4`}>
            <Txt c={colors.purple800} z={18} txt="شماره همراه" txtAl="center" />
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
              name="phone"
            />
            {errors.name && (
              <Txt
                c={colors.purple800}
                txtAl="center"
                z={14}
                txt="لطفا شماره همراه خود را وارد کنید"
              />
            )}
          </View>
          <View style={tw`mt-4`}>
            <Txt c={colors.purple800} z={18} txt="شماره مطب" txtAl="center" />
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
              name="office_phone"
            />
            {errors.name && (
              <Txt
                c={colors.purple800}
                txtAl="center"
                z={14}
                txt="لطفا شماره مطب خود را وارد کنید"
              />
            )}
          </View>

          <View style={tw`mt-8 `}>
            <TouchableOpacity
              style={tw`px-3 py-2 bg-green-800 rounded-md`}
              onPress={handleSubmit(onSubmit)}
            >
              <Txt c={colors.slate100} txt="ثبت " txtAl="center" z={16} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default DoctorRegisterScreen;

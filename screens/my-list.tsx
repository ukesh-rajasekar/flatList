import {
   View,
   Text,
   KeyboardAvoidingView,
   Platform,
   TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParams } from '../types/navigation-stacks';

const MyList = () => {
   const message = `Let's plan your shopping!`;
   const instruction = `Tap the plus button to create your first list`;

   const navigation = useNavigation<NavigationProp<HomeStackParams>>();

   const onAdd = () => {
      //navigate to creation page
      navigation.navigate('NewList');
   };

   return (
      <View style={tw`flex-1 bg-slate-800`}>
         <View style={tw`flex items-center justify-center h-full pb-30`}>
            <Text style={tw`pb-5 text-2xl font-medium text-slate-400`}>
               {message}
            </Text>
            <Text style={tw`pb-4 text-md font-medium text-slate-400`}>
               {instruction}
            </Text>
         </View>
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={tw`absolute bottom-20 left-20 w-full flex-row justify-around items-center`}
         >
            <TouchableOpacity
               onPress={onAdd}
               style={{
                  elevation: 10,
                  ...tw`px-4 py-2 bg-white rounded-md justify-center items-center border-white border-2`,
               }}
            >
               <Text style={tw`text-xl`}>+ New List</Text>
            </TouchableOpacity>
         </KeyboardAvoidingView>
      </View>
   );
};

export default MyList;

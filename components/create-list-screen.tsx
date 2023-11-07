import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'twrnc';
import { HomeStackParams } from '../types/navigation-stacks';
import { createTodo } from '../utils/http-functions';

const CreateListScreen = () => {
   const [name, setname] = useState<string>('');
   const [loading, setloading] = useState<boolean>(false);
   const navigation = useNavigation<NavigationProp<HomeStackParams>>();

   const onCreate = async () => {
      if (name === '') return null;
      Keyboard.dismiss();
      setloading(true);
      let result;
      try {
         result = await createTodo(name);
         console.log(result, 'result here');
         if (!result.name) {
            Alert.alert('Something went wrong, try again! ');
         }
      } catch (e) {
         console.log(e);
      } finally {
         setTimeout(() => {
            setloading(false);
            if (result.name) {
               navigation.navigate('newlist', {
                  name,
               });
            }
         }, 2000);
      }
   };

   if (loading) {
      return (
         <View style={tw`flex-1 bg-slate-800 h-full`}>
            <View style={tw`flex-1 items-center justify-center`}>
               <Text style={tw`ml-4 text-xl text-slate-400`}>
                  Creating {name} ...
               </Text>
            </View>
         </View>
      );
   }

   return (
      <View style={tw`flex-1 bg-slate-800 h-full`}>
         <View style={tw`flex-1 items-center justify-center`}>
            <TextInput
               style={tw`pl-1 py-2 text-2xl font-medium text-slate-400`}
               placeholder='new list'
               placeholderTextColor={'white'}
               value={name}
               autoFocus={true}
               onChangeText={(value) => setname(value)}
            />
         </View>
         <TouchableOpacity
            style={tw`flex items-center justify-center rounded-md bg-slate-700 h-15`}
            onPress={onCreate}
         >
            <Text style={tw`ml-4 text-xl text-slate-400`}>Create</Text>
         </TouchableOpacity>
      </View>
   );
};

export default CreateListScreen;

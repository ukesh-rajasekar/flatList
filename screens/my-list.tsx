import {
   View,
   Text,
   KeyboardAvoidingView,
   Platform,
   TouchableOpacity,
   FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParams } from '../types/navigation-stacks';
import { getTodos } from '../utils/http-functions';
import { HiddenList, List } from '../components/list-component';
import { Lists } from '../types/lists';
import { SwipeListView } from 'react-native-swipe-list-view';

const MyList = () => {
   const [lists, setlists] = useState<Lists[] | []>([]);

   const message = `Let's plan your shopping!`;
   const instruction = `Tap the plus button to create your first list`;

   const navigation = useNavigation<NavigationProp<HomeStackParams>>();

   const onAdd = () => {
      //navigate to creation page
      navigation.navigate('CreateNewList');
   };

   const fetchTodos = async () => {
      try {
         const result = await getTodos();
         setlists(result);
      } catch (e) {
         console.log(e);
      }
   };

   const onDelete = () => {};
   useEffect(() => {
      fetchTodos();
   }, []);

   return (
      <View style={tw`flex-1 bg-slate-800`}>
         {lists.length === 0 ? (
            <View style={tw`flex items-center justify-center h-full pb-30`}>
               <Text style={tw`pb-5 text-2xl font-medium text-slate-400`}>
                  {message}
               </Text>
               <Text style={tw`pb-4 text-base font-medium text-slate-400`}>
                  {instruction}
               </Text>
            </View>
         ) : (
            <View style={tw`pt-10 px-5`}>
               <SwipeListView
                  data={lists}
                  renderItem={({ item }) => (
                     <List
                        goToList={() => {
                           navigation.navigate('newlist', {
                              listDetail: item,
                           });
                        }}
                        item={item}
                        idx={item._id}
                     />
                  )}
                  renderHiddenItem={({ item }) => (
                     <HiddenList todoListId={item._id} onDelete={onDelete} />
                  )}
                  leftOpenValue={75}
                  rightOpenValue={-75}
               />
            </View>
         )}

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

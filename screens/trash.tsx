import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import tw from 'twrnc';
import { HiddenList, ListComponent } from '../components/list-component';
import { Lists } from '../types/lists';
import { deleteTodo, getTodos, updateTodo } from '../utils/http-functions';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { HomeStackParams } from '../types/navigation-stacks';
import { getUser } from '../contexts/userContext';

const Trash = () => {
   const [lists, setlists] = useState<Lists[]>([]);

   const message = `Looks empty here!`;
   const instruction = ``;
   const navigation = useNavigation<NavigationProp<HomeStackParams>>();
   const { user } = getUser();

   const fetchDeletedTodos = async () => {
      if (!user) return null;
      const fetchDeleted = true;
      try {
         const result = await getTodos(fetchDeleted, user._id);
         setlists(result);
      } catch (e) {
         console.log(e);
      }
   };

   const onDelete = async (id: string) => {
      setlists((currItems) => currItems.filter((i) => i._id != id));
      const res = await deleteTodo(id);
      console.log(res, '### updated');
   };

   const onRestore = async (id: string) => {
      setlists((currItems) => currItems.filter((i) => i._id != id));
      const updatedTodoName = await updateTodo(id, {
         update: { moveToTrash: false },
      });
      console.log(updatedTodoName, '### updated');
   };

   useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
         // Do whatever you want
         fetchDeletedTodos();
      });

      return () => {
         unsubscribe();
      };
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
                     <ListComponent
                        goToList={() => {}}
                        item={item}
                        idx={item._id}
                        icon={'restore'}
                        iconColor={'#228b22'}
                        onRestore={onRestore}
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
      </View>
   );
};

export default Trash;

import React, { useEffect, useState } from 'react';
import {
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import tw from 'twrnc';
import { Item as ItemProp, Lists } from '../types/lists';
import {
   deleteCompletedItem,
   getListById,
   updateTodo,
} from '../utils/http-functions';
import { HiddenItem, Item } from './items-component';

type Item = {
   route: {
      params: {
         listDetail: Lists;
      };
   };
};

const List = ({ route }: Item) => {
   const [input, setInput] = useState<string | null>(null);

   const { _id } = route.params.listDetail;

   const [items, setitems] = useState<ItemProp[]>([]);

   const onAdd = () => {
      Keyboard.dismiss();
      if (!input) return;
      const newItem = {
         name: input,
         isCompleted: false,
      };

      const newItems = [...items, newItem];
      setitems(newItems);
      setInput(null);
      submitUpdate(newItems);
   };

   const submitUpdate = async (newItems: ItemProp[]) => {
      const updatedTodoName = await updateTodo(_id, {
         update: { items: newItems },
      });
      console.log(updatedTodoName, '### updated');
   };

   const onDelete = async (todoListId: string, itemId: string) => {
      setitems((currItems) => currItems.filter((i) => i._id != itemId));
      const deleteTodo = await deleteCompletedItem(todoListId, itemId);
      console.log(deleteTodo, 'deleted todo');
   };

   const fetchList = async () => {
      try {
         const result = await getListById(_id);
         setitems(result.items);
         console.log(result, 'list here');
      } catch (e) {
         console.log(e);
      }
   };

   useEffect(() => {
      fetchList();
   }, []);

   return (
      <View style={tw`flex-1 bg-slate-800`}>
         <View style={tw`pt-20 px-10`}>
            <KeyboardAvoidingView
               behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
               style={tw`py-4 flex-row items-center justify-around w-full`}
            >
               <TextInput
                  style={tw`px-4 py-2 flex-3 bg-slate-700 rounded-md border-2 border-slate-600 text-white`}
                  placeholder='add here'
                  placeholderTextColor={'white'}
                  value={input}
                  onChangeText={(value) => setInput(value)}
               />
               <TouchableOpacity
                  onPress={onAdd}
                  style={tw`ml-4 w-10 h-10 bg-white rounded-md justify-center items-center border-white border-2`}
               >
                  <Text style={tw`text-xl`}>+</Text>
               </TouchableOpacity>
            </KeyboardAvoidingView>
            <>
               <SwipeListView
                  data={items}
                  renderItem={({ item }) => (
                     <Item item={item} itemId={item._id} todoListId={_id} />
                  )}
                  renderHiddenItem={({ item }) => (
                     <HiddenItem
                        itemId={item._id}
                        todoListId={_id}
                        onDelete={onDelete}
                     />
                  )}
                  leftOpenValue={75}
                  rightOpenValue={-75}
               />
               {/* <FlatList
                  data={items}
                  renderItem={({ item, index }) => (
                     <Item item={item} itemId={item._id} todoListId={_id} />
                  )}
                  keyExtractor={(item) => item.name}
               /> */}
            </>
         </View>
      </View>
   );
};

export default List;

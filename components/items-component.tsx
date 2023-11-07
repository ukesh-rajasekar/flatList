import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import tw from 'twrnc';
import { Item as ItemProp } from '../types/lists';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { updateCompletedItem } from '../utils/http-functions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HiddenItem = ({
   todoListId,
   itemId,
   onDelete,
}: {
   todoListId: string;
   itemId: string;
   onDelete: (todoListId, itemId) => void;
}) => {
   return (
      <TouchableHighlight
         style={tw`my-4 pt-2 px-1 flex-row items-center justify-end`}
      >
         <TouchableOpacity onPress={() => onDelete(todoListId, itemId)}>
            <Icon name='delete' size={30} color={'#b84d25'} />
         </TouchableOpacity>
      </TouchableHighlight>
   );
};

export const Item = ({
   todoListId,
   itemId,
   item,
}: {
   todoListId: string;
   itemId: string;
   item: ItemProp;
}) => {
   const { name, isCompleted } = item;
   const [toggleCheckBox, setToggleCheckBox] = useState(isCompleted);

   const submitUpdate = async (value) => {
      setToggleCheckBox(value);
      const updatedTodoName = await updateCompletedItem(todoListId, itemId, {
         update: { isCompleted: value },
      });
      console.log(updatedTodoName, '### updated');
   };

   console.log(itemId, todoListId, '### updated');

   return (
      <TouchableHighlight
         key={itemId}
         style={tw`my-4 py-2 px-4 flex-row items-center justify-between border-2 border-slate-600 rounded-md bg-slate-700`}
      >
         <>
            <View style={tw`flex-row items-center flex-wrap`}>
               <View style={tw`w-4 h-4 bg-white rounded`}>
                  <Checkbox
                     style={tw`w-4 h-4 bg-white`}
                     value={toggleCheckBox}
                     onValueChange={() => submitUpdate(!toggleCheckBox)}
                     color={toggleCheckBox ? '#4630EB' : undefined}
                  />
               </View>
               <Text style={tw`ml-4 text-xl text-slate-400`}>{name}</Text>
            </View>
            <TouchableOpacity
               style={tw`w-3 h-3 rounded-md border-2 border-white`}
               onPress={() => submitUpdate(!toggleCheckBox)}
            />
         </>
      </TouchableHighlight>
   );
};
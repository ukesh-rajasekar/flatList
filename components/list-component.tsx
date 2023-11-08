import { View, Text, TouchableHighlight } from 'react-native';
import tw from 'twrnc';
import { Lists } from '../types/lists';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type ListProps = {
   idx: string;
   item: Lists;
   goToList: () => void;
   icon: string;
   iconColor: string;
   onRestore?: (idx) => void;
};

export const HiddenList = ({
   todoListId,
   onDelete,
}: {
   todoListId: string;
   onDelete: (todoListId) => void;
}) => {
   return (
      <TouchableHighlight
         style={tw`my-4 pt-2 px-1 flex-row items-center justify-end`}
      >
         <TouchableOpacity onPress={() => onDelete(todoListId)}>
            <Icon name='delete' size={30} color={'#b84d25'} />
         </TouchableOpacity>
      </TouchableHighlight>
   );
};

export const ListComponent = ({
   idx,
   item,
   goToList,
   icon,
   iconColor,
   onRestore,
}: ListProps) => {
   return (
      <TouchableHighlight
         key={idx}
         onPress={goToList}
         style={tw`my-4 py-2 px-4 flex-row items-center justify-between border-2 border-slate-600 rounded-md bg-slate-700`}
      >
         <>
            <View style={tw`flex-row items-center flex-wrap`}>
               <View style={tw`w-4 h-4 bg-white rounded`} />
               <Text style={tw`ml-4 text-xl text-slate-400`}>{item.name}</Text>
            </View>
            <TouchableHighlight
               onPress={() => (icon === 'restore' ? onRestore(idx) : null)}
            >
               <Icon name={icon} size={30} color={iconColor} />
            </TouchableHighlight>
         </>
      </TouchableHighlight>
   );
};

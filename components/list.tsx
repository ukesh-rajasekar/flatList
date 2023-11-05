import {
   FlatList,
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';

const Item = ({ idx, item }: { idx: number; item: string }) => {
   return (
      <View
         key={idx}
         style={tw`my-4 py-2 px-4 flex-row items-center justify-between border-2 border-slate-600 rounded-md bg-slate-700`}
      >
         <View style={tw`flex-row items-center flex-wrap`}>
            <View style={tw`w-4 h-4 bg-white rounded`} />
            <Text style={tw`ml-4 text-xl text-slate-400`}>{item}</Text>
         </View>
         <View style={tw`w-3 h-3 rounded-md border-2 border-white`} />
      </View>
   );
};

const List = () => {
   const [input, setInput] = useState<string | null>(null);
   const [items, setitems] = useState<string[]>(['one', 'two', 'three']);

   const name = 'shopping';

   const onAdd = () => {
      Keyboard.dismiss();
      if (!input) return;
      setitems((prev) => [...prev, input]);
      setInput(null);
   };

   return (
      <View style={tw`flex-1 bg-slate-800`}>
         <View style={tw`pt-20 px-10`}>
            <Text style={tw`text-2xl font-medium text-slate-400`}>{name}</Text>
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
                  style={tw`mx-4 w-10 h-10 bg-white rounded-md justify-center items-center border-white border-2`}
               >
                  <Text style={tw`text-xl`}>+</Text>
               </TouchableOpacity>
            </KeyboardAvoidingView>
            <>
               <FlatList
                  data={items}
                  renderItem={({ item, index }) => (
                     <Item item={item} idx={index} />
                  )}
                  keyExtractor={(item) => item}
               />
            </>
         </View>
      </View>
   );
};

export default List;

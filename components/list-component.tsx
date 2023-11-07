import { View, Text } from 'react-native';
import tw from 'twrnc';
import { Lists } from '../types/lists';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ListProps = {
   idx: string;
   item: Lists;
   goToList: () => void;
};

export const List = ({ idx, item, goToList }: ListProps) => {
   return (
      <TouchableOpacity
         key={idx}
         onPress={goToList}
         style={tw`my-4 py-2 px-4 flex-row items-center justify-between border-2 border-slate-600 rounded-md bg-slate-700`}
      >
         <View style={tw`flex-row items-center flex-wrap`}>
            <View style={tw`w-4 h-4 bg-white rounded`} />
            <Text style={tw`ml-4 text-xl text-slate-400`}>{item.name}</Text>
         </View>
      </TouchableOpacity>
   );
};

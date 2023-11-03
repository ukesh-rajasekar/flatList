import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import tw from 'twrnc';
import List from './components/list';
export default function App () {
  return (
    <View style={tw`flex-1`}>
      <List />
      <StatusBar style="auto" />
    </View>
  );
}

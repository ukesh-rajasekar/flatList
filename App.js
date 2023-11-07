
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Text
} from 'react-native';
import 'react-native-gesture-handler';
import CreateListScreen from './components/create-list-screen';
import List from './components/list';
import { AppStack } from './navigation/app-stack';
import tw from 'twrnc';


export default function App () {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          key={'stack1'}
          name="Drawer"
          component={AppStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen key={'stack2'} name='newlist' component={List} options={({ route }) => ({
          headerTitleStyle: { fontSize: 15 },
          headerShown: true,
          headerTitle: () => <Text style={tw`text-xl text-slate-400`}>{route.params.listDetail.name}</Text>,
          headerTransparent: true,
          headerTintColor: '#94A3B8',
          headerBlurEffect: 'prominent',
        })} />
        <Stack.Screen key={'stack3'} name='CreateNewList' component={CreateListScreen} options={{
          headerShown: true,

          headerTitle: 'Create a List'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

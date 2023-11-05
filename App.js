
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import List from './components/list';
import { AppStack } from './navigation/app-stack';



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
        <Stack.Screen key={'stack2'} name='NewList' component={List} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

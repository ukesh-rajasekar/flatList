import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import 'react-native-gesture-handler';
import CreateListScreen from './components/create-list-screen';
import List from './components/list';
import { AppStack } from './navigation/app-stack';
import tw from 'twrnc';
import OnboardingUser from './screens/onboarding';
import React, { useState, useEffect } from 'react';
import { getItem } from './utils/asyncStorage';

export default function App() {
   const Stack = createStackNavigator();

   const [showOnboarding, setShowOnboarding] = useState(null);
   useEffect(() => {
      checkIfAlreadyOnboarded();
   }, []);

   const checkIfAlreadyOnboarded = async () => {
      let result = await getItem('user');
      console.log(result, '#### result here');
      if (result) {
         // hide onboarding
         setShowOnboarding(false);
      } else {
         // show onboarding
         setShowOnboarding(true);
      }
   };

   if (showOnboarding == null) {
      return null;
   }

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='onboardingScreens'>
            {showOnboarding && (
               <Stack.Screen
                  key={'stack1'}
                  name='onboardingScreens'
                  component={OnboardingUser}
                  options={{ headerShown: false }}
               />
            )}
            <Stack.Screen
               key={'stack1'}
               name='Drawer'
               component={AppStack}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               key={'stack2'}
               name='newlist'
               component={List}
               options={({ route }) => ({
                  headerTitleStyle: { fontSize: 15 },
                  headerShown: true,
                  headerTitle: () => (
                     <Text style={tw`text-xl text-slate-400`}>
                        {route.params.listDetail.name}
                     </Text>
                  ),
                  headerTransparent: true,
                  headerTintColor: '#94A3B8',
                  headerBlurEffect: 'prominent',
               })}
            />
            <Stack.Screen
               key={'stack3'}
               name='CreateNewList'
               component={CreateListScreen}
               options={{
                  headerShown: true,

                  headerTitle: 'Create a List',
               }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

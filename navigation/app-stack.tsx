import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/custom-drawer';
import MyList from '../screens/my-list';

const Drawer = createDrawerNavigator();

export const AppStack = () => {
   return (
      <Drawer.Navigator
         drawerContent={(props) => <CustomDrawer {...props} />}
         screenOptions={{
            headerShown: true,
            drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
               fontSize: 15,
            },
         }}
      >
         <Drawer.Screen name='My List' component={MyList} />
      </Drawer.Navigator>
   );
};

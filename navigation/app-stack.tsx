import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/custom-drawer';
import MyList from '../screens/my-list';
import Trash from '../screens/trash';
import Appearance from '../screens/appearance';

const Drawer = createDrawerNavigator();

export const AppStack = () => {
   return (
      <Drawer.Navigator
         drawerContent={(props) => <CustomDrawer {...props} />}
         screenOptions={{
            headerShown: true,
            drawerActiveBackgroundColor: '#334155',
            drawerActiveTintColor: '#94A3B8',
            drawerInactiveTintColor: '#94A3B8',
            drawerLabelStyle: {
               fontSize: 16,
            },
         }}
      >
         <Drawer.Screen name='My List' component={MyList} />
         <Drawer.Screen name='Trash' component={Trash} />
         <Drawer.Screen name='Appearance' component={Appearance} />
      </Drawer.Navigator>
   );
};

import {
   DrawerContentScrollView,
   DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

const CustomDrawer = (props) => {
   return (
      <View style={tw`flex-1`}>
         <DrawerContentScrollView
            {...props}
            contentContainerStyle={tw`flex-1 bg-slate-800`}
         >
            <View style={tw`flex flex-column items-center justify-center p-6`}>
               <Image
                  source={require('../assets/images/user-profile.jpg')}
                  style={tw`h-30 w-30 rounded-full mb-3 mt-5`}
               />
               {/* //change hello to user name if auth */}
               <Text style={tw`text-lg text-slate-300`}>Hello!</Text>
               <View style={tw`flex-row`}>
                  <Text style={tw`text-lg text-slate-300`}>Log In</Text>
               </View>
            </View>
            <View style={tw`h-px my-2 w-full bg-gray-700 border-0`} />
            <View style={tw`flex-1 bg-slate-800 py-5`}>
               <DrawerItemList {...props} />
            </View>
         </DrawerContentScrollView>
         <View
            style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}
         >
            <TouchableOpacity
               onPress={() => {}}
               style={{ paddingVertical: 15 }}
            >
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name='share-social-outline' size={22} />
                  <Text
                     style={{
                        fontSize: 15,
                        fontFamily: 'Roboto-Medium',
                        marginLeft: 5,
                     }}
                  >
                     Tell a Friend
                  </Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => {}}
               style={{ paddingVertical: 15 }}
            >
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name='exit-outline' size={22} />
                  <Text
                     style={{
                        fontSize: 15,
                        fontFamily: 'Roboto-Medium',
                        marginLeft: 5,
                     }}
                  >
                     Sign Out
                  </Text>
               </View>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default CustomDrawer;

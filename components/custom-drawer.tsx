import React from 'react';
import {
   View,
   Text,
   ImageBackground,
   Image,
   TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import {
   DrawerContentScrollView,
   DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
   return (
      <View style={{ flex: 1 }}>
         <DrawerContentScrollView
            {...props}
            contentContainerStyle={tw`bg-slate-800`}
         >
            <ImageBackground
               source={require('../assets/images/menu-bg.jpeg')}
               style={{ padding: 20 }}
            >
               <Image
                  source={require('../assets/images/user-profile.jpg')}
                  style={{
                     height: 80,
                     width: 80,
                     borderRadius: 40,
                     marginBottom: 10,
                  }}
               />
               {/* //change hello to user name if auth */}
               <Text
                  style={{
                     color: '#fff',
                     fontSize: 18,
                     fontFamily: 'Roboto-Medium',
                     marginBottom: 5,
                  }}
               >
                  Hello!
               </Text>
               <View style={{ flexDirection: 'row' }}>
                  <Text
                     style={{
                        color: '#fff',
                        fontFamily: 'Roboto-Regular',
                        marginRight: 5,
                     }}
                  >
                     ....
                  </Text>
               </View>
            </ImageBackground>
            <View
               style={{
                  flex: 1,
                  backgroundColor: '#fff',
                  paddingTop: 10,
                  width: '100%',
               }}
            >
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

import {
   Dimensions,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import tw from 'twrnc';
import LottieView from 'lottie-react-native';
import { colors } from '../assets/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';
const { width, height } = Dimensions.get('window');

const OnboardingUser = () => {
   const navigation = useNavigation<NavigationProp<{ Drawer }>>();
   const user = {
      onBoarded: true,
   };

   const handleDone = () => {
      navigation.navigate('Drawer');
      setItem('user', JSON.stringify(user));
   };
   const doneButton = ({ ...props }) => {
      return (
         <TouchableOpacity
            style={tw`p-4 bg-white rounded-tl-full rounded-bl-full`}
            onPress={handleDone}
         >
            <Text>Start Now</Text>
         </TouchableOpacity>
      );
   };
   return (
      <View style={tw`flex-1 bg-slate-800`}>
         <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            DoneButtonComponent={doneButton}
            bottomBarHighlight={false}
            containerStyles={{ paddingHorizontal: 15 }}
            pages={[
               {
                  backgroundColor: colors.onboardingGreen,
                  image: (
                     <View style={styles.lottie}>
                        <LottieView
                           source={require('../assets/animations/todo-animation.json')}
                           autoPlay
                           loop
                        />
                     </View>
                  ),
                  title: 'Unleash Productivity',
                  subtitle:
                     'Turn Chaos into Order: Create Lists, Conquer Tasks!',
               },
               {
                  backgroundColor: colors.onboardingYellow,
                  image: (
                     <View style={styles.lottie}>
                        <LottieView
                           source={require('../assets/animations/share-animation.json')}
                           autoPlay
                           loop
                        />
                     </View>
                  ),
                  title: 'Share the Joy of Lists',
                  subtitle:
                     'Together We Achieve More: Share Lists, Share Success!',
               },
               {
                  backgroundColor: colors.onboardingPurple,
                  image: (
                     <View style={styles.lottie}>
                        <Text
                           style={tw`pb-5 text-2xl font-medium text-white text-center`}
                        >
                           Welcome to ListSync
                        </Text>
                        <LottieView
                           source={require('../assets/animations/shop-animation.json')}
                           autoPlay
                           loop
                        />
                     </View>
                  ),
                  title: ``,
                  subtitle:
                     'Simplify your life by effortlessly creating and managing lists, from shopping to personal to-dos.',
               },
            ]}
         />
      </View>
   );
};

export default OnboardingUser;

const styles = StyleSheet.create({
   lottie: {
      width: width * 0.9,
      height: width,
   },
});

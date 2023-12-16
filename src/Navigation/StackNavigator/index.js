import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Feedback from '../../Screens/Feedback';
import ContactUs from '../../Screens/ContactUs';
import Inspiration from '../../Screens/Inspiration';
import Stories from '../../Screens/Stories';
import AboutLifeFoundation from '../../Screens/AboutLifeFoundation';
import MissionAndVisionStatements from '../../Screens/MissionAndVisionStatements';
import SideBarScreen from '../../Screens/SideBarScreen';
function StackNavigator() {
  const Stack = createStackNavigator();
  return <Stack.Navigator screenOptions={NavigationOptions}></Stack.Navigator>;
}

export default StackNavigator;

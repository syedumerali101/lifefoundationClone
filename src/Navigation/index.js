import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import LiveLifeWellScreen from '../Screens/LiveLifeWellScreen';
import MenuScreen from '../Screens/MenuScreen';
import defaultColors from '../utils/defaultColors';
import {icons, images, tabIcons} from '../assets';
import {vh, vw} from '../utils/units';
import HeaderLogo from '../Components/HeaderLogo';
import HeaderLeft from '../Components/HeaderLeft';
import TabBar from '../Components/TabBar';
import ContactUs from '../Screens/ContactUs';
import Feedback from '../Screens/Feedback';
import SideBarScreen from '../Screens/SideBarScreen';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import MissionAndVisionStatements from '../Screens/MissionAndVisionStatements';
import AboutLifeFoundation from '../Screens/AboutLifeFoundation';
import Stories from '../Screens/Stories';
import Inspiration from '../Screens/Inspiration';
const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName="Home"
      sceneContainerStyle={styles.sceneContainerStyle}
      screenOptions={{
        tabBarAllowFontScaling: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerStyle: styles.headerStyle,
        headerLeftContainerStyle: styles.headerLeftContainerStyle,
        // headerLeft: HeaderLeft,
        headerTitleAlign: 'center',
        headerTitle: HeaderLogo,
      }}>
      <Tabs.Screen component={LiveLifeWellScreen} name="LiveLifeWellScreen" />
      <Tabs.Screen component={HomeScreen} name="Home" />
      <Tabs.Screen
        component={SideBarScreen}
        name="MenuScreen"
        options={{headerShown: false}}
      />
      <Tabs.Screen name="Feedback" component={Feedback} />
      <Tabs.Screen name="ContactUs" component={ContactUs} />
      <Tabs.Screen
        name="MissionAndVisionStatements"
        component={MissionAndVisionStatements}
      />
      <Tabs.Screen name="AboutLifeFoundation" component={AboutLifeFoundation} />

      <Tabs.Screen name="Stories" component={Stories} />

      <Tabs.Screen name="Inspiration" component={Inspiration} />
    </Tabs.Navigator>
  );
};
const Navigation = () => {
  return <TabsNavigation />;
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MissionAndVisionStatements"
        component={MissionAndVisionStatements}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutLifeFoundation"
        component={AboutLifeFoundation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SideBarScreen"
        component={SideBarScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Stories"
        component={Stories}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Inspiration"
        component={Inspiration}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: defaultColors.white,
    borderTopWidth: 0,
    shadowColor: defaultColors.black,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 11,
  },
  headerStyle: {
    backgroundColor: defaultColors.primary,
    height: 12 * vh,
  },
  tabBarLabelStyle: {
    fontWeight: '500',
  },
  headerLeftContainerStyle: {
    paddingLeft: 5 * vw,
  },
  sceneContainerStyle: {backgroundColor: 'transparent'},
});
export default Navigation;

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
      <Tabs.Screen component={MenuScreen} name="MenuScreen" />
    </Tabs.Navigator>
  );
};
const Navigation = () => {
  return <HomeScreen />;
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

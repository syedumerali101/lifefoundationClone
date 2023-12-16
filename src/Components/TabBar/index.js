import {
  Image,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {tabIcons} from '../../assets';
import styles from './styles';
import AppText from '../Text';
const tabItems = [
  {
    label: 'Live Life Well',
    icon: tabIcons.liveLife,
    name: 'LiveLifeWellScreen',
  },
  {
    label: 'Home',
    icon: tabIcons.home,
    name: 'Home',
  },
  {
    label: 'Menu',
    icon: tabIcons.menu,
    name: 'MenuScreen',
  },
];
const renderTabs = navigationProps => {
  // const { state } = navigationProps
  return tabItems.map(route => {
    <TabButton label={route.label} icon={route.icon} key={route.name} />;
  });
  return state.routes.map((route, index) => {
    const isFocused = state.index === index;
    return (
      <TabButton
        key={`${tabItems[index].name}-${isFocused ? 'active' : 'inactive'}`}
        tabIndex={index}
        {...navigationProps}
      />
    );
  });
};
const TabButton = navigationProps => {
  const {state, tabIndex} = navigationProps;
  const isFocused = state.index === tabIndex;
  return (
    <>
      {tabIndex === 1 && <View style={styles.separator} />}
      {isFocused ? (
        <ActiveTabButton
          // {...navigationProps}
          index={tabIndex}
        />
      ) : (
        <InActiveTabButton
          {...navigationProps}
          // index={tabIndex}
        />
      )}
      {tabIndex === 1 && <View style={styles.separator} />}
    </>
  );
};
const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContainerStyle}>
        <Image source={tabIcons.home} style={styles.leftIconStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.centerContainerStyle}>
        <AppText>Live Life Well</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.leftContainerStyle}>
        <Image source={tabIcons.menu} style={styles.leftIconStyle} />
      </TouchableOpacity>
    </View>
  );
};
const InActiveTabButton = ({state, descriptors, navigation, label, index}) => {
  const onPress = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.spring,
      duration: 200,
    });
    navigation.navigate(tabItems[index].name);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.itemContainer]}>
      <Image source={tabItems[index].icon} style={[styles.icon]} />
      <Text style={[styles.text]}>{tabItems[index].label}</Text>
    </TouchableOpacity>
  );
};
const ActiveTabButton = ({state, descriptors, navigation, index}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={[styles.homeContainer]}>
        <Image
          source={tabItems[index].icon}
          style={[styles.icon, styles.homeIcon]}
        />
      </View>
    </View>
  );
};
export default TabBar;

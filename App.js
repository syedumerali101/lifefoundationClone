import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import defaultColors from './src/utils/defaultColors';
import {images} from './src/assets';
const App = () => {
  return (
    <ImageBackground source={images.background} style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={defaultColors.primary}
      />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

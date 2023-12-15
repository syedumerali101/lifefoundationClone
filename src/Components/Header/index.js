import {View, Text} from 'react-native';
import React from 'react';
import Banner from '../Banner';
import AppButton from '../AppButton';
import {icons} from '../../assets';
import styles from './styles';
export default function Header() {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Banner
        text="If you are having  emotional stress or suicidal thoughts, 
                    Just tap this red button.
                    
                    It will auto-dial"
      />
      <View></View>
    </View>
  );
}

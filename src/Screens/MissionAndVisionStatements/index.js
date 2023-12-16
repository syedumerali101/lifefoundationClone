import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppText from '../../Components/Text';
import {images} from '../../assets';

const MissionAndVisionStatements = () => {
  const paragraphs = [
    {
      id: 1,
      title: 'Our Mission',
      description:
        'The LiFe Foundation will provide professional and financial support for the purpose of developing Mental and Emotional Health resources for the Athletes, Parents and Coaches of SC del Sol soccer club, and, as the Foundation expands, to other sports clubs. Our goal is to develop complete athletes on the field and confident well-adjusted young adults off the field prepared to handle the challenges of life. ',
    },
    {
      id: 2,
      title: 'Our Vision',
      description:
        'The LiFe Foundation Vision is to develop an effective and sustainable program to address and improve the Mental and Emotional Health needs of young Athletes, and their Parents and Coaches.  The program will be continuously reviewed by certified Psychologists for its benefits and impacts and will be modified as necessary. The Foundation will secure sufficient long-term funding to both sustain and expand the program. ',
    },
  ];
  const renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <AppText
          font="Poppins"
          weight="SemiBold"
          style={styles.headerTextStyle}>
          Mission and Vision Statements
        </AppText>
      </View>
    );
  };

  const renderParagraphs = () => {
    return (
      <View style={styles.paragraphsContainer}>
        {paragraphs?.map((item, index) => (
          <View style={styles.paragraphView}>
            <AppText font="Poppins" weight="SemiBold" style={styles.titleStyle}>
              {item?.title}
            </AppText>
            <AppText
              font="Poppins"
              weight="Regular"
              style={styles.paragraphTextStyle}>
              {item?.description}
            </AppText>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.mainScrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        {renderHeader()}
        {renderParagraphs()}
      </ScrollView>
    </View>
  );
};

export default MissionAndVisionStatements;

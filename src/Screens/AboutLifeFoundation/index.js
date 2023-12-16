import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppText from '../../Components/Text';
import {images} from '../../assets';

const AboutLifeFoundation = () => {
  const paragraphs = [
    {
      id: 1,
      description:
        'LiFe Foundation was established as a non-profit corporation in Arizona in May of 2022 and has been approved by the IRS as a 501(c)(3) public charity.',
    },
    {
      id: 2,
      description:
        "Although LiFe Foundation and SC del Sol are separate legal entities, we have formed a partnership to achieve the Foundation's Mission and Vision Statements. The sudden and tragic loss of two SC del Sol players was the motivation force leading to the start of the Foundation. ",
    },
    {
      id: 3,
      description:
        ' Our goal is to provide easy-to-access information and other resources on mental and emotional health to the players, and their parents and coaches and parents of the club.',
    },
    {
      id: 4,
      description:
        'Our Mission is to develop complete athletes on the field and confident well-adjusted young adults off the field who are prepared to handle the challenges of LiFe. ',
    },
    {
      id: 5,
      description:
        'Our Vision is to develop an effective and sustainable program to address and improve the mental and emotional well-being of young players, their parents, and their coaches. The program will be continuously reviewed by certified psychologists for its benefits and impacts and will be modified as necessary as we learn better ways to reach our target audiences. ',
    },
    {
      id: 6,
      description:
        'The partnership with SC del Sol allows the Foundation to test and evaluate the best outreach methodologies in the controlled setting of a medium size soccer club. We have recently added both a parent and a player to our Board of Directors to represent and advise us how best to reach our target audience: players, parents, and coaches.',
    },
    {
      id: 7,
      description:
        'As our outreach programming is developed, improved, and proven, we will partner with other soccer clubs, and eventually other sports. All youth athletes face the same daunting issues today, and the LiFe Foundation is committed to having the broadest impact.',
    },
    {
      id: 8,
      description:
        'As our outreach programming is developed, improved, and proven, we will partner with other soccer clubs, and eventually other sports. All youth athletes face the same daunting issues today, and the LiFe Foundation is committed to having the broadest impact.',
    },
    {
      id: 9,
      description:
        'LiFe Foundation is the only organization that focuses on young athletes, and because they are legal minors, we also focus on their parents. The Foundation uses a website, lifefoundation.net, to present well-curated and organized information easily accessible to anyone. We endorse promotional activities and peer collaborations to inform our audiences about this information so that they can easily find the resources to help them understand mental and emotional health issues prior to and when they face them. The Foundation is developing a mobile App to provide immediate access to help in times of crisis.',
    },
  ];
  const renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <AppText
          font="Poppins"
          weight="SemiBold"
          style={styles.headerTextStyle}>
          About LiFe Foundation
        </AppText>
      </View>
    );
  };

  const renderParagraphs = () => {
    return (
      <View style={styles.paragraphsContainer}>
        {paragraphs?.map((item, index) => (
          <View style={styles.paragraphView}>
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

  const renderFooter = () => {
    return (
      <View style={styles.footerViewStyle}>
        <TouchableOpacity style={styles.contactUsButton}>
          <AppText
            font="Poppins"
            weight="SemiBold"
            style={styles.contactUsTextStyle}>
            Contact Us
          </AppText>
        </TouchableOpacity>

        <AppText weight="Regular" style={styles.contactURl}>
          https://lifefoundation.net/
        </AppText>
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
        {renderFooter()}
      </ScrollView>
    </View>
  );
};

export default AboutLifeFoundation;

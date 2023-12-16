import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppText from '../../Components/Text';
import {images} from '../../assets';

const Stories = () => {
  const data = [
    {
      id: 1,
      title: 'Luc Treadwell',
      image: images.profile1,
      paragraphs: [
        {
          id: 1,
          description:
            "Luc Treadwell was born in Ouagadougou, in the West African country of Burkina Faso, on October 5th, 1998. His family relocated to Phoenix within a few months, and he grew up and lived in the Valley of the Sun. He was a most avid reader and was known to discuss books he was reading with one of his teammate's Mom after practices.",
        },
        {
          id: 2,
          description:
            'He started playing soccer at four years and continued until sixteen. Luc was a talented player and played on competitive teams in both 3x3 soccer and for SC del Sol. In 2007, his 3v3 team placed 13th at the National Championships held at the Disney Wide World of Sports in Orlando. His club team placed as high as 3rd in the Arizona State Cup, with Luc scoring the winning goal in a penalty shoot-out. His soccer also took him to Albuquerque and La Cruces New Mexico (and White Sands National Monument), Denver, Seattle, and many trips Las Vegas and California cities (and the ocean).',
        },
        {
          id: 3,
          description:
            "Luc also developed both a talent and passion for entertaining. One of his early forays was jerk dancing and there is still a video of these efforts on YouTube. He started free-styling and writing lyrics in high school and soon became committed to rap music. In his own words (from his song This Year), In love with this music it's my passion it shows. He recorded both songs and videos and had several gigs to open shows in Arizona. Luc's final album was TKALLTHEWAY. The TK was for his stage name Tre Koast.",
        },
        {
          id: 4,
          description:
            'In 2019, Luc and his Mom went to Africa, where Luc was able to reconnect with his original roots and homeland, to meet some of his other family, and to have a better understanding of his unique multi-cultural heritage. ',
        },
        {
          id: 5,
          description:
            'Luc was unexpectedly taken on January 16, 2020, by gun violence.',
        },
        {
          id: 6,
          description:
            "Luc also wrote: I'm looking at life through a different lens. He truly is.",
        },
      ],
    },

    {
      id: 2,
      title: 'Freddie Torres',
      image: images.profile2,
      paragraphs: [
        {
          id: 1,
          description:
            'Freddie Torres was born in Phoenix, Arizona on January 7, 2004. He grew up with a large family surrounded by love. He was raised by two loving parents and was the middle child of three with an older sister and younger brother. Freddie began playing soccer at the age of 5. He quickly fell in love with the sport and was rarely ever seen without his soccer ball. His dream was to become a professional soccer player and he started his journey at the age of nine when he began playing club soccer.',
        },
        {
          id: 2,
          description:
            'He was introduced to a world of opportunity and was invited to the US SOCCER YMT regional identification tryouts on three separate occasions in 2017, 2019, and 2021. He also attended the ODP west regional camp and was selected to play in the west region ODP inter-regional in December of 2018. Although he was not able to attend, he made up for it when his team was victorious the following year in the 2019 ODP West Championship. Unfortunately, he was unable to accept his 2021 invitation due to receiving a concussion on 2 separate occasions in December 2020 and February 2021. Due to his injuries, he made the difficult but necessary decision to no longer play competitive soccer. During his years playing competitive soccer, Freddie traveled to many places. Beyond Arizona, he played in Utah, multiple venues in California, Florida, Idaho, Hawaii, Las Vegas, Nevada, and Chicago, Illinois. He also went to England with his team.',
        },
        {
          id: 3,
          description:
            "On and off the field Freddie was someone that people looked up to. His moral compass and kind nature made him not only a phenomenal player but an all-around amazing person. He cared so much for life and if he could, he would have saved every stray animal and given every homeless person a home. He couldn't help but to light up every room he entered with his big, genuine smile.",
        },
        {
          id: 4,
          description:
            'Despite the smile that Freddie displayed for the world, he privately battled with anxiety and depression along with an undiagnosed mental illness. The combination of these ultimately led to his untimely passing on November 15, 2021. He was only 17 years old.',
        },
      ],
    },
  ];
  const renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <AppText
          font="Poppins"
          weight="SemiBold"
          style={styles.headerTextStyle}>
          Luc’s and Freddie’s Stories: The “L” and the “F” in LiFe
        </AppText>
      </View>
    );
  };

  const renderParagraphs = () => {
    return data?.map((item, index) => (
      <View style={styles.paragraphsContainer}>
        <Image style={styles.imageStyle} source={item?.image} />
        <AppText weight="SemiBold" style={styles.titleStyle}>
          {item?.title}
        </AppText>
        {item?.paragraphs?.map(description => (
          <View style={styles.paragraphView}>
            <AppText
              font="Poppins"
              weight="Regular"
              style={styles.paragraphTextStyle}>
              {description?.description}
            </AppText>
          </View>
        ))}
      </View>
    ));
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

export default Stories;

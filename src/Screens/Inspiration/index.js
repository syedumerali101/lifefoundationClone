import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './styles';
import AppText from '../../Components/Text';
import {images} from '../../assets';
import {vh} from '../../utils/units';

const Inspiration = () => {
  const renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <AppText
          font="Poppins"
          weight="SemiBold"
          style={styles.headerTextStyle}>
          Inspiration
        </AppText>
      </View>
    );
  };

  const renderBannerImage1 = () => {
    return (
      <View
        style={[
          styles.imageViewStyle,
          {
            marginTop: -1 * vh,
          },
        ]}>
        <Image source={images.inspiration1} style={styles.imageStyle} />
      </View>
    );
  };

  const renderParagraph1 = () => {
    return (
      <View style={styles.paragraphViewStyle}>
        <AppText weight="SemiBold" style={styles.paragraphMainHeadingStyle}>
          Words of Encouragement for Courage and Strength: Say these to yourself
          everyday…
        </AppText>

        <AppText weight="Regular" style={styles.paragraphSubHeadingStyle}>
          I can’t control everything that happens to me, but I can control the
          way I respond to what happens. In my response is my power.
        </AppText>

        <AppText weight="Bold" style={styles.authorName}>
          By Jennifer Healey
        </AppText>
        <AppText weight="Regular" style={styles.authorUrl}>
          https://healingbrave.com/blogs/all/words-of-encouragement-strength]
        </AppText>
      </View>
    );
  };

  const renderBannerImage2 = () => {
    return (
      <View
        style={[
          styles.imageViewStyle,
          {
            marginTop: 2 * vh,
          },
        ]}>
        <Image source={images.inspiration2} style={styles.imageStyle} />
      </View>
    );
  };

  const renderParagraph2 = () => {
    return (
      <View style={styles.paragraphViewStyle}>
        <AppText weight="SemiBold" style={styles.paragraphMainHeadingStyle}>
          When life gets tough, power through with these quotes:
        </AppText>

        <AppText weight="Regular" style={styles.paragraphSubHeadingStyle}>
          Challenges are what make life interesting, and overcoming them is what
          makes life meaningful.
        </AppText>

        <AppText weight="Bold" style={styles.authorName}>
          By Moumita Dutta
        </AppText>
        <AppText weight="Regular" style={styles.authorUrl}>
          https://kidadl.com/quotes/when-life-gets-tough-quotes-to-power-through]
        </AppText>
      </View>
    );
  };

  const renderBannerImage3 = () => {
    return (
      <View
        style={[
          styles.imageViewStyle,
          {
            marginTop: 2 * vh,
          },
        ]}>
        <Image source={images.inspiration} style={styles.imageStyle} />
      </View>
    );
  };

  const renderParagraph3 = () => {
    return (
      <View style={styles.paragraphViewStyle}>
        <AppText weight="SemiBold" style={styles.paragraphMainHeadingStyle}>
          Quotes about Mental Health to Lift Your Spirits and Help you Feel Less
          Alone
        </AppText>

        <AppText weight="Regular" style={styles.paragraphSubHeadingStyle}>
          The advice I’d give to somebody that’s silently struggling is: You
          don’t have to live that way. You don’t have to struggle in silence.
          You can be un-silent. You can live well with a mental health
          condition, as long as you open up to somebody about it, because it’s
          really important you share your experience with people so that you can
          get the help that you need
        </AppText>

        <AppText weight="Bold" style={styles.authorName}>
          by KIMBERLY ZAPATA
        </AppText>
        <AppText weight="Regular" style={styles.authorUrl}>
          HTTPS://PARADE.COM/1037762/KIMBERLYZAPATA/MENTAL-HEALTH-QUOTES/
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
        {renderBannerImage1()}
        {renderParagraph1()}
        {renderBannerImage2()}
        {renderParagraph2()}
        {renderBannerImage3()}
        {renderParagraph3()}
      </ScrollView>
    </View>
  );
};

export default Inspiration;

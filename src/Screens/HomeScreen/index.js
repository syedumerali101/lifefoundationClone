import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Banner from '../../Components/Banner';
import TabBar from '../../Components/TabBar';
import {} from 'react-native-gesture-handler';
import AppButton from '../../Components/AppButton';
import AppText from '../../Components/Text';
import {icons} from '../../assets';
import colors from '../../utils/defaultColors';
import {vh, vw} from '../../utils/units';
const helpLine = [
  {id: 1, num: '800-DON’T CUT (366.8288)', text: 'Self-Harm Hotline'},
  {
    id: 2,
    num: '800.233.4357',
    text: 'Anorexia and Bulimia Hotline',
  },
  {id: 3, num: '800.931.2237', text: 'National Eating Disorders Assoc Hotline'},
  {id: 4, num: '800.799.7233', text: 'National Domestic Violence Hotline'},
  {
    id: 5,
    num: '800.273.8255',
    text: 'Bullying & Other Crisis Support Services',
  },
  {id: 6, num: '800 RUNAWAY (786.2929)', text: 'National Runaway Safeline'},
  {
    id: 7,
    num: '800.222.1222',
    text: 'American Association of Poison Control Centers',
  },
  {id: 8, num: '800.230.PLAN (7526)', text: 'Planned Parenthood Hotline'},
  {
    id: 9,
    num: '8800.622.2255',
    text: 'National Council on Alcoholism and Drug Dependency Hope Line',
  },
  {id: 10, num: '(800.221.7044)', text: 'AIDS Crisis Line'},
];
const communityData = [
  {id: 1, num: '888.843.4564', text: 'LGBT National Help Center'},
  {id: 2, num: '800.246.7743', text: 'LGBT National Youth Talkline'},
  {
    id: 3,
    num: '866.488.7386',
    text: 'Trevor Project Suicide Prevention for LBGT or text “START” to',
  },
  {id: 4, num: 'to 678-678', text: 'Trans Lifeline.org'},
  {id: 5, num: '877.565.8860', text: 'Provides trans peer support</strong'},
];
const renderBullets = data => {
  return data.map(val => {
    return (
      <TouchableOpacity style={styles.renderBulletsContainer}>
        <View style={styles.bulletContainer}>
          <View style={styles.bulletStyle} />
        </View>
        <View style={styles.bulletTextContainer}>
          <AppText style={styles.bulletNumberStyle}>
            {val?.num} <AppText style={styles.textStyle}>{val?.text}</AppText>
          </AppText>
        </View>
      </TouchableOpacity>
    );
  });
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Banner
        text="If you are having  emotional stress or suicidal thoughts, 
                    Just tap this red button.
                    
                    (It will auto-dial)"
        // buttonText="I need some help"
        // onButtonPress={() => console.log('adknsads')}
        // buttonStyle={styles.buttonStyle}
      />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{alignItems: 'center', paddingBottom: vh * 10}}>
        <AppButton
          icon={icons.phoneRedIcon}
          text=" I Need Some Help"
          buttonStyle={styles.buttonStyle}
        />

        <AppText
          style={[
            styles.highlightedText,
            {fontSize: vh * 2, lineHeight: vh * 3, marginTop: vh * 2},
          ]}>
          What’s it like to call a help line?
        </AppText>
        <AppText
          style={[
            styles.textStyle,
            {fontSize: vh * 2, lineHeight: vh * 3, marginBottom: vh * 2},
          ]}>
          Or try any of these crisis helplines:
        </AppText>

        <View
          style={{
            flexDirection: 'row',
            width: vw * 90,
          }}>
          <View style={styles.rightContainer}>
            <AppText style={styles.textStyle}>
              National Suicide Prevention Hotline:
            </AppText>
            <AppText style={[styles.phoneTxt, {width: vw * 28}]}>
              800-273-8255
            </AppText>
          </View>
          <View style={styles.centerContainer}>
            <AppText style={styles.textStyle}>or text "HOME" to :</AppText>
            <AppText style={[styles.phoneTxt, {width: vw * 15}]}>
              741741
            </AppText>
          </View>
          <View style={styles.rightContainer}>
            <AppText style={styles.textStyle}>Substance Use Disorders:</AppText>
            <AppText style={[styles.phoneTxt, {width: vw * 25}]}>
              800-662-4357
            </AppText>
          </View>
        </View>

        <AppButton
          text="I could be better"
          buttonStyle={styles.betterbtnStyle}
        />
        <AppText style={styles.textStyle}>I am not really sure</AppText>

        <AppButton
          text="I am pretty good today"
          buttonStyle={[
            styles.betterbtnStyle,
            {backgroundColor: colors.greenColor},
          ]}
        />
        <AppText style={styles.textStyle}>How can I feel even better</AppText>
        <View style={styles.bottomContainer}>
          <AppText
            style={[styles.headingTxtStyle, {marginVertical: vh * 3}]}
            weight="Bold">
            Scroll down to see even more Help Lines.
          </AppText>
        </View>
        <View style={styles.crisisInterventionStyle}>
          <AppText style={styles.headingTxtStyle} weight="Bold">
            Crisis Intervention / Help Line Numbers
          </AppText>
          <AppText style={styles.textStyle}>
            A special
            <AppText
              style={[
                styles.textStyle,
                {color: colors.black, fontWeight: 'bold'},
              ]}>
              {' '}
              Teen Lifeline{' '}
            </AppText>
            is also available in Arizona as a free, confidential 24/7 service
            for children or teens who can talk to a peer teen counselor
          </AppText>
          <AppText style={styles.highlightedNumberStyle} weight="Bold">
            602.248.8336 (TEEN) or 800.248.8336
          </AppText>
          <AppText style={styles.textStyle}>
            Trained peer teen counselors take calls from 3pm to 9pm every day of
            the week. At all other times, calls are answered by specially
            trained crisis intervention specialists. Additionally, TEXT MESSAGES
            are accepted from noon to 9pm weekdays, and 3-9pm on weekends.
          </AppText>
        </View>
        <View style={styles.helpContainer}>
          <AppText style={styles.headingTxtStyle} weight="Bold">
            Here are other Help Lines
          </AppText>
          {renderBullets(helpLine)}
        </View>
        <View style={styles.servicesContainer}>
          <AppText style={styles.headingTxtStyle}>
            Essential and local community services
          </AppText>
          <AppText style={styles.highlightedNumberStyle}>211</AppText>
        </View>
        <View style={styles.communityServiceStyle}>
          <AppText style={styles.headingTxtStyle}>LGBTQIA+ Community</AppText>
          {renderBullets(communityData)}
        </View>
        <View style={styles.moreHelpLineContainer}>
          <AppText style={styles.headingTxtStyle}>Even more Help Lines</AppText>
          <AppText style={styles.textStyle}>
            The
            <AppText style={[styles.textStyle, {color: colors.greenColor}]}>
              {' '}
              HelpGuide (HelpGuide.org){' '}
            </AppText>
            is a non-profit guide to mental illness and wellness. Their
            Directory of International Mental Health Helplines includes numbers
            for numerous diverse categories in addition to those listed above:
            Abuse and Domestic Violence, Addiction, ADHD, Alzheimer’s and
            Dementia, Autism, Caregiving, Eating Disorders, Mental Health,
            LGBTQ+, Parenting, Teens and Veterans.
          </AppText>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;

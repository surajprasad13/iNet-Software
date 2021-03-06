import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button, Icon, Input, SocialIcon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Subtitle, Title} from '../components';
import {theme} from '../constants';

const {width} = Dimensions.get('window');

const About = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Title>The iNet Software</Title>
          <Subtitle style={{color: theme.COLORS.GRAY, marginTop: 10}}>
            PHJY iNet Software is indian software services and product base
            company. Head Office in Delhi(INDIA) and Global Office in
            Maryland(US) and Breackfiled (Malaysia).
          </Subtitle>
          <Subtitle style={{color: theme.COLORS.GRAY, marginTop: 10}}>
            Our development domain like ERP,CMS,CRM and AWS Cloud with java
            ,python , Games industries with whole full stack tools and offering
            services in Cloud computing and ERP industries.
          </Subtitle>
        </View>
        <View style={styles.card}>
          <Input
            placeholder="Your Name"
            leftIcon={
              <Icon name="user" type="antdesign" size={20} color="purple" />
            }
          />
          <Input
            placeholder="Email"
            leftIcon={
              <Icon name="mail" type="antdesign" size={20} color="purple" />
            }
          />
          <Button
            title="Send"
            type="solid"
            buttonStyle={{
              backgroundColor: theme.COLORS.BUTTON,
              width: width / 2,
            }}
          />
        </View>
        <View style={styles.section}>
          <Title>Sales Office</Title>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>
              Plot No-A-40, Office No-305,3rd floor
            </Text>
            <Text style={styles.text}>Near Electronic City Metro Station</Text>
            <Text style={styles.text}>Sector-62 Noida - 201309 </Text>
            <Text style={styles.text}>info@inetsoftware.org</Text>
            <Text style={styles.text}>+91 9999487949 / 9968833089</Text>
            <Text style={styles.text}>www.inetsoftware.org</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Title>Connect With us</Title>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <SocialIcon type="facebook" />
            <SocialIcon type="twitter" />
            <SocialIcon type="instagram" />
            <View
              style={{
                backgroundColor: 'green',
                width: 50,
                height: 50,
                borderRadius:50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="whatsapp" type="fontisto" size={25} color="white" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    marginTop: 20,
    padding: 15,
  },
  text: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    margin: 5,
    color: theme.COLORS.GRAY,
  },
  card: {
    margin: 10,
    padding: 15,
    borderWidth: .6,
    borderRadius: 15,
    shadowColor: 'gray',
    borderColor: "white",
    elevation: 2,
  },
});

export default About;

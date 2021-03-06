import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {theme} from '../constants';

const {width} = Dimensions.get('window');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <Image
          source={require('../assets/images/inet.png')}
          resizeMode={'contain'}
          style={{width: width - 20, height: 100}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.COLORS.PRIMARY,
  },
});

export default Splash;

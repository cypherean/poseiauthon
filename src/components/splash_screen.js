/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      showScreen();
    }, 2500);
  }, []);

  async function showScreen() {
    Actions.home();
  }

  return (
    <View
      style={[
        {flex: 1},
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
        {
          backgroundColor: '#4F378B',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/BigLogo.png')} />
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          Pramaan POS
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            width: 500,
            height: 500,
            borderRadius: 250,
            backgroundColor: 'white',
            position: 'relative',
          }}>
          <View
            style={{
              paddingTop: 50,
            }}>
            <Image
              source={require('../assets/aadharLogo.png')}
              style={{
                width: 160,
                height: 100,
                resizeMode: 'stretch',
                // position: 'relative',
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default SplashScreen;

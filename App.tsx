/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback, useEffect } from 'react';
import { OtplessModule } from 'otpless-react-native';
import { View, Text, Linking, Alert, TouchableHighlight } from 'react-native';
import API from "axios";
 
const App = () => {



  const handlePress = useCallback(async () => {
    console.log('handle press called ', 'sandeepprajapati92087.authlink.me?redirectUri=sandeepprajapati92087otpless');
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL('sandeepprajapati92087.authlink.me?redirectUri=sandeepprajapati92087otpless');
  
    if (supported) {
      await Linking.openURL('sandeepprajapati92087.authlink.me?redirectUri=sandeepprajapati92087otpless');
    } else {
      Alert.alert(`Don't know how to open this URL: ${'sandeepprajapati92087.authlink.me?redirectUri=sandeepprajapati92087otpless'}`);
    }
  }, ['sandeepprajapati92087.authlink.me?redirectUri=sandeepprajapati92087otpless']);


  const handleDeepLink = async url => {
    console.log(url);
  };

  useEffect(() => {
    const linkingEvent = Linking.addEventListener('url', handleDeepLink);
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink({url});
      }
    });
    return () => {
      linkingEvent.remove();
    };
  }, [handleDeepLink]);
  

  async function getWhatsAppLoggedInUserDetails(waId) {
    const body = {
        waId: waId,
    }

    const res = await API.post('https://sandeepprajapati92087.authlink.me', body, { 
        headers: {'clientId': 'test1234', 
        'clientSecret': 'test1234', 
        'Content-Type': 'application/json'}
      },
    );
  return res.data;
}

// export {
//     getWhatsAppLoggedInUserDetails,
// };

  return (
    <TouchableHighlight
      style={{
        paddingVertical: 20,
        backgroundColor: '#000',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 16,
        top: "50%",
      }}
      onPress={handlePress}
      underlayColor="grey">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            marginStart: 4,
            textTransform: 'none',
            color: 'white',
          }}>
          Log in with WhatsApp
        </Text>
      </View>
    </TouchableHighlight>
  );
};



export default App;



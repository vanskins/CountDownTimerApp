/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 90, fontWeight: '900'}}>12</Text>
            <View style={{height: 10, width: 140, backgroundColor: 'black'}} />
            <Text style={{fontSize: 20, fontWeight: '900'}}>HOURS</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 90, fontWeight: '900'}}>05</Text>
            <View style={{height: 10, width: 140, backgroundColor: 'black'}} />
            <Text style={{fontSize: 20, fontWeight: '900'}}>MINUTES</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 90, fontWeight: '900'}}>00</Text>
            <View style={{height: 10, width: 140, backgroundColor: 'black'}} />
            <Text style={{fontSize: 20, fontWeight: '900'}}>SECONDS</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              flexGrow: 1,
            }}>
            <Text
              style={{
                fontSize: 60,
                fontWeight: '900',
                transform: [
                  {rotate: '90deg'},
                  {translateX: 250},
                  {translateY: 130},
                ],
                width: 550,
                letterSpacing: 5,
              }}>
              COUNTDOWN
            </Text>
            <Text
              style={{
                fontSize: 60,
                fontWeight: '700',
                transform: [
                  {rotate: '90deg'},
                  {translateX: 180},
                  {translateY: 185},
                ],
                width: 550,
                letterSpacing: 5,
              }}>
              TIMER
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: 'underline',
                    fontWeight: '600',
                    letterSpacing: 1,
                    margin: 5,
                  }}>
                  PAUSE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: 'underline',
                    fontWeight: '600',
                    letterSpacing: 1,
                    margin: 5,
                  }}>
                  STOP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: 'underline',
                    fontWeight: '600',
                    letterSpacing: 1,
                    margin: 5,
                  }}>
                  RESTART
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

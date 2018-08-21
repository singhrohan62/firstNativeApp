import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let icon = {uri:'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png'}
    return (
      <View style={styles.container}>
      <Image source={icon} style={{width:190,height:160}}/>
        <Text style={[styles.headerStyle, styles.textColor]}>Rohan Singh</Text>
        <Text style={[styles.subHeaderStyle, styles.textColor]}>Welcome to my first React-Native app</Text>
        <Text style={styles.textColor}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19324c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color:"#fff",
  },
  headerStyle: {
    fontSize:30,
  },
  subHeaderStyle: {
    fontSize:20,
  },
});

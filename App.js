import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';   One of the other ways to use vector-icons
import { SocialIcon } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    let icon = {uri:'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png'}
    return (
      <ScrollView >
      <View style={styles.container}>
      <Image source={icon} style={{width:190,height:160}}/>
        <Text style={[styles.headerStyle, styles.textColor]}>Rohan Singh</Text>
        <Text style={[styles.subHeaderStyle, styles.textColor]}>Welcome to my first React-Native app</Text>
        <Text style={styles.textColor}>I know its a kind of boring app, but its the first one, therefore it is excused for now.</Text>
        <Text style={styles.textColor}>Click on anyone of the given below social media icons to know more about me.....</Text>
        <Text style={[styles.subHeaderStyle, styles.textColor]}>Here are some of the platforms I use</Text>
        <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
              <SocialIcon type='facebook'/>
              <SocialIcon type='github'/>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#19324c',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#19324c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:80,
  },
  textColor: {
    color:"#fff",
    paddingTop: 22,
  },
  headerStyle: {
    fontSize:30,
    paddingTop:30,
  },
  subHeaderStyle: {
    fontSize:20,
    paddingTop:20,
  },
});

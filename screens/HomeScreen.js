import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SwiperFlame} from '../components/Swiper'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <SafeAreaView style={styles.wraper}>
        <View style={styles.swiper}> 
          <Text style={styles.titleH}>Travel</Text> 
          <SwiperFlame />   
        </View>
        <View style={styles.content}> 
          <Text style={styles.titleH}>Content</Text>  
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  wraper: {
    flex: 1,
  },
  swiper: {
    padding: 20,
    flex: 2,
  },
  titleH:{
    fontWeight: 'bold',
    lineHeight: 37,
    fontSize: 28,
  },
  content: {
    flex: 3,
  }
})

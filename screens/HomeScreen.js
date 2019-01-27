import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SwiperFlame } from '../components/Swiper'
import { ListPosts } from '../components/Post'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <ScrollView
        style={styles.wraper}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.swiper}>
          <Text style={styles.topTitle}>Travel</Text>
          <SwiperFlame />
        </View>
        <View style={styles.contentTravel}>
          <ListPosts />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wraper: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  swiper: {
    height: 380,
    paddingBottom: 25,
    paddingTop: 25,
  },
  topTitle: {
    color: '#24253D',
    fontWeight: 'bold',
    lineHeight: 37,
    fontSize: 28,
    paddingLeft: 25,
    paddingBottom: 20,
    fontFamily: 'Playfair Display',
  },
  contentTravel: {
    paddingLeft: 15,
  },
})

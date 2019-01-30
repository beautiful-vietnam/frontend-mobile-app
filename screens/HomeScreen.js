import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SwiperFlame } from '../components/Swiper'
import { ListPosts } from '../components/Post'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Home',
  }

  render() {
    return (
      <View style={styles.wraper}>
        <View>
          <Text style={styles.topTitle}>Travel</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={styles.swiper}>
            <SwiperFlame navigation={this.props.navigation} />
          </View>
          <View style={styles.contentTravel}>
            <ListPosts navigation={this.props.navigation} />
          </View>
        </ScrollView>
      </View>
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
    height: 320,
    paddingBottom: 25,
    paddingTop: 15,
  },
  topTitle: {
    color: '#24253D',
    fontWeight: 'bold',
    lineHeight: 37,
    fontSize: 28,
    marginLeft: 25,
    paddingTop: 25,
    paddingBottom: 10,
    fontFamily: 'Playfair Display',
  },
  contentTravel: {
    paddingLeft: 15,
    paddingRight: 10,
  },
})

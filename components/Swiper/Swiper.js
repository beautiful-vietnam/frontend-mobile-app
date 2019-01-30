import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'

export class SwiperFlame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHome: [
        {
          title: 'Trip to Sapa',
          content: 'rule of jungle',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          location: 'Bali, Indonesia',
          date: 'Octobe 21, 2018',
        },
        {
          title: 'Trip to Sapa',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/24/Sea.png',
          location: 'Bali, Indonesia',
          date: 'Octobe 21, 2018',
        },
        {
          title: 'Trip to Ha Noi',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          location: 'Bali, Indonesia',
          date: 'Octobe 21, 2018',
        },
        {
          title: 'Trip to bacode',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          location: 'Bali, Indonesia',
          date: 'Octobe 21, 2018',
        },
      ],
    }
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        loop
        autoplay
        autoplayTimeout={5}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        {this.state.dataHome.map(item => (
          <TouchableWithoutFeedback style={styles.touch} key={item.link}>
            <View style={styles.slide}>
              <Image style={styles.image} source={{ uri: item.link }} />
              <View style={styles.contentWraper}>
                <Text style={styles.contentTitle}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
              </View>
              <View style={styles.desWraper}>
                <Text style={styles.textLocation}>{item.location}</Text>
                <Text style={styles.textDate}>{item.date}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    marginRight: 25,
    marginLeft: 25,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 20,
  },
  contentWraper: {
    position: 'absolute',
    top: 50,
    left: 50,
    right: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    color: '#FFFFFF',
    lineHeight: 40,
    fontSize: 30,
    letterSpacing: 0.255,
    fontWeight: 'bold',
    fontFamily: 'Playfair Display',
  },
  content: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  touch: {
    flex: 1,
  },
  activeDot: {
    backgroundColor: '#FD5739',
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 60,
  },
  dot: {
    backgroundColor: '#E0E0E1',
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 60,
  },
  textLocation: {
    color: '#484848',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDate: {
    color: '#484848',
    fontSize: 14,
  },
})

export default SwiperFlame

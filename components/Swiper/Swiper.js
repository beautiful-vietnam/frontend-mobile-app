import React, { Component }  from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'


export class SwiperFlame extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataHome: [
        {
          id: 1,
          title: 'Trip to home',
          content: 'rule of jungle',
          link: 'https://nhadatnhanh.vn/upload/news/m-a-bat-dong-san-ngay-cang-than-thien-37984.jpg',
        }, 
        {
          id: 2,
          title: 'Trip to Sapa',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
        },
        {
          id: 3,
          title: 'Trip to Ha Noi',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
        },
        {
          id: 4,
          title: 'Trip to bacode',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
        }
      ]
    }
  }

  render() {
    return (
      <Swiper style={styles.wrapper} 
        loop={true}
        autoplay={true}
        autoplayTimeout={5}
        dot = {<View style={{backgroundColor: '#E0E0E1', width: 10, height: 10,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 30,}} />}
        activeDot = {<View style={{backgroundColor: '#FD5739', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 30,}} />}
        >
        {
          this.state.dataHome.map((item, i) => 
          <View key={i} style={styles.slide}>
            <Image style={styles.image} source={{ uri: item.link }} />
            <View style={styles.contentWraper}>
              <Text style={styles.contentTitle}>{ item.title }</Text>
              <Text style={styles.content}>{ item.content }</Text>
            </View>
          </View>
        )}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200
  },
  slide: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  contentWraper: {
    position: 'absolute',
    top: 70,
    left: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    color: '#FFFFFF',
    lineHeight: 40,
    fontSize: 30,
    letterSpacing: 0.255,
    fontWeight: 'bold',
  },
  content: {
    color: '#FFFFFF',
    fontSize: 17,
  }
})

export default SwiperFlame
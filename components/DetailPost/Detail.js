import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating'

const { width } = Dimensions.get('window')

export class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataPost: {
        title: 'Trip to Rome',
        content: 'a journey into the past',
        cover: 'https://uphinhnhanh.com/images/2019/01/29/Rectangle.png',
        caption: 'Capital of Roman Empire',
        content1:
          "Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.",
        content2:
          "The city's early population originated from a mix of Latins, Etruscans and Sabines. Eventually, the city successively became the capital of the Roman Kingdom, the Roman Republic and the Roman Empire, and is regarded as one of the birthplaces of Western civilisation and by some…",
        image: 'https://uphinhnhanh.com/images/2019/01/29/map.png',
        rating: 4,
      },
    }
  }

  render() {
    const item = this.state.dataPost
    return (
      <View style={styles.wrapAllDetail}>
        <View style={styles.wrapCover}>
          <Image style={styles.image} source={{ uri: item.cover }} />
          <View style={styles.contentCover}>
            <Text style={styles.contentTitle}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <StarRating
              disabled
              fullStarColor="#FDC60A"
              emptyStarColor="rgba(36, 37, 61, 0.5)"
              maxStars={5}
              rating={item.rating}
              starSize={20}
              starStyle={styles.rating}
            />
          </View>
        </View>
        <View style={styles.wrapPost}>
          <View style={styles.caption}>
            <Text style={styles.textCaption}>{item.caption}</Text>
          </View>
          <View style={styles.wrapContent1}>
            <Text style={styles.textContent1}>{item.content1}</Text>
          </View>
          <View style={styles.wrapContent2}>
            <Text style={styles.textContent2}>{item.content2}</Text>
          </View>
          <View style={styles.wrapImagePost}>
            <Image style={styles.imagePost} source={{ uri: item.image }} />
          </View>
          <View style={styles.wrapContent1}>
            <Text style={styles.textContent1}>{item.content1}</Text>
          </View>
          <View style={styles.wrapContent2}>
            <Text style={styles.textContent2}>{item.content2}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapAllDetail: {
    flex: 1,
  },
  wrapCover: {
    flex: 1,
  },
  image: {
    flex: 1,
    width,
    height: 220,
    resizeMode: 'cover',
  },
  contentCover: {
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
  wrapContent1: {
    paddingTop: 35,
  },
  wrapContent2: {
    paddingTop: 20,
    paddingBottom: 25,
  },
  textContent1: {
    fontSize: 13,
    color: '#24253D',
  },
  textContent2: {
    fontSize: 13,
    color: '#24253D',
  },
  rating: {
    top: 50,
  },
  wrapPost: {
    padding: 25,
  },
  textCaption: {
    paddingTop: 5,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    letterSpacing: 0.1445,
    color: '#24253D',
  },
  imagePost: {
    width: width - 50,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
})

export default Detail

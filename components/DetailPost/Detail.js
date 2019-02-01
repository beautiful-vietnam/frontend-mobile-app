import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating'
import HTMLView from 'react-native-htmlview'
import axios from 'axios'

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
        dataArticle: null,
        rating: 4,
      },
    }
  }

  componentDidMount() {
    axios
      .get(`https://travel-app.000webhostapp.com/wp-json/wp/v2/posts?_embed&posts=19`)
      .then(result => {
        this.setState({
          dataArticle: result.data[0],
        })
      })
  }

  convertDate = data => {
    const date = new Date(data)
    const indexTime = date.toString().indexOf(':') - 2
    const dateConverted = date.toUTCString().substring(0, indexTime)
    return <Text>{dateConverted}</Text>
  }

  // eslint-disable-next-line class-methods-use-this
  renderNode(node) {
    if (node.name === 'img') {
      const a = node.attribs
      return <Image key={node} style={{ width: 350, height: 250 }} source={{ uri: a.src }} />
    }
  }

  render() {
    if (this.state.dataArticle) {
      const item = this.state.dataPost
      const contentFormat = this.state.dataArticle.content.rendered.replace(/\n\n\n\n/g, '\n')
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
              <Text style={styles.textCaption}>{this.state.dataArticle.title.rendered}</Text>
            </View>
            <View style={styles.wrapContent1}>
              <HTMLView value={contentFormat} renderNode={this.renderNode} />
            </View>
          </View>
        </View>
      )
    } else {
      return null
    }
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
  textContent1: {
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

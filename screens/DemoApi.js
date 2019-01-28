import React from 'react'
import axios from 'axios'
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listArticle: null,
    }
  }

  getListArticle() {
    axios
      .get(`https://travel-app.000webhostapp.com/wp-json/wp/v2/posts?_embed&categories=5`)
      .then(result => {
        this.setState({
          listArticle: result.data,
        })
      })
  }

  convertHTMLtoText = data => {
    let excerpt = data.replace('<p>', '')
    excerpt = excerpt.replace('</p>', '...')
    return <Text>{excerpt}</Text>
  }

  convertDate = data => {
    const date = new Date(data)
    const indexTime = date.toString().indexOf(':') - 2
    const dateConverted = date.toUTCString().substring(0, indexTime)
    return <Text>{dateConverted}</Text>
  }

  showTitle() {
    if (this.state.listArticle) {
      return this.state.listArticle.map((value, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <View key={key}>
          <Text>{value.title.rendered}</Text>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={{ uri: value._embedded['wp:featuredmedia'][0].source_url }}
          />
          <Text>{value._embedded['wp:term'][0][0].name}</Text>
          {this.convertDate(value.date)}
          {this.convertHTMLtoText(value.excerpt.rendered)}
        </View>
      ))
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={styles.container}>{this.showTitle()}</ScrollView>
        <Button title="Show API" onPress={() => this.getListArticle()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 250,
    flex: 1,
    width: null,
  },
})

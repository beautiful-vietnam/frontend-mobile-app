import React from 'react'
import axios from 'axios'
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native'
import HTMLView from 'react-native-htmlview'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listArticle: null,
    }
  }

  getListArticle() {
    axios
      .get(`https://travel-app.000webhostapp.com/wp-json/wp/v2/posts?categories=2`)
      .then(result => {
        this.setState({
          listArticle: result.data,
        })
      })
  }

  showTitle() {
    if (this.state.listArticle) {
      return this.state.listArticle.map((value, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <View key={key}>
          <Text>{value.title.rendered}</Text>
          <HTMLView value={value.content.rendered} renderNode={this.renderNode} />
        </View>
      ))
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderNode(node) {
    if (node.name === 'img') {
      const a = node.attribs
      return <Image style={{ width: 400, height: 250 }} source={{ uri: a.src }} />
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Demo api</Text>
        <ScrollView style={styles.container}>{this.showTitle()}</ScrollView>
        <Button title="Show API" onPress={this.getListArticle()} />
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
})

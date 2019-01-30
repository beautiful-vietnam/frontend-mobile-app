import React from 'react'
import axios from 'axios'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import HTMLView from 'react-native-htmlview'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataArticle: null,
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

  showContent() {
    if (this.state.dataArticle) {
      const contentFormat = this.state.dataArticle.content.rendered.replace(/\n\n\n\n/g, '\n')
      return (
        <View>
          <Text>{this.state.dataArticle.title.rendered}</Text>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={{ uri: this.state.dataArticle._embedded['wp:featuredmedia'][0].source_url }}
          />
          <Text>{this.state.dataArticle._embedded['wp:term'][0][0].name}</Text>
          {this.convertDate(this.state.dataArticle.date)}
          <HTMLView value={contentFormat} renderNode={this.renderNode} />
        </View>
      )
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderNode(node) {
    if (node.name === 'img') {
      const a = node.attribs
      return <Image key={node} style={{ width: 400, height: 250 }} source={{ uri: a.src }} />
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={styles.container}>{this.showContent()}</ScrollView>
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

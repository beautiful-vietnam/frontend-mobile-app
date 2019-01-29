import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import axios from 'axios'
import SectionContent from './SectionContent'

export class ListPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category1: {
        title: 'Cẩm nang du lịch',
        description: 'Chia sẻ các địa điểm du lịch và kinh nghiệm đi du lịch tại Việt Nam',
        data: [],
      },
      category2: {
        title: 'Mẹo đi du lịch',
        description: 'Các mẹo, tips dành cho người nước ngoài khi du lịch tại Việt Nam',
        data: [],
      },
    }
  }

  componentDidMount() {
    axios
      .get(`https://travel-app.000webhostapp.com/wp-json/wp/v2/posts?_embed&categories=5`)
      .then(result => {
        this.setState(preState => ({
          category1: {
            ...preState.category1,
            data: result.data,
          },
        }))
      })
    axios
      .get(`https://travel-app.000webhostapp.com/wp-json/wp/v2/posts?_embed&categories=3`)
      .then(result => {
        this.setState(preState => ({
          category2: {
            ...preState.category2,
            data: result.data,
          },
        }))
      })
  }

  render() {
    const { category1 } = this.state
    const { category2 } = this.state
    const { navigation } = this.props
    return (
      <View style={styles.wrapAll}>
        <View style={styles.wraperCate}>
          <SectionContent dataCate={category1} navigation={navigation} />
        </View>
        <View style={styles.wraperCate}>
          <SectionContent dataCate={category2} navigation={navigation} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapAll: {
    fontWeight: 'bold',
  },
  wraperCate: {
    paddingBottom: 50,
  },
})

export default ListPosts

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import SectionContent from './SectionContent'

export class ListPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category1: {
        title: "Flame's trip with anne ",
        description: 'Bacodekiller ft Flame',
        data: [
          {
            id: 1,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/24/Sea.png',
          },
          {
            id: 2,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          },
          {
            id: 3,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          },
          {
            id: 4,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          },
        ],
      },
      category2: {
        id: 1,
        title: 'My trip with Hồng Vân',
        description: 'Nhoc ANNE FT Flame',
        data: [
          {
            id: 1,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/24/Sea.png',
          },
          {
            id: 2,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          },
          {
            id: 3,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          },
          {
            id: 4,
            location: 'Bali, Indonesia',
            date: 'Octobe 21, 2018',
            link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          },
        ],
      },
    }
  }

  render() {
    const { category1 } = this.state
    const { category2 } = this.state
    return (
      <View style={styles.wrapAll}>
        <View style={styles.wraperCate1}>
          <SectionContent dataCate={category1} />
        </View>
        <View style={styles.wraperCate2}>
          <SectionContent dataCate={category2} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapAll: {
    fontWeight: 'bold',
  },
  wraperCate1: {
    paddingBottom: 50,
  },
})

export default ListPosts

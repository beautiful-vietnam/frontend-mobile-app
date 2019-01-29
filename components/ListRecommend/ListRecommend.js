import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import FlatListItem from './FlatListItem'

export class ListRecommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHome: [
        {
          key: '1',
          title: 'Trip to Sapa',
          content: 'rule of jungle',
          link: 'https://uphinhnhanh.com/images/2019/01/24/Sea.png',
          location: 'Bali, Indonesia',
          date: 'Octobe 21, 2018',
          starCount: 3,
        },
        {
          key: '2',
          title: 'Trip to Sapa',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          location: 'Bali, Indonesia',
          date: 'Octobe 21, 2018',
          starCount: 4,
        },
        {
          key: '3',
          title: 'Trip to Ha Noi',
          content: 'rule of Flame',
          link: 'https://uphinhnhanh.com/images/2019/01/23/trip.png',
          location: 'Bali, Indonesia',
          date: 'Octobe 21, 2018',
          starCount: 5,
        },
      ],
    }
  }

  _onPress = () => {
    alert('work!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.packName}>Packing List Recommendations </Text>
        <View>
          <FlatList
            data={this.state.dataHome}
            renderItem={({ item, index }) => <FlatListItem item={item} index={index} />}
          />
        </View>
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.btnShow}>
            <Text style={styles.btnShowTxt}>Show more</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  packName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  btnShow: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
    height: 50,
    borderRadius: 4,
    borderColor: '#3A71F6',
    borderWidth: 1,
  },
  btnShowTxt: {
    color: '#3A71F6',
    fontSize: 14,
    fontWeight: '500',
  },
})

export default ListRecommend

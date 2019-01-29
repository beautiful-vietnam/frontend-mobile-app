import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native'
import StarRating from 'react-native-star-rating'

class FlatListItem extends Component {
  render() {
    return (
      <TouchableWithoutFeedback key={this.props.item.link}>
        <View style={styles.aItem}>
          <Image style={styles.picture} source={{ uri: this.props.item.link }} />
          <View style={styles.description}>
            <Text>{this.props.item.title}</Text>
            <Text style={styles.subTitle}>{this.props.item.location}</Text>
            <StarRating
              disabled={false}
              fullStarColor="#F8E71C"
              maxStars={5}
              rating={this.props.item.starCount}
              starSize={20}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  aItem: {
    backgroundColor: '#FDFDFD',
    borderRadius: 4,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
  },
  picture: {
    height: 80,
    width: 110,
    borderRadius: 4,
    marginRight: 10,
  },
  description: {
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  subTitle: {
    marginBottom: 10,
    fontSize: 12,
    color: '#484848',
  },
})

export default FlatListItem

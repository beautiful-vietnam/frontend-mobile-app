import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import StarRating from 'react-native-star-rating'

const FlatListItem = ({ item, navigation }) => {
  const styles = {
    aItem: {
      backgroundColor: '#FDFDFD',
      borderRadius: 4,
      borderColor: '#EFEFEF',
      borderWidth: 1,
      marginBottom: 10,
      flexDirection: 'row',
    },
    wrapPic: {
      marginRight: 10,
      width: 110,
      height: 80,
      borderBottomLeftRadius: 4,
      borderTopLeftRadius: 4,
      overflow: 'hidden',
    },
    picture: {
      height: 80,
      width: 110,
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
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('DetailPostRecommend', {
          id: item.key,
        })
      }}
    >
      <View style={styles.aItem}>
        <View style={styles.wrapPic}>
          <Image style={styles.picture} source={{ uri: item.link }} />
        </View>

        <View style={styles.description}>
          <Text>{item.title}</Text>
          <Text style={styles.subTitle}>{item.location}</Text>
          <StarRating
            disabled={false}
            fullStarColor="#F8E71C"
            maxStars={5}
            rating={item.starCount}
            starSize={20}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default FlatListItem

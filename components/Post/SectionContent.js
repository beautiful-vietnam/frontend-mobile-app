import React from 'react'
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')

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

const SectionContent = ({ dataCate, navigation }) => {
  const styles = {
    wrapTitleCate: {
      paddingLeft: 10,
      marginBottom: 20,
      paddingRight: 10,
    },
    titleCate: {
      color: '#484848',
      fontSize: 20,
      fontWeight: 'bold',
    },
    desCate: {
      color: '#484848',
      fontSize: 16,
    },
    image: {
      width: width - 80,
      height: 200,
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 20,
    },
    lists: {
      paddingLeft: 8,
      paddingRight: 15,
    },
    textLocation: {
      color: '#484848',
      fontSize: 18,
      fontWeight: 'bold',
    },
    textDate: {
      color: '#484848',
      fontSize: 14,
    },
    wrapDes: {
      width: width - 100,
    },
  }
  return (
    <View style={styles.wrapSection}>
      <View style={styles.wrapTitleCate}>
        <Text style={styles.titleCate}>{dataCate.title}</Text>
        <Text style={styles.desCate}>{dataCate.description}</Text>
      </View>
      <FlatList
        data={dataCate.data}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.lists}>
            <TouchableWithoutFeedback>
              <Image
                style={styles.image}
                source={{ uri: item._embedded['wp:featuredmedia'][0].source_url }}
              />
            </TouchableWithoutFeedback>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailPost', {
                  id: item.id,
                })
              }}
            >
              <View style={styles.wrapDes}>
                <Text style={styles.textLocation}>{item.title.rendered}</Text>
                <Text style={styles.textDate}>{convertDate(item.date)}</Text>
                <Text style={styles.desCate}>{convertHTMLtoText(item.excerpt.rendered)}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default SectionContent

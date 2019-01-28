import React from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

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

const SectionContent = dataCate => {
  const styles = {
    wrapTitleCate: {
      paddingLeft: 10,
      marginBottom: 20,
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
      width: 300,
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
  }
  return (
    <View style={styles.wrapSection}>
      <View style={styles.wrapTitleCate}>
        <Text style={styles.titleCate}>{dataCate.dataCate.title}</Text>
        <Text style={styles.desCate}>{dataCate.dataCate.description}</Text>
      </View>
      <FlatList
        data={dataCate.dataCate.data}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.lists}>
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={{ uri: item._embedded['wp:featuredmedia'][0].source_url }}
              />
            </TouchableOpacity>
            <Text style={styles.textLocation}>{item.title.rendered}</Text>
            {convertDate(item.date)}
            {convertHTMLtoText(item.excerpt.rendered)}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default SectionContent

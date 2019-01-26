import React from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

const SectionContent = dataCate => {
  const styles = {
    wrapTitleCate: {
      paddingLeft: 10,
      marginBottom: 20,
    },
    titleCate: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    desCate: {
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
      paddingLeft: 10,
    },
    textLocation: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    textDate: {
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
              <Image style={styles.image} source={{ uri: item.link }} />
            </TouchableOpacity>
            <Text style={styles.textLocation}>{item.location}</Text>
            <Text style={styles.textDate}>{item.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default SectionContent

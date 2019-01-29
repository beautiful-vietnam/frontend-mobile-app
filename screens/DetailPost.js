import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Detail } from '../components/DetailPost'

export default class DetailPost extends React.Component {
  render() {
    const { navigation } = this.props
    const id = navigation.getParam('id')
    return (
      <View style={styles.wrapAll}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={styles.wrapDetail}>
            <Detail idpost={id} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapAll: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

import React from 'react'
import { Text, View } from 'react-native'

export default class DetailPost extends React.Component {
  render() {
    const { navigation } = this.props
    const id = navigation.getParam('id')
    return (
      <View>
        <Text>Details</Text>
        <Text>Id: {JSON.stringify(id)}</Text>
      </View>
    )
  }
}

import React from 'react'
import { ScrollView, StyleSheet, Button } from 'react-native'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Test',
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title="Đăng nhập" onPress={() => this.props.navigation.navigate('SignIn')} />
        <Button title="Đăng ký" onPress={() => this.props.navigation.navigate('SignUp')} />
        <Button title="My Profile" onPress={() => this.props.navigation.navigate('Profile')} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})

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
        <Button title="Demo API" onPress={() => this.props.navigation.navigate('DemoApi')} />
        <Button
          title="list Recommend"
          onPress={() => this.props.navigation.navigate('recommend')}
        />
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

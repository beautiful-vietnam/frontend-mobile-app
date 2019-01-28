import React from 'react'
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  _onPressButton = () => {
    alert(`${this.state.email}-${this.state.password}`)
  }

  onChangeEmail = email => {
    this.setState({ email })
  }

  onChangePassword = password => {
    this.setState({ password })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Text style={styles.title}>Sign in</Text>
          <View>
            <TextInput
              style={styles.inputText}
              placeholder="Email Address"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText={this.onChangeEmail}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
              secureTextEntry
              onChangeText={this.onChangePassword}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={this._onPressButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
          <View>
            <Button
              style={styles.forgotBtn}
              onPress={() => this.props.navigation.navigate('Repass')}
              title="Forgot your password?"
              color="#24253D"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginTop: 20,
    marginBottom: 13,
  },
  inputText: {
    height: 56,
    borderRadius: 8,
    padding: 8,
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    fontSize: 15,
  },
  loginBtn: {
    height: 56,
    borderRadius: 100,
    backgroundColor: '#FD5739',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  forgotBtn: {
    flex: 1,
    alignItems: 'center',
  },
})

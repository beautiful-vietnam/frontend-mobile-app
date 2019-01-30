import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  _onPressButton = () => {
    alert(`${this.state.name}-${this.state.email}-${this.state.password}`)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Text style={styles.title}>Create new account</Text>
          <View>
            <TextInput
              style={styles.inputText}
              onPress={this._onPressButton}
              placeholder="Name"
              returnKeyType="next"
              onSubmitEditing={() => this.emailInput.focus()}
              onChangeText={value => {
                this.setState({ name: value })
              }}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Email Address"
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.emailInput = input)}
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText={value => {
                this.setState({ email: value })
              }}
            />
            <TextInput
              style={styles.inputText}
              onPress={this._onPressButton}
              placeholder="Password"
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
              secureTextEntry
              onChangeText={value => {
                this.setState({ password: value })
              }}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={this._onPressButton}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
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
})

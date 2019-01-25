import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  _onPressButton = () => {
    alert(`${this.state.email}-`)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Text style={styles.title}>Reset password</Text>
          <View>
            <TextInput
              style={styles.inputText}
              placeholder="Email Address"
              keyboardType="email-address"
              returnKeyType="go"
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText={value => {
                this.setState({ email: value })
              }}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={this._onPressButton}>
            <Text style={styles.loginText}>Reset your password</Text>
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
  forgotBtn: {
    flex: 1,
    alignItems: 'center',
  },
})

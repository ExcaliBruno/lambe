import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/user";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'

class Login extends Component {
    state ={
        name: 'Temporario',
        email: '',
        password: ''
    }

    login = () => {
         this.props.onLogin({...this.state}) 
         if (this.props.onLoginSuccess) {
            this.props.onLoginSuccess(); // Isso vai chamar setIsLoggedIn(true)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus= {true} keyboardType='email-address'
                    value ={this.state.email} onChangeText={email => this.setState({ email })} 
                />
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({password})}
                />
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.textButton}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.button}>
                    <Text style={styles.textButton}>
                        Criar nova conta...
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        marginTop: 30,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin : user => dispatch(login(user))
    }
}

//export default Login

export default connect(null, mapDispatchToProps)(Login)
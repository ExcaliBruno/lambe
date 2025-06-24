import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'

class Login extends Component {
    state ={
        emai: '',
        password: ''
    }

    login = () => {
         this.props.onLogin() // Isso troca o estado e redireciona para AppTabs
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus= {true} keyboardType='email-address'
                    value ={this.state.emai} onChangeText={email => this.setState({ email })} 
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
                <TouchableOpacity onPress={() => {}} style={styles.button}>
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
        margintop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})

export default Login
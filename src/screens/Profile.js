import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Avatar } from "@kolking/react-native-avatar";

class Profile extends Component {
    logout = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <Avatar size={150} radius={75} style={styles.avatar}/>
                <Text style={styles.nickname}>
                    Fulano de Tal
                </Text>
                <Text style={styles.email}>
                    fulanodetal@gmail.com
                </Text>
                <TouchableOpacity onPress={this.logout} style={styles.button }>
                    <Text style={styles.buttonText}> Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    avatar: {
        marginTop: 70,
    },
    nickname: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',

    },
    email: {
        marginTop: 20,
        fontSize: 25,  
    },
    button : {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF'
    }
})

export default Profile
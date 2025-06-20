import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from "@kolking/react-native-avatar";

export default props => {
    return(
        <View style = {styles.container}>
            <Avatar 
                email= {props.email}
                style = {styles.avatar}
            />
            <Text style = {styles.nickname}>{props.nickname}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',       
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        color: '#444',
        marginBottom: 20,
        fontSize: 15,
        fontWeight: 'bold'
    }
})
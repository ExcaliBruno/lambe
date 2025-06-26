import React, {Component} from "react";
import { connect } from "react-redux";
import { addPost } from "../store/actions/post";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
} from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

const noUser = 'Voce precisa estar logado para adicionar imagens'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {
    if (!this.props.name) {
        Alert.alert('Falha!', noUser)
        return
    }

    const options = {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 600,
        maxWidth: 800,
    }

    launchImageLibrary(options, res => {
        if (res.didCancel) return
        if (res.errorCode) {
            Alert.alert('Erro ao carregar imagem', res.errorMessage)
        } else {
            const image = res.assets[0]
            this.setState({ image: { uri: image.uri, base64: image.base64 } })
        }
    })
}

    save = async () => {
        if(!this.props.name){
            Alert.alert('Falha', noUser)
            return
        }
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.props.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        this.setState({ image: null, comment: ''})
        this.props.navigation.navigate('Home')
    }

    render() {
        return(
          <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.title}>Compartilhe uma imagem</Text>
                <View style = {styles.imageContainer}>
                    <Image source={this.state.image} style={styles.image} />
                </View>
                <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
                    <Text style={styles.buttomText}>Escolha a foto</Text>
                </TouchableOpacity>
                <TextInput placeholder = 'Algum comentario'
                    style = {styles.input} value ={this.state.comment}
                    editable={this.props.name != null}
                    onChangeText={comment => this.setState({ comment })}/>
                <TouchableOpacity onPress={this.save} style={styles.buttom}>
                    <Text style={styles.buttomText}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>
          </ScrollView>  
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3/4,
        backgroundColor: '#eee',
        marginTop: 10
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor:'#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

//export default AddPhoto
export default connect(mapStateToProps,mapDispatchToProps)(AddPhoto)
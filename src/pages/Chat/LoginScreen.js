
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Message from '../../../animation/Message.json'
import Lottie from 'lottie-react-native'
import Icon from 'react-native-vector-icons/Feather'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };

        this.continue = this.continue.bind(this);
    }

    continue = () => {
        this.props.navigation.navigate("Chat", { name: this.state.name })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{ marginTop: 64 }}>
                    <Lottie resizeMode="contain" style={{ width: 100, height: 100, alignSelf: "center" }} source={Message} autoPlay loop />
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Usuário</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu usuário:"
                        onChangeText={name => {
                            this.setState({ name });
                        }}
                        value={this.state.name}
                    />
                    <View style={{ marginTop: 70, paddingLeft: "85%" }}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>
                            <Icon name="arrow-right" size={50} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6aa9e9"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "514E5A",
        marginTop: 32,
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: 2,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600"
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"
    }
})
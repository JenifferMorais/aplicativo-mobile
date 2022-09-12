import React, { Component } from 'react';
import { View, Text, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../../../Fire';

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    get user() {
        return {
            _id: create_UUID(),
            name: this.props.route.params.name
        }
    }

    componentDidMount() {
        Fire.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
        }))
        );
    }

    componentWillUnmount() {
        Fire.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;

        if (Platform.OS === "android") {
            return (
                <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#4169e1" }} behavior="padding" keyboardVerticalOffset={10} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
    }
}

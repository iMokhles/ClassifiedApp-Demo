/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */


import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Container, Header, Content, Footer, FooterTab, Button, Text, List, ListItem } from 'native-base';
import {CADAppBackground} from "../../Components/CADAppBackground";
import {CADOrigView} from "../../Components/CADOrigView";
import {ConversationItem} from "./ConversationItem";
import {CADAppTheme, conversationFontAwesomeIcons} from "../../Theme/CADTheme";
import {GiftedChat, Actions as MActions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import {CADHeaderWithBackButton} from "../../Components/CADHeaderWithBackButton";
import MessageActions from "./MessageActions";
import MessageCustomView from "./MessageCustomView";

const testList = [
    {
        name: 'Mokhlas Hussein',
        last_message: 'Thank you i will call you later',
        icon: 'comments',
        type: 'font-awesome',
        time: '3:54 PM',
        avatar: require('../../Assets/avatars/user_0.png'),
        press: () => Actions.Login(),
    },
    {
        name: 'Mokhlas Hussein',
        last_message: 'Oh it\'s expensive :(',
        icon: 'comments',
        type: 'font-awesome',
        time: '3:50 PM',
        avatar: require('../../Assets/avatars/user_4.png'),
        press: () => Actions.Login(),
    },
];

export class MessagesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);

    }

    renderCustomView(props) {
        return (
            <MessageCustomView
                {...props}
            />
        );
    }

    renderCustomActions(props) {
        if (Platform.OS === 'ios') {
            return (
                <MessageActions
                    {...props}
                />
            );
        }
        const options = {
            'Action 1': (props) => {
                alert('option 1');
            },
            'Action 2': (props) => {
                alert('option 2');
            },
            'Cancel': () => {},
        };
        return (
            <MActions
                {...props}
                options={options}
            />
        );
    }

    componentWillMount() {
        this._isMounted = true;
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Mokhlas Hussein',
                        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    },
                },
            ],
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));

        // for demo purpose
        this.answerDemo(messages);
    }
    answerDemo(messages) {
        if (messages.length > 0) {
            if ((messages[0].image || messages[0].location) || !this._isAlright) {
                this.setState((previousState) => {
                    return {
                        typingText: 'React Native is typing'
                    };
                });
            }
        }

        setTimeout(() => {
            if (this._isMounted === true) {
                if (messages.length > 0) {
                    if (messages[0].image) {
                        this.onReceive('Nice picture!');
                    } else if (messages[0].location) {
                        this.onReceive('My favorite place');
                    } else {
                        if (!this._isAlright) {
                            this._isAlright = true;
                            this.onReceive('Alright');
                        }
                    }
                }
            }

            this.setState((previousState) => {
                return {
                    typingText: null,
                };
            });
        }, 1000);
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Hamad Adhbiyah',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                }),
            };
        });
    }

    render() {
        return (
            <CADOrigView style={{flex: 1}}>
                <CADAppBackground>
                    <CADHeaderWithBackButton
                        headerText="Messages"
                        onPress={() => { Actions.pop() }}
                    />

                    <GiftedChat
                        messages={this.state.messages}
                        onSend={(messages) => this.onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                        renderActions={this.renderCustomActions}
                        renderCustomView={this.renderCustomView}
                    />
                </CADAppBackground>
            </CADOrigView>

        );
    }

}
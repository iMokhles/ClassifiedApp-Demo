/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */


import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux'
import { Container, Header, Content, Footer, FooterTab, Button, Text, List, ListItem } from 'native-base';
import {CADHeaderWithMenuButton} from "../../Components/CADHeaderWithMenuButton";
import {CADAppBackground} from "../../Components/CADAppBackground";
import {CADOrigView} from "../../Components/CADOrigView";
import {ConversationItem} from "./ConversationItem";
import {CADAppTheme, conversationFontAwesomeIcons} from "../../Theme/CADTheme";

const testList = [
    {
        name: 'Mokhlas Hussein',
        last_message: 'Thank you i will call you later',
        icon: 'comments',
        type: 'font-awesome',
        time: '3:54 PM',
        avatar: require('../../Assets/avatars/user_0.png'),
        press: () => Actions.push("Messages"),
    },
    {
        name: 'Mokhlas Hussein',
        last_message: 'Oh it\'s expensive :(',
        icon: 'comments',
        type: 'font-awesome',
        time: '3:50 PM',
        avatar: require('../../Assets/avatars/user_4.png'),
        press: () => Actions.push("Messages"),
    },
];

export class ConversationsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <CADOrigView style={{flex: 1}}>
                <CADAppBackground>
                    <CADHeaderWithMenuButton
                        headerText="Conversations"
                    />

                    <List style={{marginTop: 0, backgroundColor: 'transparent'}} dataArray={testList} renderRow={(item) =>

                        <ConversationItem
                            style={CADAppTheme.conversationListItemStyle}
                            avatarViewStyle={CADAppTheme.conversationAvatarViewStyle}
                            avatarStyle={CADAppTheme.conversationAvatarStyle}
                            avatar={item.avatar}
                            bodyStyle={CADAppTheme.conversationBodyStyle}
                            titleTextStyle={{color: '#00CF9C', fontSize: 20}}
                            title={item.name}
                            subTitle={item.last_message}
                            rightViewStyle={CADAppTheme.conversationRightStyle}
                            rightTimeTextStyle={{}}
                            time={item.time}
                            rightIconFontStyle={conversationFontAwesomeIcons}
                            rightIconStyle={CADAppTheme.conversationRightIconStyle}
                            iconName={item.icon}
                            onPress={item.press}
                        >
                        </ConversationItem>
                    }>

                    </List>
                </CADAppBackground>
            </CADOrigView>
        )
    }

}
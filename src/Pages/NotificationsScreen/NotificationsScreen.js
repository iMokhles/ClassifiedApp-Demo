/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */


import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, List, ListItem } from 'native-base';
import {CADHeaderWithMenuButton} from "../../Components/CADHeaderWithMenuButton";
import {CADAppBackground} from "../../Components/CADAppBackground";
import {CADOrigView} from "../../Components/CADOrigView";
import {NotificationItem} from "./NotificationItem";
import {CADAppTheme, notificationFontAwesomeIcons} from "../../Theme/CADTheme";


const testList = [
    {
        name: 'Mokhlas Hussein',
        activity: 'Sent you a message',
        icon: 'comments',
        type: 'font-awesome',
        time: '3:50 PM',
        avatar: require('../../Assets/avatars/user_0.png'),
        press: () => Actions.Login(),
    },
    {
        name: 'Hamad Adhbiyah',
        activity: 'Reviewed your ad #6547',
        icon: 'star',
        type: 'font-awesome',
        time: '3:50 PM',
        avatar: require('../../Assets/avatars/user_1.png'),
        press: () => Actions.Signup(),
    },
];

export class NotificationsScreen extends Component {

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
                        headerText="Notifications"
                    />

                    <List style={{marginTop: 0, backgroundColor: 'transparent'}} dataArray={testList} renderRow={(item) =>

                        <NotificationItem
                            style={CADAppTheme.notificationListItemStyle}
                            avatarViewStyle={CADAppTheme.notificationAvatarViewStyle}
                            avatarStyle={CADAppTheme.notificationAvatarStyle}
                            avatar={item.avatar}
                            bodyStyle={CADAppTheme.notificationBodyStyle}
                            titleTextStyle={{color: '#00CF9C', fontSize: 20}}
                            title={item.name}
                            subTitle={item.activity}
                            rightViewStyle={CADAppTheme.notificationRightStyle}
                            rightTimeTextStyle={{}}
                            time={item.time}
                            rightIconFontStyle={notificationFontAwesomeIcons}
                            rightIconStyle={CADAppTheme.notificationRightIconStyle}
                            iconName={item.icon}>
                        </NotificationItem>
                    }>

                    </List>
                </CADAppBackground>
            </CADOrigView>
        )
    }

}
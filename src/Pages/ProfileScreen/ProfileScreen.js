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
import {ProfileTopItem} from "./ProfileTopItem";
import {CADAppTheme} from "../../Theme/CADTheme";
import {ProfileAdItem} from "./ProfileAdItem";

const testProfileInfo = [
    {

        name: 'Mokhlas Hussein',
        sub_name: 'Software Engineer',
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",

        followers: '12k',
        following: '200',
        ads: '3532',

    },

    {

        adTitle: 'iMac 21.5 (late 2013)',
        adSubTitle: 'Cairo',
        adImage: "https://img4.leboncoin.fr/ad-large/0a59e8520ee828913bb6ba7e188d5eecc3fbd617.jpg",
        adCategory: 'Computers',
        adTime: '25/10/2017 15:25PM',
        adViews: '12k',
        adMails: '65',
        adCalls: '30',
        adPrice: '900 €',
    },
];

export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    renderItem(item, sectionID, rowID, higlightRow) {

        if (item.hasOwnProperty("avatar")) {

            return (
                <ProfileTopItem
                    style={CADAppTheme.profileTopItemStyle}
                    bodyStyle={CADAppTheme.profileTopItemBodyStyle}
                    avatar={item.avatar}
                    userName={item.name}
                    userBio={item.sub_name}
                    adsNumber={item.ads}
                    followingNumber={item.following}
                    followersNumber={item.followers}
                >

                </ProfileTopItem>
            );
        } else {
            return (
                <ProfileAdItem
                    style={CADAppTheme.profileAdItemStyle}
                    bodyStyle={CADAppTheme.profileAdItemBodyStyle}
                    adImage={item.adImage}
                    adTitle={item.adTitle}
                    adPrice={item.adPrice}
                    adCategory={item.adCategory}
                    adSubTitle={item.adSubTitle}
                    adTime={item.adTime}
                    adViews={item.adViews}
                    adMails={item.adMails}
                    adCalls={item.adCalls}

                >

                </ProfileAdItem>
            );
        }
    }
    render() {
        return (

            <CADOrigView style={{flex: 1}}>
                <CADAppBackground>
                    <CADHeaderWithMenuButton
                        headerText="Profile"
                    />



                    <List style={{marginTop: 0, backgroundColor: 'transparent'}} dataArray={testProfileInfo} renderRow={(item, sectionID, rowID, higlightRow) => {

                        return this.renderItem(item, sectionID, rowID, higlightRow);
                    }}>

                    </List>
                </CADAppBackground>
            </CADOrigView>
        )
    }

}
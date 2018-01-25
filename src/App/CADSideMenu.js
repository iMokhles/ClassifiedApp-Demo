/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import {List, ListItem, Card, Avatar } from 'react-native-elements'
import SideMenu from 'react-native-side-menu';
import {
    Dimensions,
    Text,
    View,
} from 'react-native';
const window = Dimensions.get('window');


import {CADAppTheme} from "../Theme/CADTheme";
import {CADSideMenuBackground} from "../Components/CADSideMenuBackground";

const testUserInfo = {
    name: 'Mokhlas Hussein',
    ads: '3532 Ads',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
};

const list = [
    {
        name: 'Search',
        icon: 'search',
        type: 'font-awesome',
        press: () => Actions.Home(),
    },

    {
        name: 'Favorites',
        icon: 'heart',
        type: 'font-awesome',
        press: () => Actions.Favorites(),
    },

    {
        name: 'Notifications',
        icon: 'notifications',
        type: 'material',
        press: () => Actions.Notifications(),
    },

    {
        name: 'Profile',
        icon: 'account-circle',
        type: 'material',
        press: () => Actions.Profile(),
    },

    {
        name: 'Conversations',
        icon: 'forum',
        type: 'material',
        press: () => Actions.Conversations(),
    },
];

export class CADSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {
        const MenuComponent = (
            <View style={CADAppTheme.sideMenuViewStyle}>
                <Card containerStyle={CADAppTheme.sideMenuTopCardStyle} >

                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Avatar
                                medium
                                rounded
                                source={{uri: testUserInfo.avatar}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={CADAppTheme.sideMenuTopCardAvatarStyle}
                                avatarStyle={{height: 60, width: 60, borderRadius: 30}}
                            />
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={CADAppTheme.sideMenuTopCardNameTextStyle}> {testUserInfo.name} </Text>
                            <Text style={CADAppTheme.sideMenuTopCardAdsNumberTextStyle}> {testUserInfo.ads} </Text>
                        </View>
                    </View>

                </Card>
                <List containerStyle={[CADAppTheme.sideMenuListStyle, {opacity: this.props.isOpen === true ? 1.0 : 0.2}]}>
                    {
                        list.map((l, i) => (
                            <ListItem

                                onPress={l.press.bind(this)}
                                leftIcon={{name: l.icon, type: l.type, style: CADAppTheme.sideMenuLeftIconStyle }}
                                hideChevron={Actions.currentScene !== l.name}
                                rightIcon={{name: "lens", type: "material", style: CADAppTheme.sideMenuRightIconStyle }}
                                key={i}
                                title={l.name}
                                subtitle={l.subtitle}
                                containerStyle={CADAppTheme.sideMenuCellStyle}
                                titleStyle={CADAppTheme.sideMenuTitleStyle}
                                underlayColor="#50E3C2"
                            />
                        ))
                    }
                </List>
            </View>
        );

        return (
            <CADSideMenuBackground>
                <SideMenu
                    openMenuOffset={window.width-100}
                    bounceBackOnOverdraw={false}
                    toleranceY={200}
                    isOpen={this.props.isOpen}
                    onChange={this.props.onSideMenuChange}
                    menu={MenuComponent}>

                    {this.props.children}
                </SideMenu>
            </CADSideMenuBackground>
        );
    }
}
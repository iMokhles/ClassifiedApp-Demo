/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';

import {
    Container, Content, Title, Right, Left,
    Body, Header, Button, getTheme,
    StyleProvider, Thumbnail, ListItem, Text,
    View, Icon
} from 'native-base';
import { Card, Avatar, Button as ButtonIcon } from 'react-native-elements'
import {CADAppTheme} from "../../Theme/CADTheme";
import {CADOrigView} from "../../Components/CADOrigView";

export class ProfileAdItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ListItem last style={[this.props.style]}>
                <View style={CADAppTheme.profileAdItemTopViewStyle}>
                    <View style={CADAppTheme.profileAdItemTopViewAvatarViewStyle}>
                        <Avatar
                            source={{uri: this.props.adImage}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            width={100}
                            height={100}
                        />
                    </View>
                    <View style={CADAppTheme.profileAdItemTopViewInfoViewStyle}>
                        <View style={{marginLeft: 5, marginRight: 5, marginTop: 5}}>
                            <Text style={{fontFamily: "HelveticaNeue", fontSize: 18, color: "#000"}}>{this.props.adTitle}</Text>
                            <Text style={{fontFamily: "HelveticaNeue-Medium", fontSize: 16, color: "#00CF9C"}}>{this.props.adPrice}</Text>
                            <Text style={{fontFamily: "HelveticaNeue", fontSize: 14, color: "#000"}}>{this.props.adCategory}</Text>
                            <Text style={{fontFamily: "HelveticaNeue", fontSize: 14, color: "#000"}}>{this.props.adSubTitle}</Text>
                            <View style={{flexDirection: "row", justifyContent: 'flex-end' }}>
                                <Text note>{this.props.adTime}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={CADAppTheme.profileAdItemBottomViewStyle}>
                    <ButtonIcon
                        icon={{name: 'visibility', color: "#666"}}
                        title={this.props.adViews}
                        backgroundColor="transparent"
                        color="#666"
                        containerViewStyle={{height: 20, marginLeft: 5, marginTop: 5}}
                        buttonStyle={{height: 20}}
                    />
                    <ButtonIcon
                        icon={{name: 'mail', color: "#666"}}
                        title={this.props.adMails}
                        backgroundColor="transparent"
                        color="#666"
                        containerViewStyle={{height: 20, marginLeft: -15, marginTop: 5}}
                        buttonStyle={{height: 20}}
                    />
                    <ButtonIcon
                        icon={{name: 'phone-in-talk', color: "#666"}}
                        title={this.props.adCalls}
                        backgroundColor="transparent"
                        color="#666"
                        containerViewStyle={{height: 20, marginLeft: -15, marginTop: 5}}
                        buttonStyle={{height: 20}}
                    />
                </View>
            </ListItem>
        );
    }
}
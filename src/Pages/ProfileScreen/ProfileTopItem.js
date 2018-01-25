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
import { Card, Avatar } from 'react-native-elements'
import {CADAppTheme} from "../../Theme/CADTheme";



export class ProfileTopItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ListItem last style={this.props.style}>
                <Body style={this.props.bodyStyle}>
                <View style={CADAppTheme.profileTopItemBodyAvatarViewStyle}>
                    <Avatar
                        rounded
                        source={{uri: this.props.avatar}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        width={100}
                        height={100}
                    />
                </View>
                <View style={CADAppTheme.profileTopItemBodyNamesViewStyle}>
                    <Text style={CADAppTheme.profileTopItemBodyNameTextStyle}> {this.props.userName} </Text>
                    <Text style={CADAppTheme.profileTopItemBodyBioTextStyle}> {this.props.userBio} </Text>
                </View>

                <View style={CADAppTheme.profileTopItemBodyNumbersViewStyle}>

                    {/* Left */}
                    <View style={CADAppTheme.profileTopItemBodyNumbersTextsViewLeftStyle}>
                        <Text style={CADAppTheme.profileTopItemBodyNameTextStyle}> {this.props.adsNumber} </Text>
                        <Text style={CADAppTheme.profileTopItemBodyBioTextStyle}> Ads </Text>
                    </View>

                    {/* Center */}
                    <View style={CADAppTheme.profileTopItemBodyNumbersTextsViewRightStyle}>
                        <Text style={CADAppTheme.profileTopItemBodyNameTextStyle}> {this.props.followingNumber} </Text>
                        <Text style={CADAppTheme.profileTopItemBodyBioTextStyle}> Following </Text>
                    </View>

                    {/* Right */}
                    <View style={CADAppTheme.profileTopItemBodyNumbersTextsViewRightStyle}>
                        <Text style={CADAppTheme.profileTopItemBodyNameTextStyle}> {this.props.followersNumber} </Text>
                        <Text style={CADAppTheme.profileTopItemBodyBioTextStyle}> Followers </Text>
                    </View>


                </View>
                </Body>
            </ListItem>
        );
    }
}
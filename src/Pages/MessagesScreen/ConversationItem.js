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


export class ConversationItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ListItem avatar last style={this.props.style}
                      onPress={this.props.onPress}
            >
                <Left>
                    <View style={this.props.avatarViewStyle}>
                        <Thumbnail style={this.props.avatarStyle} source={this.props.avatar} />
                    </View>
                </Left>
                <Body style={this.props.bodyStyle}>
                <Text style={this.props.titleTextStyle}>{this.props.title}</Text>
                <Text note style={this.props.subTitleTextStyle}>{this.props.subTitle}</Text>
                </Body>
                <Right style={this.props.rightViewStyle}>
                    <Text note style={this.props.rightTimeTextStyle}>{this.props.time}</Text>
                    <StyleProvider style={getTheme(this.props.rightIconFontStyle)}>
                        <Icon style={this.props.rightIconStyle} name={this.props.iconName} />
                    </StyleProvider>
                </Right>
            </ListItem>
        );
    }
}
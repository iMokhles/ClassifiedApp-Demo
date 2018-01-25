/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export class CADHeaderWithMenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header
                style={{backgroundColor: "transparent", borderBottomColor: "transparent"}}
                iosBarStyle={'default'}
            >
                <Left>
                    <Button transparent onPress={this.props.onPress}>
                        <Icon name='menu' style={{color: "#000"}} />
                    </Button>
                </Left>
                <Body>
                <Title>{this.props.headerText}</Title>
                </Body>
                <Right>
                </Right>
            </Header>
        )
    }
}
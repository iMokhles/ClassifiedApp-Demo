/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Item, Input, Segment, Text } from 'native-base';

export class CADHeaderWithSegment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header
                hasTabs
                style={{backgroundColor: "transparent", borderBottomColor: "transparent"}}
                iosBarStyle={'default'}
            >
                <Body>
                <Title>{this.props.headerText}</Title>
                </Body>
            </Header>
        )
    }
}
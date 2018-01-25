/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Item, Input } from 'native-base';

export class CADHeaderWithSearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header
                searchBar rounded
                style={{backgroundColor: "transparent", borderBottomColor: "transparent"}}
                iosBarStyle={'default'}
            >
                <Button transparent onPress={this.props.onPress}
                style={{marginLeft: -20}}>
                    <Icon name='menu' style={{color: "#000", fontSize: 33}} />
                </Button>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Looking for... ?" />
                </Item>
            </Header>
        )
    }
}
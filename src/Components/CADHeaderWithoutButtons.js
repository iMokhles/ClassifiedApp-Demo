/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';
import {Header } from 'react-native-elements'

export class CADHeaderWithoutButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                centerComponent={{ text: this.props.headerText, style: { color: 'white', fontSize: 25 } }}
            />
        )
    }
}
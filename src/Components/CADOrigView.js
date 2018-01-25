/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';
import {
    View,
} from 'react-native';

export class CADOrigView extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View
                style={this.props.style}>
                {this.props.children}
            </View>
        );
    }
}
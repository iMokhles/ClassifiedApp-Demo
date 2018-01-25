/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

export class CADSideMenuBackground extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ImageBackground source={require(
                "../Assets/SideMenuBG_2.png"
            )}
                             style={{ flex: 1,
                                 alignSelf: 'stretch',
                                 width: null,
                             }}>
                {this.props.children}
            </ImageBackground>
        );
    }
}
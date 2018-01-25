/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {CADAppBackground} from "../../Components/CADAppBackground";
import {CADOrigView} from "../../Components/CADOrigView";
import {CADHeaderWithSearchBar} from "../../Components/CADHeaderWithSearchBar";



export class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <CADOrigView style={{flex: 1}}>
                <CADAppBackground>
                    <CADHeaderWithSearchBar
                        headerText="Home"
                    />



                </CADAppBackground>
            </CADOrigView>
        )
    }

}
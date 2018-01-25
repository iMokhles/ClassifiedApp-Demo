/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */


import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {CADHeaderWithMenuButton} from "../../Components/CADHeaderWithMenuButton";
import {CADAppBackground} from "../../Components/CADAppBackground";
import {CADOrigView} from "../../Components/CADOrigView";


export class NewAdScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <CADOrigView>
                <CADAppBackground>
                    <CADHeaderWithMenuButton
                        headerText="New Ad"
                    />
                </CADAppBackground>

            </CADOrigView>
        )
    }

}
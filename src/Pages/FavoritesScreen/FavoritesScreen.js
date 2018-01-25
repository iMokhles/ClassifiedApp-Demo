/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import React, {Component} from 'react';
import { ButtonGroup } from 'react-native-elements';

import { Container, Header, Content, Footer, FooterTab, Button, Text, Segment } from 'native-base';
import {CADHeaderWithMenuButton} from "../../Components/CADHeaderWithMenuButton";
import {CADAppBackground} from "../../Components/CADAppBackground";
import {CADOrigView} from "../../Components/CADOrigView";
import {CADHeaderWithSegment} from "../../Components/CADHeaderWithSegment";



export class FavoritesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    renderSavedList() {
        const { selectedIndexState } = this.state;

        if (selectedIndexState === 0) {
            // saved ads
        } else {
            // saved searchs
        }
    }

    render() {

        const buttons = ['Saved Ads', 'Saved Searchs']
        const { selectedIndex } = this.state;

        return (

            <CADOrigView style={{flex: 1}}>
                <CADAppBackground>
                    <CADHeaderWithSegment
                        headerText="Favorites"
                    />
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 40}}
                        innerBorderStyle={{color: "transparent"}}
                    />



                </CADAppBackground>
            </CADOrigView>
        )
    }

}
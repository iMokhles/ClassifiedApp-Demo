/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */


import React, { Component } from 'react';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import {HomeScreen} from "../Pages/HomeScreen/HomeScreen";
import {CADSideMenu} from "./CADSideMenu";
import {NotificationsScreen} from "../Pages/NotificationsScreen/NotificationsScreen";
import {ProfileScreen} from "../Pages/ProfileScreen/ProfileScreen";
import {MessagesScreen} from "../Pages/MessagesScreen/MessagesScreen";
import {ConversationsScreen} from "../Pages/MessagesScreen/ConversationsScreen";
import {FavoritesScreen} from "../Pages/FavoritesScreen/FavoritesScreen";

const scenes = Actions.create(
    <Scene key="root"
           hideNavBar={true}
           navigationBarStyle={{
               backgroundColor: 'transparent',
               borderColor: 'transparent',
               borderBottomColor: 'transparent'
           }}>
        {/*hideNavBar={true}*/}

        {/* Screens */}
        <Scene duration={1000} key="Search" type="replace" component={HomeScreen}/>
        <Scene duration={1000} key="Profile" type="replace" component={ProfileScreen}/>
        <Scene duration={1000} key="Favorites" type="replace" component={FavoritesScreen}/>
        <Scene duration={1000} key="Notifications" type="replace" component={NotificationsScreen}/>
        <Scene duration={1000} key="Conversations" type="replace" component={ConversationsScreen}/>
        <Scene duration={1000} key="Messages" type="replace" component={MessagesScreen}/>

    </Scene>
);

export default class CADClassifiedApp extends Component {

    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
        this.onSideMenuChange = this.onSideMenuChange.bind(this);
        this.state = {
            isMenuOpen: false,
        };
    }
    onPress() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    onSideMenuChange (isOpen) {
        this.setState({ isMenuOpen: isOpen });
    }

    reducerCreate = params=>{
        const defaultReducer = Reducer(params);
        return (state, action)=>{
            this.onSideMenuChange(false);
            return defaultReducer(state, action);
        }
    };

    render() {
        return (

            <CADSideMenu
                isOpen={this.state.isMenuOpen}
                onSideMenuChange={this.onSideMenuChange}>
                <Router createReducer={this.reducerCreate} scenes={scenes} sceneStyle={{backgroundColor: this.state.bg_colorTop2}}>
                </Router>
            </CADSideMenu>


        );
    }
}
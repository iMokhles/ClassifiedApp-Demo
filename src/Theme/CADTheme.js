/**
 * Created by WebStorm.
 * User: imokhles
 * Date: 29/10/2017
 * Time: 08:30
 */

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export const notificationFontAwesomeIcons={
    iconFamily: 'FontAwesome',
    iconFontSize: 28,
};

export const conversationFontAwesomeIcons={
    iconFamily: 'FontAwesome',
    iconFontSize: 28,
};

export const CADAppTheme = StyleSheet.create({

//    SideMenu
    sideMenuViewStyle: {flex: 1, backgroundColor: 'transparent', paddingTop: 10},
    sideMenuTopCardStyle: {padding: 0, height: 70, backgroundColor: 'transparent', borderColor: 'transparent'},
    sideMenuTopCardAvatarStyle: {marginTop: 10, marginLeft: 10},
    sideMenuTopCardNameTextStyle: {marginTop: 16, marginLeft: 10, fontFamily: "Helvetica-Bold", fontSize: 20, color: 'white'},
    sideMenuTopCardAdsNumberTextStyle: {marginTop: 0, marginLeft: 12, fontFamily: "Helvetica", fontSize: 15, color: 'white'},
    sideMenuListStyle: {marginBottom: 20, backgroundColor: 'transparent', borderColor: 'transparent', borderBottomWidth: 0, borderBottomColor: "transparent"},
    sideMenuLeftIconStyle: {width: 30, marginLeft: 10, color: 'white'},
    sideMenuRightIconStyle: {width: 20, color: '#fff', fontSize: 15, shadowColor: "black", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2.2},
    sideMenuTitleStyle: {color: 'white', fontSize: 25, marginLeft: 5, fontFamily: "Helvetica-Bold"},
    sideMenuCellStyle: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: 5, height: 44, borderBottomWidth: 0, borderBottomColor: 'transparent'},

//    Notifications Screen
    notificationListStyle: {backgroundColor: 'transparent',},
    notificationListItemStyle: {marginTop: 5, backgroundColor: '#fff', height: 66, marginBottom: 10, borderBottomWidth: 0, borderTopRightRadius: 33, borderBottomRightRadius: 33, marginRight: 20, shadowColor: 'transparent', shadowOffset: {width: 1, height:1}, shadowOpacity: 0.2,},
    notificationAvatarViewStyle: {height: 66, borderColor: '#006f53', borderLeftWidth: 5, marginLeft: -15, justifyContent: 'center', alignItems: 'flex-end',},
    notificationAvatarStyle: {marginLeft: 5,},
    notificationBodyStyle: {borderBottomWidth: 0.0,},
    notificationRightStyle: {borderBottomWidth: 0.0,},
    notificationRightIconStyle: {fontSize: 20, marginTop: 12, paddingRight: 5, color: '#666'},

//    Profile Screen

    // Top Account Info Item
    profileTopItemStyle: {backgroundColor: '#fff', height: 240, borderBottomWidth: 0.0,},
    profileTopItemBodyStyle: {borderBottomWidth: 0.0, backgroundColor: 'transparent', height: 240, flexDirection: 'column'},
    profileTopItemBodyAvatarViewStyle: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15,},
    profileTopItemBodyNamesViewStyle: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10,},
    profileTopItemBodyNameTextStyle: {fontFamily: "HelveticaNeue-Medium", fontSize: 20, color: 'black'},
    profileTopItemBodyBioTextStyle: {fontFamily: "HelveticaNeue", fontSize: 13, color: 'darkgray'},
    profileTopItemBodyNumbersViewStyle: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15,},
    profileTopItemBodyNumbersTextsViewRightStyle: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 30,},
    profileTopItemBodyNumbersTextsViewCenterStyle: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 30,},
    profileTopItemBodyNumbersTextsViewLeftStyle: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center'},

    // Ad Info Item
    profileAdItemStyle: {backgroundColor: '#fff', height: 130, borderBottomWidth: 0.0, marginTop: 15, flexDirection: "column"},
    profileAdItemBodyStyle: {borderBottomWidth: 0.0, backgroundColor: 'transparent', height: 100, flexDirection: 'column', marginTop: -30},
    profileAdItemBottomViewStyle: {backgroundColor: "transparent", width: window.width, height: 30, flexDirection: "row", marginTop: 0},
    profileAdItemTopViewStyle: {backgroundColor: "transparent", width: window.width, height: 100, flexDirection: "row", marginTop: -13},
    profileAdItemTopViewAvatarViewStyle: {backgroundColor: "transparent", width: 100, height: 100, marginLeft: 0},
    profileAdItemTopViewInfoViewStyle: {backgroundColor: "transparent", width: window.width-100, height: 100},
//    Messages Screen

//    Conversations List
    conversationListStyle: {backgroundColor: 'transparent',},
    conversationListItemStyle: {marginTop: 5, backgroundColor: '#fff', height: 66, marginBottom: 10, borderBottomWidth: 0, marginRight: 0, shadowColor: 'transparent', shadowOffset: {width: 1, height:1}, shadowOpacity: 0.2,},
    conversationAvatarViewStyle: {height: 66, borderColor: '#006f53', borderLeftWidth: 5, marginLeft: -15, justifyContent: 'center', alignItems: 'flex-end',},
    conversationAvatarStyle: {marginLeft: 5,},
    conversationBodyStyle: {borderBottomWidth: 0.0,},
    conversationRightStyle: {borderBottomWidth: 0.0,},
    conversationRightIconStyle: {fontSize: 20, marginTop: 12, paddingRight: 5, color: '#666'},


});
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SearchBar from './Components/SearchBar';
import { Styles } from './Styles/Style';
import ProfilePicture from './Components/ProfilePicture';

export default class MainPage extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <SearchBar/>
                <ProfilePicture/>
            </View>
        )
    }
}

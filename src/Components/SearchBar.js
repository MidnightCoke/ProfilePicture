import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Styles } from '../Styles/Style'
import axios from 'axios';

export default class SearchBar extends Component {

    state = {
        username: '',
      };
    
      updateSearch = username => {
        this.setState({ username });
        
      };

    render() {
        const { username } = this.state;
        
        return (
            <View>
                <TextInput style={Styles.searchbar} 
                onChangeText={this.updateSearch}
                value={username}
                placeholder="Search a username">
                </TextInput>
            </View>
        )
    }
}

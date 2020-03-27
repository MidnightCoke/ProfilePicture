import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Styles } from '../Styles/Style'

export default class SearchBar extends Component {

    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };


    render() {
        const { search } = this.state;
        return (
            <View>
                <TextInput style={Styles.searchbar} 
                onChangeText={this.updateSearch}
                value={search}
                placeholder="Search a username">
                </TextInput>
            </View>
        )
    }
}

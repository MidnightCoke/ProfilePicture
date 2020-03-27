import React, { Component } from 'react'
import { ActivityIndicator, View, Image } from 'react-native'
import { Styles } from '../Styles/Style'

export default class ProfilePicture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataSource: null,
        }
    }

    render() {
        if(this.state.isLoading){

            return(
                <View style={Styles.imageloading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        } else{
        return (
            <View style={Styles.imageborder}>
                <Image
                    style={Styles.imageview}
                    source={{ uri: 'https://www.gstatic.com/tv/thumb/persons/784313/784313_v9_bb.jpg' }}
                />
            </View>
        )
        }
    }
}

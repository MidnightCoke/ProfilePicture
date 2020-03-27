import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Styles } from '../Styles/Style'

export default class ProfilePicture extends Component {
    render() {
        return (
            <View style={Styles.imageborder}>
                <Image
                    style={Styles.imageview}
                    source={{ uri: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/79890523_625103138244752_2070041947384315904_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=S6Bn4FdTb9gAX9Rw_fP&oh=41f3457d7dee4ccb6afa172d7111e931&oe=5EA60D4B' }}
                />
            </View>
        )
    }
}

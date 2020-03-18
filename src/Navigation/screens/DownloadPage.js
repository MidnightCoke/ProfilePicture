import React from 'react';
import {Text, View, ImageBackground, Image, Dimensions,Alert} from 'react-native';
import {SearchBar, Icon, ListItem, Button} from 'react-native-elements';

export default class DownloadPage extends React.Component {
  render() {

    return (
      <View>

      <View style={{alignItems:'flex-start',marginTop:5,marginLeft:5}}>
      <Button
          title="Go Back"
          onPress={() => {this.props.navigation.navigate ('SearchPage')}}
      /></View>

      <View style={{alignItems:'center',marginTop:60,marginHorizontal:20}}>
      <Image
          style={{borderRadius:20,
                  width: Dimensions.get('window').width *0.9,
                  height: Dimensions.get('window').height *0.5}}
          source={require('C:/Users/ceyni/Desktop/ProfilePicture/src/assets/girl.jpg')}
      /></View>
      
      <View style={{alignItems:'center',marginTop:20}}>
      <Button
          title="Download"
          onPress={() => Alert.alert('need backend for download xd')}
      /></View>

      <View style={{height:150,marginTop:30,borderRadius: 30,backgroundColor: 'gray',alignItems:'center'}}>
          <Text>AD</Text>
        </View>
      </View>

    );
  }
}
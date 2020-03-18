import React from 'react';
import {Text, View, ImageBackground, Dimensions} from 'react-native';
import {SearchBar, Icon, ListItem, Button} from 'react-native-elements';


const list = [
  {
    name: 'username 1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //subtitle: ''
  },
  {
    name: 'username 2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //subtitle: ''
  },
  {
  name: 'username 3',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'username 4',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
]
export default class SearchPage extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={{width: Dimensions.get('window').width *1,
                    height: Dimensions.get('window').height * 1,}}>
      
        <View style={{marginTop:40,marginHorizontal:2}}>
          <SearchBar
            cancelButtonTitle='cancel'
            platform='ios'
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
            /></View>

        <View style={{marginTop:20,marginHorizontal:2,alignItems:'center'}}>
          <Text style={{fontSize:18,color:'gray'}}>Recently Searched</Text>
        </View>

        <View style={{marginTop:20}}>
          {list.map((x, y) => (
            <ListItem 
              key={y}
              leftAvatar={{ source: { uri: x.avatar_url } }}
              title={x.name}
              subtitle={x.subtitle}
              bottomDivider
        />))}</View>

        <Button
          title="Press me"
          onPress={() => {
                        this.props.navigation.navigate ('DownloadPage')           
                    }}
        />
        
        <View style={{height:150,marginTop:40,borderRadius: 30,backgroundColor: 'gray',alignItems:'center'}}>
          <Text>AD</Text>
        </View>
          
      </View>

    );
  }
}
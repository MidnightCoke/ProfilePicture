import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from "C:/Users/ceyni/Desktop/ProfilePicture/src/Navigation/screens/SearchPage.js";
import DownloadPage from "C:/Users/ceyni/Desktop/ProfilePicture/src/Navigation/screens/DownloadPage.js";


const AppNavigator = createStackNavigator({
  SearchPage: {
    screen: SearchPage
  }, 
  DownloadPage:{
    screen: DownloadPage
  },

},
{
  headerMode: 'none', 
  navigationOptions: {
  headerVisible: false,
}});

export default createAppContainer(AppNavigator);
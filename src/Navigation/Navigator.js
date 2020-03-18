import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from "./screens/SearchPage";
import DownloadPage from "./screens/DownloadPage";

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
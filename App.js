import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchSreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
  Search: SearchSreen,
  ResultShow: ResultShowScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title:'Bussiness Search'
  }
});

export default createAppContainer(navigator);
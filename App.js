import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import your app components here
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

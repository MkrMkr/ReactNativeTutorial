import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home/Home.component";
import GeoSample from "./components/GeoSample/GeoSample.component";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    GeoSample: GeoSample
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

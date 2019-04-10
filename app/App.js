import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home/Home.component";
import FusedGeolocation from "./components/FusedGeolocationComponent/FusedGeolocation.component";
import ReactNariveGeoServ from "./components/GeoServ/ReactNativeGeoServ";
import ReactNativeLocation from "./components/ReactNativeLocation/ReactNativeLocation.component";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    FusedGeolocation: FusedGeolocation,
    ReactNativeGeoServ: ReactNariveGeoServ,
    ReactNativeLocation: ReactNativeLocation
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

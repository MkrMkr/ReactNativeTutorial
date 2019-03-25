import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home/Home.component";
import FusedGeolocation from "./components/FusedGeolocationComponent/FusedGeolocation.component";
import GeoServImproved from "./components/GeoServImproved/GeoServImproved.component";
import ReactNariveGeoServ from "./components/GeoServ/ReactNativeGeoServ";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    FusedGeolocation: FusedGeolocation,
    ReactNativeGeoServ: ReactNariveGeoServ,
    GeoServImproved: GeoServImproved
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

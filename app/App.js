import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home/Home.component";
import GeoSample from "./components/GeoSample/GeoSample.component";
import FusedGeolocation from "./components/FusedGeolocationComponent/FusedGeolocation.component";
import GeoServImproved from "./components/GeoServImproved/GeoServImproved.component";
import ReactNariveGeoServ from "./components/GeoServ/ReactNativeGeoServ";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    GeoSample: GeoSample,
    FusedGeolocation: FusedGeolocation,
    ReactNativeGeoServ: ReactNariveGeoServ,
    GeoServImproved: GeoServImproved
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

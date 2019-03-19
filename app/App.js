import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home/Home.component";
import GeoSample from "./components/GeoSample/GeoSample.component";
import FusedGeolocation from "./components/FusedGeolocationComponent/FusedGeolocation.component";
import GeoServ from "./components/GeoServ/GeoServ.component";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    GeoSample: GeoSample,
    FusedGeolocation: FusedGeolocation,
    GeoServ: GeoServ
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

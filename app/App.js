import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home/Home.component";

const AppNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

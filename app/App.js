import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home/Home.component";

const AppNavigator = createStackNavigator({
  screen: Home
});

export default createAppContainer(AppNavigator);

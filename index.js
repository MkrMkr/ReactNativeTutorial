/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import NoteTaker from "./app/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => NoteTaker);

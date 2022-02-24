import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import DashboardScreen from "../screens/DashboardScreen";
// import AccountScreen from "../screens/AccountScreen";
import Homepage from "../screens/Homepage";
import PollPage from "../screens/PollPage";
import EventPage from "../screens/EventPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="PollPage" component={PollPage} />
      <Tab.Screen name="EventPage" component={EventPage} />

      {/* <Stack.Screen name="Account" component={AccountScreen} /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;

import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewA from "../views/ViewA";
import ViewC from "../views/ViewC";
import ViewB from "../views/ViewB";
const Tab = createBottomTabNavigator();
export default props => (
    <Tab.Navigator screenOptions={
        {
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }
    } initialRouteName="TelaB">
        <Tab.Screen options={
            {title: "Home" }
        } name="TelaA" component={ViewA}/>
        <Tab.Screen name="TelaB" component={ViewB}/>
        <Tab.Screen name="TelaC" component={ViewC}/>
    </Tab.Navigator>
)
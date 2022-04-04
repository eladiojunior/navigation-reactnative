import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewA from "../views/ViewA";
import ViewC from "../views/ViewC";
import ViewB from "../views/ViewB";
import ViewD from "../views/ViewD";
const Drawer = createDrawerNavigator();
export default props => (
    <Drawer.Navigator initialRouteName="TelaD">
        <Drawer.Screen name="TelaA" component={ViewA}/>
        <Drawer.Screen name="TelaB" component={ViewB}/>
        <Drawer.Screen name="TelaC" component={ViewC}/>
        <Drawer.Screen name="TelaD" component={ViewD}/>
    </Drawer.Navigator>
)
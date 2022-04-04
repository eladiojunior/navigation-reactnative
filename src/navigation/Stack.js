import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewA from "../views/ViewA";
import ViewC from "../views/ViewC";
import ViewB from "../views/ViewB";
import NavigationStack from "../components/NavigationStack";
const Stack = createNativeStackNavigator();
export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={ { headerShown: true }}>
        <Stack.Screen name="TelaA" 
            options={{title: "Informações Iniciais"}}>
            {props => (
                <NavigationStack {...props} nextView="TelaB">
                    <ViewA/>
                </NavigationStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <NavigationStack {...props} 
                    nextView="TelaC" 
                    returnView={true}
                    params={{numero: 1001}}>
                    <ViewB/>
                </NavigationStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <NavigationStack {...props} nextView="TelaC" returnView={true}>
                    <ViewC {...props}/>
                </NavigationStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)
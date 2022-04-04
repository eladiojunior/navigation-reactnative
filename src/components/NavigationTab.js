import React from "react";
import {View, Button} from 'react-native';
export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.returnView ? 
            <Button title="Retornar" onPress={() => {
                props.navigation.goBack()
            }}></Button> : false}
            {props.nextView ? 
            <Button title="Próximo" onPress={() => {
                props.navigation.navigate(props.nextView, props.params)
            }}></Button> : false}
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)
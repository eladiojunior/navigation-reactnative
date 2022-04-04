import React from 'react';
import TextCenter from '../components/TextCenter';
import { View, Button } from 'react-native';
export default props => {
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', justifyContent: 'flex-end'}}>
                <Button 
                    title='Menu' 
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                        }, 3000)}}/>
            </View>
            <View style={{flex:1}}>
                <TextCenter backgroundColor="#33fa72" textColor="#000">
                    Tela D
                </TextCenter>
            </View>
        </View>
    );
}
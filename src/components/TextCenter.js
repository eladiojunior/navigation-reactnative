import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default props => {
   
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.backgroundColor || '#000'
        },
        textCenter: {
            fontSize: 50,
            color: props.fontColor || '#fff'
        }
    });
    
    return (
        <View style={styles.container}>
            <Text style={styles.textCenter}>{props.children}</Text>
        </View>
    );

}
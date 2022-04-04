import React from 'react';
import { SafeAreaView } from 'react-native';
import ViewA from './views/ViewA';
import ViewB from './views/ViewB';
import ViewC from './views/ViewC';

export default props => (
    <SafeAreaView style={{flex:1}}>
        <ViewA/>
        <ViewB/>
        <ViewC/>
    </SafeAreaView>
)
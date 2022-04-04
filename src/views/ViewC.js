import React from 'react';
import TextCenter from '../components/TextCenter';
export default props => {
    const route = props.route || { params: {numero: 0}};
    const params = route.params || {numero: 0};
    return (
        <TextCenter backgroundColor="#9932cd">
            Tela C - {params.numero}
        </TextCenter>
    );
}
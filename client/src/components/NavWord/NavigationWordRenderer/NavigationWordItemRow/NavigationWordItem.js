import React, { memo } from 'react';
import NavigationWord from '../../NavigationWord';

const NavigationWordItemRow = memo(({ data, index, style }) => {
    const { items } = data;
    const item = items[index];
    return <NavigationWord key={item._id} word={item} style={style} />;
});

export default NavigationWordItemRow;

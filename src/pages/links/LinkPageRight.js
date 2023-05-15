import React from 'react';
import IconContainerInfoRight from './IconContainerInfoRight';
import IconContainerInfoLeft from './IconContainerInfoLeft';

function LinkPageRight() {
    return (
        <div className="p-6 grid grid-cols-2 gap-4 cursor-pointer">
            <IconContainerInfoLeft />
            <IconContainerInfoRight />
        </div>
    );
}

export default LinkPageRight;

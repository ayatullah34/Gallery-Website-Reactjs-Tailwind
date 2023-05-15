import React from 'react';
import { iconContainerInfo } from '../../data/iconContainerData';

function IconContainerInfoRight() {
    return (
        <div className="grid grid-rows-3 items-start gap-y-10 sm:gap-y-16 md:gap-y-20">
            {iconContainerInfo.right.map((item, index) => (
                <div className="grid grid-cols-6 gap-4 items-center" key={index}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/${item.icon}`}
                        alt={item.alt}
                    />
                    <p className="text-[10px] md:text-base text-[#000] font-normal col-span-4">{item.text}</p>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/chevron_icon.svg`}
                        alt="chevron-icon"
                    />
                </div>
            ))}
        </div>
    );
}

export default IconContainerInfoRight;

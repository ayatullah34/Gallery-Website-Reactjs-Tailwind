import React from 'react';
import { iconContainerInfo } from '../../data/iconContainerData';

function IconContainerInfoLeft() {
    return (
        <div className="grid grid-rows-3 items-start gap-y-10 sm:gap-y-16 md:gap-y-20">
            {iconContainerInfo.left.map((info, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 items-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/${info.icon}`}
                        alt={info.alt}
                    />
                    <p className="text-[10px] md:text-base text-[#000] font-normal col-span-4">{info.text}</p>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/chevron_icon.svg`}
                        alt="chevron-icon"
                    />
                </div>
            ))}
        </div>
    );
}

export default IconContainerInfoLeft;

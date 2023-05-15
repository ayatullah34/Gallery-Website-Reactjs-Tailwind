import React from 'react';
import { footerRightData } from '../../data/footerRightData';

function FooterRight() {
    return (
        <div className="md:col-span-1 lg:col-span-2 pr-6 ">
            <div className="grid grid-cols-[auto,1fr] max-w-[400px] gap-2 mb-4 items-center">
                <h3 className="text-sm font-normal font-[montserrat] tracking-[1.3px] uppercase">Bizi takip et</h3>
                <hr className="border-[#333333] mr-2" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 w-fit gap-x-4  gap-y-3">
                {footerRightData.map((item) => (
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.alt}
                    >
                        <div className="rounded-full w-[48px] h-[48px] border border-[#333333]  flex items-center justify-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/footer/${item.icon}`}
                                alt={item.alt}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterRight;

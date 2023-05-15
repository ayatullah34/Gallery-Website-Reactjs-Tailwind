import React from 'react';
import { footerLeftData } from '../../data/footerLeftData';

function FooterLeft() {
    return (
        <>
            {footerLeftData.map((data, index) => (
                <div key={index} >
                    <h3 className="text-sm font-normal mb-4 font-[montserrat] tracking-[1.3px]">{data.title}</h3>
                    <ul className="text-sm font-normal space-y-2 font-[roboto] leading-[22px]">
                        {data.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

export default FooterLeft;

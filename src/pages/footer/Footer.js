import React from 'react';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

function Footer() {
    return (
        <footer className="bg-[#250400] text-white mt-20">
            <div className="container mx-auto py-8 px-4 md:px-8">
                <div className=" relative grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <FooterLeft />
                    <div className="hidden col-span-1 lg:block  absolute left-[57%] top-0 transform -translate-x-1/2 h-full bg-[#333333] w-0.5" />
                    <FooterRight />
                </div>
                <hr className="relative mt-8 w-full border-t border-[#333333]" />
                <div className="mt-8 w-full flex flex-row justify-center gap-5 text-[#C6C6C6] font-[roboto] font-normal text-xs" >
                    <span>Legal Notice</span>
                    <span>Privacy policy</span>
                    <span>Cookies</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

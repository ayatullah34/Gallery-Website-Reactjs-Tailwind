import React from 'react';

function Header() {
    return (
        <div className="flex flex-col md:flex-row mx-4 md:mx-10 my-4 md:my-14  items-center">
            <img
                className="w-10 h-6 md:w-12 md:h-7 mr-2 md:mr-4"
                src={`${process.env.PUBLIC_URL}/assets/warm.svg`}
                alt="header_icon"
            />
            <span className="font-bold text-xl md:text-sm lg:text-lg flex-shrink-0 md:mr-3">HAPPY GALERİ</span>
            <nav className="flex flex-col items-center md:flex-row gap-2 md:gap-6 mt-2 md:mt-0 md:ml-auto">
                <a href="#about" className="text-xxs md:text-xs lg:text-base flex-shrink-0">HAKKIMIZDA</a>
                <a href="#questions" className="text-xxs md:text-xs lg:text-base flex-shrink-0">SIKÇA SORULAN SORULAR</a>
                <a href="#gallery" className="text-xxs md:text-xs lg:text-base">GALERİ</a>
                <a href="#info" className="text-xxs md:text-xs lg:text-base">İLETİŞİM</a>
                <a href="#login" className="text-xxs md:text-xs lg:text-base flex-shrink-0">GİRİŞ YAP</a>
                <a href="#buy" className="text-xxs md:text-xs lg:text-base flex-shrink-0">ALIŞVERİŞ (0)</a>
            </nav>
        </div>
    );
}

export default Header;

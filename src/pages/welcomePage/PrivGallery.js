function PrivGallery() {
    return (
        <div className="relative w-full">
            <img
                className="w-full h-1/4 mt-12"
                src={`${process.env.PUBLIC_URL}/assets/private_gallery.svg`}
                alt="welcome_image"
            />
            <div className="absolute bottom-0 left-0 mb-12 ml-12 text-white text-sm md:text-xl lg:text-3xl font-extralight">
                Özel Galerimiz
            </div>
            <div className="absolute capitalize font-extralight inset-0 flex flex-col top-[30px] md:top-[60px] lg:top-[120px] items-center text-center text-xl md:text-3xl lg:text-6xl leading-tight text-white">
                <span>Yeni gelen sanat</span>
                <span>eserlerini inceleyin</span>
            </div>

            <img
                className="absolute w-[15%]  h-auto bottom-0 right-0 mb-12 mr-12 cursor-pointer"
                src={`${process.env.PUBLIC_URL}/assets/chevron_btn.svg`}
                alt="welcome_image"
            />
        </div>
    );
}

export default PrivGallery;

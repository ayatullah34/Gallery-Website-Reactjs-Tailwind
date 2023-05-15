function WelcomeImg() {
    return (
        <div id='WelcomeImg' className="mx-[40px] mt-[70px] max-w-full mb-6 px-4 md:mx-[120px] lg:mx-[140px]">
            <img
                src={`${process.env.PUBLIC_URL}/assets/welcome_img.svg`}
                alt={'welcome_image'}
                className="w-full h-auto"
            />
        </div>
    )
}

export default WelcomeImg;

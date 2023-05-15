function WelcomeText() {
    return (
        <div className="flex flex-col text-center gap-4 mx-4 md:mx-8 lg:mx-16 xl:mx-20 my-12 px-4 lg:px-0 ">
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight leading-tight">
                Happy Galeri’ye Hoşgeldiniz
            </div>
            <div className="text-center text-base md:text-lg lg:text-xl xl:text-2xl lg:mx-[200px] font-extralight leading-normal capitalize mb-6">
                Bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki!
                Bu yüzden en iyi şekilde yararlanmak için ziyaretinizi önceden planlayın.
                Temaya dayalı bir turu takip etmek için neden ziyaretçi parkurlarımızdan birini seçmiyorsunuz?
                Molaya ihtiyacınız olduğunda, müzenin dinlendirici bahçelerinden daha iyi neresi var?
            </div>
        </div>
    );
}

export default WelcomeText;

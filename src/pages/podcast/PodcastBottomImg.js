import React from 'react';
import { useSelector } from 'react-redux';

function PodcastBottomImg() {
    const pageData = useSelector((state) => state.pageInfo.pageData);

    return (
        <div className='col-span-2 mt-[20px]'>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4">
                {pageData.products?.length > 0 &&
                    pageData.products
                        .filter((item) => [38, 37, 36, 7].includes(item.id))
                        .map((image) => (
                            <div key={image.id} className="relative">
                                <img
                                    src={image.imagelist[0].url}
                                    alt={image.name}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-5 left-5 text-white text-xs md:text-[10px] xl:text-sm font-medium font-avenir">
                                    <span>EUROPEAN</span>
                                </div>
                                <div className="absolute text-white bottom-5 left-5 text-xs md:text-[10px] xl:text-sm font-avenir font-normal">
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </span>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}

export default PodcastBottomImg;

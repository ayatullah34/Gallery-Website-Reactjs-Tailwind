
import React from 'react';
import { useSelector } from 'react-redux';

function PodcastRightImg() {
    const pageData = useSelector((state) => state.pageInfo.pageData)

    return (
        <div className='md:mt-[20%] xl:mt-0'>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {pageData.products?.length > 0 &&
                    pageData.products.filter((item) => ![38, 37, 36, 7].includes(item.id))
                        .map((image) => (
                            <div key={image.id}>
                                <img src={image.imagelist[0].url} alt={image.name} className="w-full h-auto" />
                            </div>
                        ))}
            </div>
        </div>

    );
}

export default PodcastRightImg;




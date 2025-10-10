import Property from '@/components/ui/Property'
import React, { useCallback, useState } from 'react'

const Carousel = () => {
    const imageArray = [
        {
            img: "/images/property/carousel/image1.jpg"
        },
        {
            img: "/images/property/carousel/image2.png"
        },
        {
            img: "/images/property/carousel/image3.png"
        },
        {
            img: "/images/property/carousel/image4.png"
        },
        {
            img: "/images/property/carousel/image5.png"
        },
        {
            img: "/images/property/carousel/image6.png"
        },
        {
            img: "/images/property/carousel/image7.png"
        },
        {
            img: "/images/property/carousel/image8.png"
        },
        {
            img: "/images/property/carousel/image9.png"
        }
    ]
    const [curentposition, setcurentposition] = useState(0)
    const curei = imageArray[curentposition]
    const curep = imageArray[curentposition]
    const handleRightClick = useCallback(() => {
        setcurentposition((prev) => prev == imageArray.length - 1 ? 0 : prev += 1)
        setcurentn((prev) => prev == imageArray.length - 1 ? 0 : prev += 1)
    })

    const handleLeftClick = useCallback(() => {
        setcurentposition((prev) => prev == 0 ? imageArray.length - 1 : prev -= 1)
        setcurentp((prev) => prev == 0 ? imageArray.length - 1 : prev -= 1)
    })
    const handleIndicator = useCallback((index) => {
        setcurentposition(index)
        setcurentn(index)
        setcurentp(index)
    })
    const handleImage = (index) => {
        setcurentposition(index)
    }
    return (
        <Property>
            <div className='max-w-[1496px]'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mb-2 mx-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9  space-x-3.5 lg:space-y-2 2xl:space-y-0 space-y-3'>
                        {
                            imageArray.map((item, index) => {
                                return <div key={index}>
                                    <img src={item.img} onClick={() => handleImage(index)} className={`${curentposition === index ? "brightness-200" : "brightness-100"} w-[144px] brightness-50`} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className='2xl:py-10 lg:py-16 py-6 flex flex-col md:flex-row space-x-4 items-center justify-center space-y-3.5 md:space-y-0 px-2  -ml-2.5 gap-6'>
                    <img src={curei.img} className='2xl:w-[720px] xl:w-[650px] sm:w-[550px] w-full   2xl:h-[583px]  rounded-[10px] brightness-[1.5] pr-2.5' />
                    <img src={curep.img} className='2xl:w-[720px] xl:w-[650px] sm:w-[550px] w-full 2xl:h-[583px]  rounded-[10px] brightness-[1.5] pr-2.5 -ml-3' />
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-wrap items-center space-x-10 mx-auto'>
                        {/* left arrow */}
                        <div onClick={handleLeftClick} className='font-bold text-[50px] cursor-pointer'>
                            ←
                        </div>
                        {/* indicate */}

                        <div className='flex flex-wrap space-x-3.5'>
                            {
                                imageArray.map((_, index) => {
                                    return <div onClick={() => handleIndicator(index)} key={index} className={`${curentposition === index ? "bg-blue-800" : "bg-gray-600"} w-[30px] h-[10px] cursor-pointer mt-4`}>

                                    </div>
                                })
                            }
                        </div>

                        {/* right arrow */}
                        <div className='text-[50px] font-bold cursor-pointer' onClick={handleRightClick}>
                            →
                        </div>
                    </div>
                </div>
            </div>
        </Property>
    )
}

export default Carousel
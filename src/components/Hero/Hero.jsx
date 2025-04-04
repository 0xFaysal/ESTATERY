import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import "animate.css";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

import icon1 from "../../assets/Icon (3).png";
import icon2 from "../../assets/Icon (4).png";

import img1 from "../../assets/pic-1.jpg";
import img2 from "../../assets/pic-2.jpg";
import img3 from "../../assets/pic-3.jpg";
import img4 from "../../assets/pic-4.jpg";
import img5 from "../../assets/pic-5.jpg";
import img6 from "../../assets/pic-6.jpg";
import img7 from "../../assets/pic-7.jpg";
import img8 from "../../assets/pic-8.jpg";
import img9 from "../../assets/pic-9.jpg";

function Hero() {
    return (
        <section className='container -z-1 animate__animated animate__fadeIn animate__slow   bg-btnIcon bg-opacity-10 mx-auto  px-4 lg:px-16 flex py-12 lg:py-20 flex-col lg:flex-row '>
            <div className='w-full lg:w-1/2 p-4 lg:p-7'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-7 lg:mt-4'>
                    Buy, rent, or sell your property easily
                </h1>
                <p>
                    A great platform to buy, sell, or even rent your properties
                    without any commissions.
                </p>
                <div className='flex gap-20 mt-6 lg:mt-24'>
                    <div>
                        <img src={icon1} alt='Icon' />
                        <h2 className='font-bold text-primary text-2xl'>
                            50k+ renters
                        </h2>
                        <p className='font-normal text-base'>
                            believe in our service
                        </p>
                    </div>
                    <div>
                        <img src={icon2} alt='Icon' />
                        <h2 className='font-bold text-primary text-2xl'>
                            10k+ properties
                        </h2>
                        <p className='font-normal text-base'>
                            and house ready for occupancy
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:mt-24 h-full -z-1 overflow-hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper -z-10'
                >
                    <SwiperSlide>
                        <img src={img1}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img9}></img>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Hero;

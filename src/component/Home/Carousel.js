import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{
        backgroundImage:
          "url('http://www.shehala.com/public/frontend/images/slides/slider-mainbg-003.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SwiperSlide className="my-slider">
      <div className="hero w-full mt-52 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="http://www.shehala.com/public/frontend/images/slides/slides-011.png"
              className="w-fit"
              data-aos="flip-left"
              alt=""
            />
            <div>
              <div className="flex items-center">
                <p className="text-secondary text-lg">Let your business to GROW</p>
                <div className="yes-stick ml-6"></div>
              </div>
              <h1 className="text-5xl normal-case my-4">
              We Create Beautiful 
              </h1>
              <h1 className="text-6xl text-primary normal-case my-4">Website</h1>
              <p className="pt-6">
                Are you looking for the Best Web Application & Website Design
                Company to develop
              </p>
              <p className="pb-6">
                your online application? Yes! you are in the right place! We are
                best for 100% secured.
              </p>
              <Link to="/service/cms" className="btn btn-primary rounded-none text-white hover:bg-accent font-semibold normal-case text-sm px-9 mr-7 my-2">
                View More Details
              </Link>
              <Link to="/contact" className="btn btn-outline btn-accent rounded-none font-semibold normal-case text-sm px-9 my-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
      <div className="hero w-full mt-52 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="http://www.shehala.com/public/frontend/images/slides/slides-023.png"
              className="w-fit"
              data-aos="flip-left"
              alt=""
            />
            <div>
              <div className="flex items-center">
                <p className="text-secondary text-lg">Trust and Client Focus</p>
                <div className="yes-stick ml-6"></div>
              </div>
              <h1 className="text-5xl normal-case my-4">
                Best{" "}
                <span className="text-primary text-5xl">
                  Quality Web Application
                </span>
              </h1>
              <h1 className="text-6xl normal-case my-4">For Your Business.</h1>
              <p className="pt-6">
                Are you looking for the Best Web Application & Website Design
                Company to develop
              </p>
              <p className="pb-6">
                your online application? Yes! you are in the right place! We are
                best for 100% secured.
              </p>
              <Link to="/service/" className="btn btn-primary rounded-none text-white hover:bg-accent font-semibold normal-case text-sm px-9 mr-7 my-2">
                Read More
              </Link>
              <Link to="/contact" className="btn btn-outline btn-accent rounded-none font-semibold normal-case text-sm px-9 my-2">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
      <div className="hero w-full mt-52 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="http://www.shehala.com/public/frontend/images/slides/slides-012.png"
              className="w-1/2"
              data-aos="flip-left"
              alt=""
            />
            <div>
              <div className="flex items-center">
                <p className="text-secondary text-lg">Let your business to GROW</p>
                <div className="yes-stick ml-6"></div>
              </div>
              <h1 className="text-5xl normal-case my-4">
              We Create Beautiful 
              </h1>
              <h1 className="text-6xl text-primary normal-case my-4">eCommerce Website</h1>
              <p className="pt-6">
                Are you looking for the Best Web Application & Website Design
                Company to develop
              </p>
              <p className="pb-6">
                your online application? Yes! you are in the right place! We are
                best for 100% secured.
              </p>
              <Link to="/service/ecommerce" className="btn btn-primary rounded-none text-white hover:bg-accent font-semibold normal-case text-sm px-9 mr-7 my-2">
                View More Details
              </Link>
              <Link to="/contact" className="btn btn-outline btn-accent rounded-none font-semibold normal-case text-sm px-9 my-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

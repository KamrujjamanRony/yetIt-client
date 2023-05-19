import React from "react";

const Carousel = () => {
  return (
    <div
      className="carousel w-full h-850"
      style={{
        backgroundImage:
          "url('http://www.shehala.com/public/frontend/images/slides/slider-mainbg-003.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="slide1" className="carousel-item relative w-full">
      <div className="hero w-full mt-52 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="http://www.shehala.com/public/frontend/images/slides/slides-011.png"
              className="w-fit"
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
              <button className="btn btn-primary rounded-none text-white hover:bg-accent font-semibold normal-case text-sm px-9 mr-7 my-2">
                View More Details
              </button>
              <button className="btn btn-outline btn-accent rounded-none font-semibold normal-case text-sm px-9 my-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn rounded-none">
            ❮
          </a>
          <a href="#slide2" className="btn rounded-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero w-full mt-52 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="http://www.shehala.com/public/frontend/images/slides/slides-023.png"
              className="w-fit"
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
              <button className="btn btn-primary rounded-none text-white hover:bg-accent font-semibold normal-case text-sm px-9 mr-7 my-2">
                Read More
              </button>
              <button className="btn btn-outline btn-accent rounded-none font-semibold normal-case text-sm px-9 my-2">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn rounded-none">
            ❮
          </a>
          <a href="#slide3" className="btn rounded-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="hero w-full mt-52 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="http://www.shehala.com/public/frontend/images/slides/slides-012.png"
              className="w-1/2"
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
              <button className="btn btn-primary rounded-none text-white hover:bg-accent font-semibold normal-case text-sm px-9 mr-7 my-2">
                View More Details
              </button>
              <button className="btn btn-outline btn-accent rounded-none font-semibold normal-case text-sm px-9 my-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn rounded-none">
            ❮
          </a>
          <a href="#slide1" className="btn rounded-none">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

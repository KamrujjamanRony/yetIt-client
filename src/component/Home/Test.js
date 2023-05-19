import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Test = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const animateImage = () => {
    AOS.refresh();
    imageRef.current.setAttribute('data-aos', 'zoom-in');
    imageRef.current.setAttribute('data-aos-duration', '200');
    setTimeout(() => {
      // Reset animation attributes after 2 seconds to show the image again
      imageRef.current.removeAttribute('data-aos');
      imageRef.current.removeAttribute('data-aos-duration');
    }, 2000);
  };

  return (
    <div id="slide11" className="carousel-item relative w-full">
      <div className="hero w-full mt-52 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="flip-left" data-aos-duration="2000">
            <img
              ref={imageRef}
              src="http://www.shehala.com/public/frontend/images/slides/slides-011.png"
              className="w-fit"
              alt=""
            />
          </div>

          <div>
            {/* Rest of your component code */}
          </div>
        </div>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide11" className="btn rounded-none" onClick={animateImage}>
          ❮
        </a>
        <a href="#slide11" className="btn rounded-none">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Test;

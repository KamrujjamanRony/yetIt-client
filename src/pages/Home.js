import React from 'react';
import AboutUs from '../component/Home/AboutUs';
import Summary from '../component/Home/Summary';
import Services from '../component/Home/Services';
import KnockUs from '../component/Home/KnockUs';
import WhyAreWe from '../component/Home/WhyAreWe';
import Testimonials from '../component/Home/Testimonials';
import WeHelp from '../component/Home/WeHelp';
import Portfolio from '../component/Home/Portfolio';
import Partner from '../component/Home/Partner';
import Blog from '../component/Home/Blog';
import Carousel from '../component/Home/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel />
            <div className="site-main">
                <AboutUs />
                <Summary />
                <Services />
                <KnockUs />
                <WhyAreWe />
                <Testimonials />
                <WeHelp />
                <Portfolio />
                <Partner />
                <Blog />
            </div>
        </div>
    );
};

export default Home;
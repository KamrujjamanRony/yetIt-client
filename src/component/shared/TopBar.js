import React from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaRegClock, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="ttm-topbar-wrapper clearfix">
              <div className="container contain">
                <div className="ttm-topbar-content">
                  <ul className="top-contact text-left">
                    <li>
                    <div className='flex items-center'>
                      <FaPhoneAlt className='mr-2'/> <p>+1 (416) 686-3111</p>
                      </div>
                    </li>

                    <li>
                      <div className='flex items-center'>
                      <FaRegEnvelope className='mr-2'/>
                      <a href="mailto:info@shehala.com">info@shehala.com</a>
                      </div>
                    </li>
                  </ul>

                  <div className="topbar-right text-right">
                    <ul className="top-contact bottom-3">
                      <li>
                      <div className='flex items-center'><FaRegClock className='mr-2' /> <p>Office Hour: 24/6</p>
                      </div>
                        
                      </li>
                    </ul>

                    <div className="ttm-social-links-wrapper list-inline mt-2">
                      <ul className="social-icons mt-3">
                        <li className='mx-2'>
                          <a
                            href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FShehala.IT.Limited"
                            className=" tooltip-bottom"
                            data-tooltip="Facebook"
                          >
                            <FaFacebookF></FaFacebookF>
                          </a>
                        </li>

                        <li  className='mx-2'>
                          <a
                            href="https://twitter.com/ShehalaItLtd"
                            className=" tooltip-bottom"
                            data-tooltip="Twitter"
                          >
                            <FaTwitter></FaTwitter>
                          </a>
                        </li>

                        <li className='mx-2'>
                          <a
                            href="https://www.youtube.com/user/ShehalaIt"
                            className=" tooltip-bottom"
                            data-tooltip="Youtube"
                          >
                            <FaYoutube></FaYoutube>
                          </a>
                        </li>

                        <li className='mx-2'>
                          <a
                            href="https://bd.linkedin.com/in/shehala"
                            className=" tooltip-bottom"
                            data-tooltip="Linkedin"
                          >
                            <FaLinkedinIn></FaLinkedinIn>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="header-btn">
                      <a
                        className="ttm-btn ttm-btn-size-md  ttm-btn-bgcolor-skincolor"
                        href="http://www.shehala.com/contact-us"
                      >
                        Request a Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default TopBar;
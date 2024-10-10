import Link from 'next/link';
import React from 'react';

const HeaderTopTwo = () => {
    return (
        <div className="bd-top__bar-area-3 topbar-padding d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-8">
                        <div className="bd-topbar__contact">
                            <ul>
                                <li><Link href="tel:+(40) 0722-672-725"><i className="fa-regular fa-phone-flip"></i>+(40) 0722-672-725</Link></li>
                                <li><Link href="https://maps.app.goo.gl/BVzJe2d5XkR8tyBYA"><i className="fa-solid fa-location-dot"></i>Strada Gării 20, Aiud 515200, Alba, Romania</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-4">
                        <div className="bd-top__bar-social">
                            <ul><li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link href="#"><i className="fa-brands fa-pinterest-p"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopTwo;
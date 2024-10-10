import Link from 'next/link';
import React from 'react';

const HeaderTop = () => {
    return (
        <div className="bd-top__bar-area-2 grey-bg-3 d-none d-lg-block">
            <div className="container-fluid">
                <div className="bd-top__bar-main d-flex justify-content-end">
                    <div className="col-xxl-10 col-xl-12 col-12">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-9">
                                <div className="bd-topbar__regtangle ">
                                    <div className="bd-topbar__contact">
                                        <ul>
                                            <li><Link href="tel:+(40) 0722-672-725"><i className="fa-regular fa-phone-flip"></i>+(40) 0722-672-725</Link></li>
                                            <li><Link href="https://maps.app.goo.gl/v7W4Y9wR5bCewUqZ9"><i className="fa-solid fa-location-dot"></i>Str. Gării 20, Aiud 515200, Alba, Romania</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-3">
                                <div className="bd-top__bar-social">
                                <ul>
                            <li>Retele de socializare:</li>
                            <li>
                              <Link href="https://www.facebook.com/4garden.ro" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                            
                            <li>
                              <Link href="https://www.instagram.com/ciumbrud_plant/" target="_blank" title="Instagram">
                                <i className="fab fa-instagram"></i>
                              </Link>
                            </li>
                          </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
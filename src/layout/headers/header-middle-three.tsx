import Link from 'next/link';
import React from 'react';

const HeaderMiddleThree = () => {
    return (
        <div className="bd-topbar-area__middle d-none d-lg-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-md-8">
                        <div className="bd-topbar__contact">
                            <ul>
                                <li>  <li><Link href="tel:+(40) 0722-672-725"><i className="fa-regular fa-phone-flip"></i>+(40) 0722-672-725</Link></li></li>
                                <li><Link href="https://maps.app.goo.gl/BVzJe2d5XkR8tyBYA"><i className="fa-solid fa-location-dot"></i>Strada Gării 20, Aiud 515200, Alba, Romania</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-4">
                        <div className="bd-treak__right bd-treak__right3">
                            <div className="border-lefts">
                                <select name="lan-select" id="lan-select" className="language-select">
                                    <option defaultValue="1">Romana</option>
                                    <option defaultValue="2">-</option>
                                    <option defaultValue="3">-</option>
                                    <option defaultValue="4">-</option>
                                    <option defaultValue="5">-</option>
                                </select>
                            </div>
                            <div className="border-left">
                                <select name="currency-select" id="currency-select" className="currency-select border-left">
                                    <option defaultValue="1">RON</option>
                                    <option defaultValue="2">-</option>
                                    <option defaultValue="3">-</option>
                                    <option defaultValue="4">-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddleThree;
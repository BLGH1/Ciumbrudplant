import Link from 'next/link';
import React from 'react';

const HeaderTopThree = () => {
    return (
        <div className="bd-top__bar-area theme-bg d-none d-sm-block">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-xxl-6 col-xl-6 col-md-8 col-sm-7">
                        <div className="bd-topbar__text">
                            <p>Suntem unii dintre cei mai mari producatori</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-4 col-sm-5">
                        <div className="bd-header__top-link justify-content-end">
                            <Link href="/about">Despre noi</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopThree;
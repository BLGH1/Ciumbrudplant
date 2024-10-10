import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import thumb1 from "../../../public/assets/img/banner/banner-1-cp.jpg"
import thumb2 from "../../../public/assets/img/banner/banner-line-cp.jpg"
import Image from 'next/image';
import HeroSlider from './HeroSlider';
const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
        <section className="bd-banner__area grey-bg banner__overlay banner__height-1 p-relative">
            {/*<div className="bd-banner__image-1">
                <Image src={thumb1} alt=""/>
            </div>*/}
            <div className="container">
                <div className="row g-0 align-items-center">
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="bd-banner__content-box mb-60">
                            <div className="bd-banner__text">
                                <h2> Bine ai <br />Venit</h2>
                            </div>
                            <div className="row">
                                <div className="col-xxl-5">
                                </div>
                                <div className="col-xxl-6">
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='E1AYl0wakL4?si=W2CrNmzcz-7gBJHF' onClose={() => { openVideoModal(); }} />
                                    <div className="bd-banner__content__wrap">
                                        <div className="bd-banner__content">
                                            <p>Suntem o echipă tânără și dinamică, am început activitatea în anul 2005, cu obiect principal de activitate producerea de material săditor viticol, pomicol și dendrologic.</p>
                                            <div className="bd-banner__button">
                                                <div className="bd-button__inner">
                                                    <Link className="bd-bn__btn-1" href="https://www.4garden.ro/">Cumpără de pe 4Garden</Link>
                                                </div>
                                                <div className="bd-banner__link">
                                                    <span className="banner-video__btn popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i><span>Vizionare<br />video</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <HeroSlider/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
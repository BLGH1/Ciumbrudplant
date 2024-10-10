
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../../../public/assets/img/logo/logo-ciumbrud.png";
import support from "../../../public/assets/img/icon/support.png";
import discover from "../../../public/assets/img/icon/discover.png";
import masterCard from "../../../public/assets/img/icon/mastercard.png";
import paypal from "../../../public/assets/img/icon/paypal.png";
import visa from "../../../public/assets/img/icon/visa.png";
import { categoryData } from "@/data/json-data/category-data";
const FooterOne = () => {
  
  return (
    <footer>
      <section className="bd-footer__area grey-bg pt-100 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget footer-col-1 mb-60">
                <div className="bd-footer__info">
                  <div className="bd-footer__logo">
                    <Link href="/">
                      <Image src={footerLogo} alt="footer-logo" />
                    </Link>
                  </div>
                  <p>
                    Produsele le puteți cumpăra de pe magazinul nostru 4Garden.ro
                  </p>
                  <div className="bd-footer__contact">
                    <span>
                      <Link href="mailto:ciumbrudplant@gmail.com">
                        <i className="fa-regular fa-envelope"></i>
                        ciumbrudplant@gmail.com{" "}
                      </Link>{" "}
                    </span>
                    <span>
                      <i className="fa-solid fa-location-dot"></i>Str. Gării 20, Aiud 515200, Alba, România
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget footer-col-2 mb-60">
                <div className="bd-footer__widget-title">
                  <h4>Linkuri către magazinul nostru</h4>
                </div>
                <div className="bd-footer__link">
                <ul>
                    <li>
                      <Link href="https://www.4garden.ro/pomi-fructiferi/">Pomi Fructiferi</Link>
                    </li>
                    <li>
                      <Link href="https://www.4garden.ro/butasi-trandafiri/">Butași trandafiri</Link>
                    </li>
                    <li>
                      <Link href="https://www.4garden.ro/butasi-vita-de-vie/">Butași Viță de Vie</Link>
                    </li>
                    <li>
                      <Link href="https://www.4garden.ro/arbusti-fructiferi/">Arbuști Fructiferi</Link>
                    </li>
                    
                  </ul>
                  {/* 
                  <ul>
                    <li>
                      <Link href="/about">About Our Company</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link href="/shop">Flash Offers</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                  */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget footer-col-3 mb-60">
                {/* 
                <div className="bd-footer__widget-title">
                  <h4>Categories</h4>
                </div>
                <div className="bd-footer__link">
                  <ul>
                    
                   {
                    categoryData?.length ?
                    <>
                     {
                      categoryData.slice(0,6).map((item)=>(
                        <li key={item?._id}>
                        <Link className="text-capitalize" href="/shop">{item?.categoryName}</Link>
                      </li>
                      ))
                     }
                    </>
                    :
                    <>
                    </>
                   }
                  </ul>
                </div>
                */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget mb-60">
                
                <div className="bd-footer__support-wrapper">
                  <div className="bd-fotter__support-icon">
                    <Image src={support} alt="support-img" />
                  </div>
                  <div className="bd-footer__support-inner">
                    <span>9:00 - 16:00 </span>
                    <h4>
                      <Link href="tel:+(40) 0722-672-725">+(40) 0722-672-725</Link>{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bd-sub__fotter">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="bd-footer__copyright">
                <ul>
                  <li>All Rights Reserved</li>
                  <li>
                    Copyrighted by ©2024{" "}
                    <span>
                      CiumbrudPlant SRL
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;

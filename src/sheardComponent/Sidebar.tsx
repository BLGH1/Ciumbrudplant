import Link from "next/link";
import React from "react";
import useGlobalContext from "../hooks/use-context";
import CartIcon from "../sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "../sheardComponent/elements/icons/wishlist-icon";
import logo from "../../public/assets/img/logo/logo-ciumbrud.png";
import Image from "next/image";
import MobileMenu from "./elements/MobileMenu";
const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const safeSetShowSidebar = setShowSidebar || (() => {});

  return (
    <>
      <div className="fix">
        <div className={`side-info ${showSidebar ? "info-open" : ""}`}>
          <div className="side-info-content">
            <div className="modals-content">
              <div className="offcanvas__wrapper">
                <div className="offcanvas__content">
                  <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                    <div className="offcanvas__logo logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="offcanvas__close">
                      <button
                        className="offcanvas__close-btn"
                        onClick={() => safeSetShowSidebar(false)}
                      >
                        <i className="fal fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bd-utilize__buttons mb-25 d-none">
                    <div className="bd-action__item">
                      <div className="bd-action__cart d-none">
                        <div className="bd-action__cart-icon">
                          <span className="bd-cart-mini-btn">
                            <CartIcon />
                          </span>
                          <span className="bd-action__item-number cart-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-action__item d-none">
                      <div className="bd-action__wishlist">
                        <div className="bd-action__wistlist-icon">
                          <span className="bd-cart-mini-btn">
                            <WishlistIcon />
                          </span>
                          <span className="bd-action__item-number wishlist-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                   

                    <MobileMenu />
                  </nav>
                  <div className="offcanvas__contact mt-30 mb-20">
                    <h4>Contact Info</h4>
                    <ul>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link
                            target="_blank"
                            href="https://maps.app.goo.gl/BVzJe2d5XkR8tyBYA"
                          >
                            Str. Gării 20, Aiud 515200, Alba, Romania
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="far fa-phone"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link href="tel:+(40) 0722-672-725">+(40) 0722-672-725</Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-envelope"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link href="mailto:ciumbrudplant@gmail.com">
                            <span className="mailto:ciumbrudplant@gmail.com">
                              ciumbrudplant@gmail.com{" "}
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas__social">
                    <ul>
                      <li>Share:</li>
                      <li>
                        <Link href="https://www.facebook.com/4garden.ro" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      
                      <li>
                        <Link
                          href="https://www.instagram.com/ciumbrud_plant/"
                          target="_blank"
                          title="Instagram"
                        >
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

      <div
        onClick={() => safeSetShowSidebar(false)}
        className={`offcanvas-overlay ${showSidebar ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useGlobalContext from "../../hooks/use-context";
import HeaderMiddleThree from "./header-middle-three";
import HeaderTopThree from "./header-top-three";
import NavMenu from "./navmenu";
import logo from "../../../public/assets/img/logo/logo-ciumbrud.png";
import support from "../../../public/assets/img/icon/support.png";
import Image from "next/image";
import CartIcon from "@/sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "@/sheardComponent/elements/icons/wishlist-icon";
import Sidebar from "@/sheardComponent/Sidebar";
import userIcon from "../../../public/assets/img/icon/user-icon.png";
import CategoryItem from "@/components/home-three/CategoryItem";
import SidebarCart from "./SidebarCart";

import whiteLogo from "../../../public/assets/img/logo/logo-ciumbrud.png";
import blackLogo from "../../../public/assets/img/logo/logo-ciumbrud.png";
import headerLogo from "../../../public/assets/img/logo/logo-bg.png";
import hotline from "../../../public/assets/img/icon/action-hotline.png";
import {
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import { usePathname } from "next/navigation";
import SidebarWishlist from "./SidebarWishlist";
const HeaderThree = () => {
  const pathName = usePathname();
  const {
    setShowSidebar,
    setOpenCart,

    setOpenWishlist,
  } = useGlobalContext();
  const safeSetShowSidebar = setShowSidebar || (() => {});
  const [catMenuOpen, setCatMenuOpen] = useState(false);
  const productQuantity = useUniqueProductCount();
  const wishlistQuantity = useUniqueWishlstCount();

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = () => {
    const header = document.querySelector("#header-sticky");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 40
        ? header.classList.add("header-sticky")
        : header.classList.remove("header-sticky");
    }
  };
  

  // Sticky Menu Area End
  return (
    <>
      <header>
        <HeaderTopThree />
        <HeaderMiddleThree />
        <div id="header-sticky">
          <div className="bd-header__area-2 position-relative">
            <div className="container">
              <div className="bd-header__main-wrapper-2">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="bd-header__main-content">
                      <div className="bd-header__left-2">
                        <div className="bd-header__logo-2 p-relative">
                          <Link href="/">
                            <Image
                              className="logo-white"
                              src={whiteLogo}
                              alt="logo"
                            />
                            <Image
                              className="logo-black"
                              src={blackLogo}
                              alt="logo"
                            />
                          </Link>
                          {/*<div className="bd-header__logo-bg">
                            <Image src={headerLogo} alt="logo-bg" />
                          </div>
                          */}
                        </div>
                        <div className="main-menu d-none d-none d-lg-block">
                          <nav id="mobile-menu">
                            <NavMenu />
                          </nav>
                        </div>
                      </div>
                      <div className="bd-header__right header__right-2">
                        <div className="bd-action__cart-list justify-content-end">
                          {/* 
                          <div className="bd-action__item bd-action__item-search">
                            <div className="bd-action__item">
                              <div className="bd-action__search-icon p-relative">
                                <span
                                  className={
                                    searchOpen
                                      ? "search-toggle bd-h-search bd-cart-mini-btn opened"
                                      : "search-toggle bd-h-search bd-cart-mini-btn"
                                  }
                                  onClick={() => {
                                    setSearchOpen(!searchOpen);
                                  }}
                                >
                                  <SearchIcon />
                                  <i className="fal fa-times"></i>
                                </span>
                                <div
                                  className={
                                    searchOpen
                                      ? "bd-search__toggle header_search-open"
                                      : "bd-search__toggle"
                                  }
                                >
                                  <form action="#">
                                    <input
                                      type="text"
                                      placeholder="Search here..."
                                    />
                                    <button type="submit">
                                      <i className="fal fa-search"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bd-action__item bd-action__item-cart">
                            <div className="bd-action__cart">
                              <div
                                className="bd-action__cart-icon"
                                onClick={() => setOpenCart(true)}
                              >
                                <span className="bd-cart-mini-btn">
                                  <CartIcon />
                                </span>
                                <span className="bd-action__item-number cart-count">
                                  {productQuantity}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bd-action__item">
                            <div className="bd-action__wishlist">
                              <div
                                className="bd-action__wistlist-icon"
                                onClick={() => setOpenWishlist(true)}
                              >
                                <span className="bd-cart-mini-btn">
                                  <WishlistIcon />
                                </span>
                                <span className="bd-action__item-number wishlist-count">
                                  {wishlistQuantity}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bd-action__item d-sm-flex  align-items-center">
                            <div className="bd-action__cart">
                              <div className="bd-action__cart-icon">
                                <Link
                                  className="header-author-img"
                                  href="/profile"
                                >
                                  <Image
                                    src={userIcon}
                                    width={50}
                                    height={50}
                                    style={{
                                      width: "auto",
                                      height: "auto",
                                    }}
                                    alt="trending-quite"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          */}
                        </div>
                        
                        <div className="bd-action__hotline d-none d-xl-block">
                          <div className="bd-hotline__inner">
                            <div className="bd-hotline__icon">
                              <Image src={hotline} alt="hotline-icon" />
                            </div>
                            <div className="bd-hotline__text">
                              <span>Contact</span>
                              <Link href="tel:+(40) 0722-672-725">
                              +(40) 0722-672-725
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="header__hamburger d-flex d-xl-none">
                          <button
                            type="button"
                            className="hamburger-btn"
                            onClick={() => safeSetShowSidebar(true)}
                          >
                            <span className="hamburger-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      <Sidebar />
      <SidebarCart />
      <SidebarWishlist />
    </>
  );
};

export default HeaderThree;
{/*<div className="bd-header__border">
          <div id="header-sticky" className="bd-header__middle-inner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                  <div className="bd-header__logo-3">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                  <div className="bd-header__left">
                    <div className="main-menu d-none d-none d-lg-block">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                </div>
               
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                  <div className="bd-header__right d-flex align-items-center justify-content-end">
                     
                    <div className="bd-action__cart-list">
                      <div className="bd-action__item">
                        <div className="bd-action__cart">
                          <div
                            className="bd-action__cart-icon"
                            onClick={() => setOpenCart(true)}
                          >
                            <span className="bd-cart-mini-btn">
                              <CartIcon />
                            </span>
                            <span className="bd-action__item-number cart-count">
                              {productQuantity}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bd-action__item">
                        <div className="bd-action__wishlist">
                          <div
                            className="bd-action__wistlist-icon"
                            onClick={() => setOpenWishlist(true)}
                          >
                            <span className="bd-cart-mini-btn">
                              <WishlistIcon />
                            </span>
                            <span className="bd-action__item-number wishlist-count">
                              {wishlistQuantity}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bd-action__item d-sm-flex align-items-center">
                        <div className="bd-action__cart">
                          <div className="bd-action__cart-icon">
                            <Link className="header-author-img" href="/profile">
                              <Image
                                src={userIcon}
                                width={50}
                                height={50}
                                style={{
                                  width: "auto",
                                  height: "auto",
                                }}
                                alt="trending-quite"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                     
                     <div className="header__hamburger d-flex ml-25">
                     <button
                       type="button"
                       className="hamburger-btn"
                       onClick={() => safeSetShowSidebar(true)}
                     >
                       <span className="hamburger-icon">
                         <span></span>
                         <span></span>
                         <span></span>
                       </span>
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         {pathName === "/shop" || pathName === "/blog" ? (
           <>
             <div className="bd-header__buttom d-none d-sm-block">
               <div className="container">
                 <div className="row align-items-center">
                   <div className="col-xxl-8 col-xl-8 col-md-8 col-sm-6">
                     <div className="bd-header__butttom-left">
                       <div className="bd-header__category-nav p-relative">
                         <div
                           className={
                             catMenuOpen
                               ? "bd-category__click items-open"
                               : "bd-category__click"
                           }
                           onClick={() => {
                             setCatMenuOpen(!catMenuOpen);
                           }}
                         >
                           <div className="bd-bar__icon">
                             <span></span>
                             <span></span>
                             <span></span>
                           </div>
                           <span>All Categories</span>
                         </div>
                         <div
                           className={
                             catMenuOpen
                               ? "category__items d-block"
                               : "category__items"
                           }
                         >
                           <div className="category-item">
                             <CategoryItem />
                           </div>
                         </div>
                       </div>
                       <div className="bd-header__filterbar d-none d-md-block">
                         {pathName === "/shop" || pathName === "/blog" ? (
                           <>
                             <form className="bd-filter__input" action="#">
                               <input
                                 type="text"
                                 placeholder={
                                   pathName === "/shop"
                                     ? "Search products..."
                                     : "Search Blogs..."
                                 }
                               />
                               <button>
                                 <i className="flaticon-magnifiying-glass"></i>
                               </button>
                             </form>
                           </>
                         ) : (
                           <></>
                         )}
                       </div>
                     </div>
                   </div>
                   <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-6">
                     <div className="bd-action__support d-flex justify-content-end">
                       <div className="bd-support__inner">
                         <div className="bd-support__icon">
                           <Image src={support} alt="support-icon" />
                         </div>
                         <div className="bd-support__text">
                           <span>8:30 AM - 9:30 PM</span>
                           <Link href="tel:878-185-287">(+2) 695 023 52</Link>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </>
         ) : (
           <></>
         )}
       </div> 
       
*/}
import Link from "next/link";
import React from "react";
import footerlogo from "../../../public/assets/img/logo/logo-ciumbrud.png";
import Image from "next/image";
const FooterThree = () => {
  return (
    <footer>
      <div className="bd-footer__area grey-bg pt-100 pb-60">
        <div className="bd-footer__style-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="bd-footer__widget text-center mb-40">
                  <div className="bd-footer__logo">
                    <Link href="/">
                      <Image src={footerlogo} alt="footer-logo" />
                    </Link>
                  </div>
                </div>
                <div className="bd-footer__widget text-center mb-40">
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
                  </div>
                </div>
                <div className="bd-footer__widget text-center mb-40">
                  <div className="bd-footer__social">
                    <Link href="https://www.facebook.com/4garden.ro" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>


                    <Link
                      href="https://www.instagram.com/ciumbrud_plant/"
                      target="_blank"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-sub__fotter">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="bd-footer__copyright text-center">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;

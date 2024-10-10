import Link from "next/link";
import React from "react";
import thumb1 from "../../../public/assets/img/about/about-big-shape.png";
import thumb2 from "../../../public/assets/img/about/about-icon.png";
import thumb3 from "../../../public/assets/img/banner/Munca-1.jpg";
import thumb4 from "../../../public/assets/img/banner/firma.jpg";
import thumb5 from "../../../public/assets/img/about/about-shape-1.png";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="bd-about__area grey-bg p-relative z-index-1 pt-130 pb-70">
      <div className="container">
        <div className="bd-about__bg-wrapper p-relative">
          <Image
            style={{ width: "100%", height: "auto" }}
            className="bd-about__bg-shape "
            src={thumb1}
            alt="about-big-shape"
          />
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="bd-about__content-wrapper mb-60">
              <div className="bd-section__title-wrapper mb-35">
                <span className="bd-sub__title"></span>
                <h2 className="bd-section__title mb-35">
                   Începuturi
                </h2>
                <p>
                Înainte de 1989, familia noastră era cunoscută ca producător de viță de vie. După aceea, 
                ne-am axat pe pomi fructiferi și trandafiri. La începutul anilor 90, noi, tinerii din 
                Ciumbrud, am început să vedem potențialul economiei de piață, am venit cu 
                dinamică și, datorită renumelui tatălui meu, am făcut o afacere - <b>Emeric Bakk, 
                administrator Ciumbrud Plant. </b><br></br>
                Pe parcursul anilor, prin multă muncă, perseverență și devotament, societatea noastră s-a 
                dezvoltat și am ajuns la un nou nivel. Astfel, a luat naștere firma actuală pe care am decis 
                să o numim Ciumbrud Plant. Acest nume include localitatea în care ne desfășurăm 
                activitatea, dar și elementul de bază al activității noastre.
                </p>
              </div>
              <div className="bd-section__title-wrapper mb-35">
                <span className="bd-sub__title"></span>
                <h2 className="bd-section__title mb-35">
                    Despre noi
                </h2>
                <p>
                  SC CIUMBRUD PLANT are ca și obiect principal de activitate producerea de material 
                  săditor viticol, pomicol și dendrologic. Firma este localizată în <b>județul Alba, localitatea
                  Ciumbrud</b>, zonă renumită și cu tradiție în desfășurarea acestei activități. 
                  
                  <br></br>
                </p>
              </div>
              <div className="bd-about__content">
                <div className="bd-about__features">
                  <div className="bd-adbout__icon">
                    <Image style={{ width: "100%", height: "100%" }} src={thumb2} alt="about-icon" />
                  </div>
                  <div className="bd-about__text">
                    <h4>Calitate</h4>
                    <p>
                    Plantele produse de societatea noastră, datorita condițiilor climatice și a solului favorabil 
                    din zonă, sunt rezistente, sănătoase, ceea ce asigura condiții de plantare favorabile
                    </p>
                  </div>
                </div>
                <div className="bd-about__action">
                  <Link className="bd-bn__btn-1" href="https://www.4garden.ro/">{/*/ahout */}
                    Comandă de pe 4Garden
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* 
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="bd-about__thumb-wrapper p-relative mb-60 ">
              
              <div className="bd-about__thumb-1 w-img">
                <Image
                  src={thumb3}
                  alt="about-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
             
              <div className="bd-about__thumb-2">
                <Image
                  src={thumb4}
                  alt="about-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="bd-about__quite-box">
                <div className="quite-content">
                  <p>{`"Fiecare grădină este o poveste de dragoste între om și natură."`}</p>
                </div>
                <div className="quite-icon">
                  <i className="flaticon-quote"></i>
                </div>
                <div className="bd-about__quite-name">
                  <span>Geoff Hamilton</span>
                </div>
              </div>
              
              <div className="bd-about__shape-2"></div>
              <div className="bd-about__shape-3"></div>
              <div className="bd-about__shape-4"></div>
              
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

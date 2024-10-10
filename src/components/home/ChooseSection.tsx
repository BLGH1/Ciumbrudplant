import React from "react";
import timelineList from "../../data/timeline-data";
import Image from "next/image";

import thumb1 from "../../../public/assets/img/why-choose/why-choose-big.png"

const ChooseSection = () => {
  return (
    <section className="bd-why-choose__area grey-bg-2 pt-125 pb-195">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bd-section__title-wrapper text-center mb-60">
              <span className="bd-sub__title">Motive</span>
              <h2 className="bd-section__title mb-30">
              De ce să ne alegeți?
              </h2>
            </div>
          </div>
        </div>
        {timelineList && (
          <div className="row g-0 align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="bd-choose__wrapper choose-wrapper__left mb-60">
                {timelineList.slice(0, 4).map((item, num) => (
                  <div className="bd-choose__item" key={num}>
                    <div className="bd-choose__content text-end">
                      <h4>{item.timelineTitle}</h4>
                      <p>{item.timelineDesc1}<br></br>{item.timelineDesc2}</p>
                    </div>
                   {/** */}
                    <div className="bd-choose__icon choose-icon__left">
                      <Image
                        width={800}
                        height={800}
                        style={{ width: "100%", height: "auto" }}
                        src={item.timelineIcon}
                        alt="why-choose-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="bd-choose__thumb text-center w-img mb-30">
                <Image
                  src={thumb1}
                  alt="choose-big"
                  width={500}
                  height={500}
                  style={{ width: "70%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="bd-choose__wrapper choose-wrapper__right mb-60">
                {timelineList.slice(4, 8).map((item, num) => (
                  <div className="bd-choose__item" key={num}>
                    <div className="bd-choose__content text-end">
                      <h4>{item.timelineTitle}</h4>
                      <p>{item.timelineDesc1}<br></br>{item.timelineDesc2}</p>
                    </div>
                    <div className="bd-choose__icon choose-icon__left">
                      <Image
                        width={700}
                        height={700}
                        style={{ width: "100%", height: "auto" }}
                        src={item.timelineIcon}
                        alt="why-choose-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChooseSection;

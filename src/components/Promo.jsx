import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/yt.png';

gsap.registerPlugin(ScrollTrigger);

function Promo() {
  useEffect(() => {
    gsap.utils.toArray(".promotxt").forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(
            elem,
            { x: 100, autoAlpha: 0 },
            { duration: 1.25, x: 0, autoAlpha: 1, ease: "back", overwrite: "auto" }
          );
        },
        onLeave: () => {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: () => {
          gsap.fromTo(
            elem,
            { x: -100, autoAlpha: 0 },
            { duration: 1.25, x: 0, autoAlpha: 1, ease: "back", overwrite: "auto" }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
      });
    });
  }, []);

  return (
    <>
      <div className="promopart" id="promo" style={{ marginTop: '150px' }}>
        <h5 className="fw-bolder text-center">Promo Videos</h5>
        <div className="d-flex justify-content-evenly align-items-center prom1">
          <img src={img1} alt="Promo Video" />
          <div className="text  promotxt">
            <p className="fw-bolder">
              Fugeniz.9 Promo
            </p>
            <span className="text-justify promotxt">
              <em>Featured in FUGENIZ 9, the prestigious annual tech fest of our college, is a captivating promotional video meticulously crafted under my direction and editing prowess. Produced in 2023, this dynamic video showcases the essence and excitement of FUGENIZ, encapsulating the spirit of innovation and creativity that defines our institution's technological endeavors.</em>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-evenly align-items-center prom1">
          <img src={img1} alt="Logo Video" />
          <div className="text promotxt">
            <p className="fw-bolder">
              Fugeniz.9 Logo
            </p>
            <span className="text-justify promotxt">
              <em>
                The logo revealing video made by me for the tech fest. This captivating visual presentation showcases the unveiling of the FUGENIZ 9 logo in stunning 3D animation.
              </em>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo;

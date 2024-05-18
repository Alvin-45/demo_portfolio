import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img2 from '../assets/img2.png';
import img3 from '../assets/im2.png';

gsap.registerPlugin(ScrollTrigger);

function Works() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.utils.toArray(".work-item").forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 0%",
        onEnter: () => {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: "back", overwrite: "auto" }
          );
        },
        onLeave: () => {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: () => {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: "back", overwrite: "auto" }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
      });
    });
  }, [active]);

  const handlePost = () => {
    setActive(0);
  };
  const handleWeb = () => {
    setActive(1);
  };
  const handleArt = () => {
    setActive(2);
  };

  return (
    <>
      <div className="" id="workspage">
        <div id="work" className="d-flex justify-content-evenly align-items-center fw-bolder pt-5">
          <p onClick={handlePost}>Posters</p>
          <p onClick={handleWeb}>Web Apps</p>
          <p onClick={handleArt}>Art</p>
        </div>
        <div className="works pt-5" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
          {active === 0 && (
            <div className="posters d-flex justify-content-evenly align-items-center w-100" style={{ overflowX: 'auto' }}>
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
            </div>
          )}
          {active === 1 && (
            <div className="posters d-flex justify-content-evenly align-items-center w-100" style={{ overflowX: 'auto' }}>
              <img className="work-item" src={img3} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img3} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img3} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img3} alt="" style={{ width: '30%' }} />
            </div>
          )}
          {active === 2 && (
            <div className="posters d-flex justify-content-evenly align-items-center w-100" style={{ overflowX: 'auto' }}>
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
              <img className="work-item" src={img2} alt="" style={{ width: '30%' }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Works;

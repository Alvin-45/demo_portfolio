import React, { useEffect, useState } from 'react'
import img1 from '../assets/pic.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Profile() {
    useEffect(() => {
        gsap.utils.toArray(".profile").forEach((elem) => {
          ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
              gsap.fromTo(
                elem,
                { x: 100, autoAlpha: 0 },
                { duration: 2.25, x: 0, autoAlpha: 1, ease: "back", overwrite: "auto" }
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
            <div className="profile" id='about' style={{marginTop:'250px'}}>
                <div className="d-flex justify-content-evenly align-items-center prom1">
                    <img src={img1} alt=""  className='profimg'/>
                    <div className="text selfintro">
                        <p className="self">
                            Hello,</p>
                        <p className='self'>I'm a graduate in Bachelor of Technology in Computer Science and Engineering from the
                            APJ Abdul Kalam Technological University</p>
                        <p  className='self'>
                            My work combines design, technology & art to generate ideas & concepts.
                            My interest lies in creating interactive & moving experiences.</p>
                        <p className='self'>
                            On the side, I love discovering new music genres & watching behind
                            the scenes of movies on Youtube.

                        </p>
                        <button className="text-light btn1 rounded mt-4">Download Resume</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
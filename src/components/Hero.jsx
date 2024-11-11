import React from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { useState } from 'react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect } from 'react';
function Hero() {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  useGSAP(()=>{
    gsap.to("#hero",{
      opacity:1,
      delay: 2,
    })

    gsap.to("#cta",{
      opacity:1,
      y:-40,
      delay: 2,
    })
  },[])


  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }   

    }

    useEffect(()=>{
      window.addEventListener("resize",handleVideoSrcSet)

      return ()=>{
        window.removeEventListener("resize",handleVideoSrcSet)
      }
    },[]) 

  return (
  <section className='w-full sm:nav-height bg-black relative'>
    <div className='h-5/6 w-full flex-center flex-col'> 
      <p id='hero' className='hero-title'>IPHONE 15 PRO</p>
      {/* Add Video here */}
    <div className='md:w-10/12 w-9/12'>
      <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
    </div>
    <div id='cta' className='flex flex-col items-center mt-2 opacity-0 translate-y-20'>
      <a href="#highlight" className='btn'> Buy</a>
      <p className='font-normal text-xl'>From $199/month or $999</p>
    </div>
  </section>
  )
}

export default Hero
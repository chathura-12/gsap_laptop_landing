import "../styles/Hero.css";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, [])

  return (
    <section className="hero layout-wrapper">
      <div className="hero-title">
        <h2>AetherPad Pro</h2>
        <img className="hero-mainTitle" src="/title.svg" alt="title" />
      </div>
      <video ref={videoRef} className="hero-media" src="/background.mkv" autoPlay muted playsInline/>
      <button className="button">Buy</button>
      <p>From $1500 or $130/mo for 12 months</p>
    </section>
  )
}

export default Hero

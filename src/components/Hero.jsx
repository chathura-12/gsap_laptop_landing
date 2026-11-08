import "../styles/Hero.css";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.6;
  }, [])

  return (
    <section id="hero" className="layout-wrapper">
      <div className="hero-title">
        <h3>AetherPad Pro</h3>
        <h1>Engineered for Thinkers</h1>
      </div>
      <div className="media">
        <video ref={videoRef} className="hero-video" src="/background.mkv" autoPlay muted playsInline/>
      </div>
      <div className="item-content">
        <button className="button">Buy</button>
        <p>From $1500 or $130/mo for 12 months</p>
      </div>
    </section>
  )
}

export default Hero

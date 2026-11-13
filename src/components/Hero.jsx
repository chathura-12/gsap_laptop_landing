import "../styles/Hero.css";
import { useEffect, useRef } from "react";

const Hero = ({isLoading}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (!isLoading && videoRef.current){
      videoRef.current.play().catch((error) => {
        console.log("Video playback prevented by browser:", error);
      })
      videoRef.current.playbackRate = 0.6;
    }
    // if (videoRef.current)
  }, [isLoading])

  return (
    <section id="hero" className="layout-wrapper">
      <div className="hero-title">
        <h3>AetherPad Pro</h3>
        <h1>Engineered for Thinkers</h1>
      </div>
      <div className="media">
        <video ref={videoRef} className="hero-video" src="/background.mkv" muted playsInline/>
      </div>
      <div className="item-content">
        <button className="button">Buy</button>
        <p>From $1500 or $130/mo for 12 months</p>
      </div>
    </section>
  )
}

export default Hero

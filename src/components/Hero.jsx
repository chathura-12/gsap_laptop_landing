import "../styles/Hero.css";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1;
  }, [])

  return (
    <section className="hero layout-wrapper">
      <div className="hero-title">
        <h2>MacBook Pro</h2>
        <h1>Engineered for Thinkers</h1>
      </div>
      <div className="hero-media"></div>
      {/* <video ref={videoRef} className="hero-media" src={media} autoPlay muted playsInline/> */}
      <button>Buy</button>
    </section>
  )
}

export default Hero

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performancs from "./components/Performancs";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from "lenis/react";
import 'lenis/dist/lenis.css'
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const LenisScrollTriggerSync = () => {
  useLenis(() => {
    ScrollTrigger.refresh()
  })
  return null
}

const App = () => {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{autoRaf:false, lerp: 0.8, duration: 1.2}}>
      <main>
        <LenisScrollTriggerSync />
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performancs />
        <Features />
        <Highlights />
      </main>
    </ReactLenis>
  )
}

export default App

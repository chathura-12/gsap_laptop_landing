import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performancs from "./components/Performancs";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from "lenis/react";
import 'lenis/dist/lenis.css'
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const LenisController = ({ isLoading }) => {
  const lenis = useLenis(() => {
    ScrollTrigger.refresh()
  })

  useEffect(() => {
    if (!lenis) return;

    if (isLoading) {
      lenis.stop();
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      lenis.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [lenis, isLoading]);

  return null;
}

const App = () => {
  const[isLoading, setIsLoding] = useState(true);
  const[isExiting, setIsExiting] = useState(false)
  const[progress, setProgress] = useState(0)
  const lenisRef = useRef()
  const appRef = useRef(null)

  useEffect(() => {
    if(isLoading) {
      console.log(isLoading)
      document.body.style.overflow = "hidden";
      lenisRef.current?.lenis?.stop()
    }
    else{
      document.body.style.overflow = "";
      lenisRef.current?.lenis?.start()
    }

    return() => {
      document.body.style.overflow = "";
      lenisRef.current?.lenis?.start()
    }
  }, [isLoading])

  useEffect(() => {
    function update(time) {
      if(isLoading) return;
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [isLoading])

  useEffect(() => {
    const images = document.querySelectorAll('img');

    const medias = [...images]
    const totalMedia = medias.length

    if(totalMedia === 0) {
      setProgress(100)
      setIsLoding(false)
      return;
    }

    let loadedCount = 0

    const handleAssetLoaded = () => {
      loadedCount += 1;
      const currentPercent = Math.round((loadedCount / totalMedia) * 100);
      setProgress(currentPercent)

      if (loadedCount >= totalMedia){
        setTimeout(() => {
          setIsExiting(true)
        }, 1200)
        setTimeout(() => {
          setIsLoding(false)
        }, 2000)
      }
    }

    medias.forEach((media) => {
      if(media.complete){
        handleAssetLoaded()
      }else{
        media.addEventListener('load', handleAssetLoaded)
        media.addEventListener('error', handleAssetLoaded)
      }
    })

    return () => {
      medias.forEach((media) => {
        media.removeEventListener('load', handleAssetLoaded);
        media.removeEventListener('error', handleAssetLoaded);
      });
    };
  }, [])

  useGSAP(() => {
    if(!isExiting) return;

    gsap.to(".loading-overlay", {
      yPercent:-100,
      duration:0.8,
      ease:'power3.inOut'
    })
  }, {dependencies: [isExiting], scope: appRef})

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{autoRaf:false, lerp: 0.1, duration: 1.2}}>
      <main ref={appRef}>
        {isLoading && (
          <Loading progress={progress}/>
        )}
        <LenisController isLoading={isLoading} />
        <Navbar />
        <Hero isLoading={isLoading}/>
        <ProductViewer />
        <Showcase />
        <Performancs />
        <Features />
        <Highlights />
        <Footer />
      </main>
    </ReactLenis>
  )
}

export default App

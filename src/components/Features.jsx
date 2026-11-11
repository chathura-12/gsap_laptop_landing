import { Canvas } from '@react-three/fiber'
import StudioLights from './three/StudioLights'
import Macbook from './models/Macbook'
import { features } from '../constants'
import "../styles/Features.css"
import { Suspense, useRef } from 'react'
import { Html } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const ModelScroll = ({ scale }) => {
  const groupRef = useRef(null)
  useGSAP(() => {
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.features-container',
        start: 'top top',
        end: '+=2500',
        scrub: 1,
      }
    });
  }, [])
  return(
    <group ref={groupRef} >
        <Suspense fallback={<Html><h2>Loading...</h2></Html>}>
          <Macbook scale={scale} position={[0, -1, 0]}/>
        </Suspense>
    </group>
  )
}

const Features = () => {
  const containerRef = useRef(null)
  const isSmallLaptop = useMediaQuery({query: '(max-width: 1024px)'})
  const isTablet = useMediaQuery({query: '(max-width: 768px'})
  const isMobile = useMediaQuery({query: '(max-width: 480px)'})

  const scale = isMobile ? 0.4 : isTablet ? 0.5 : isSmallLaptop ? 0.6 : 0.7;

  useGSAP(() => {
    gsap.to('.features-container',{
      scrollTrigger:{
        trigger: '.features-container',
        start:'top top',
        end:'+=2500',
        scrub: 1,
        pin:true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      }
    })

    const timeline = gsap.timeline({
      defaults:{duration: .5, ease: 'power1.in'},
      scrollTrigger:{
        trigger: '.features-container',
        start:'top top',
        end:'bottom top',
        scrub: 1,
      }
    })

    timeline
      .to('.box_1', {opacity: 1, yPercent: -20})
      .to('.box_2', {opacity: 1, yPercent: -20}, "+=.5")
      .to('.box_3', {opacity: 1, yPercent: -20}, "+=.5")
      .to('.box_4', {opacity: 1, yPercent: -20}, "+=.5")

  }, {scope:containerRef})

  return (
    <section ref={containerRef} id='features' className='layout-wrapper m-top'>
      <div className="heading-main">
        <h2>See it all in a new light.</h2>
      </div>
      <div className='features-container'>
        <Canvas
          style={{width: '100%', height: '100%'}}
          id='f-canvas' camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}
          onCreated={({gl}) => {
            gl.setSize(window.innerWidth, window.innerHeight);
          }}
          >
          <StudioLights />
          <ambientLight intensity={0.5}/>
          <ModelScroll scale={scale}/>
        </Canvas>
      </div>
      <div className="contents">
        {features.map((feature) =>
          <div className={`box_${feature.id} box`} key={feature.id} style={{...feature.style}}>
            <div className="icon">
              <img src={feature.image} alt={feature.highlight} />
            </div>
            <p className="feature">
            <span className='highlight-text'>{feature.highlight}{" "}</span>{feature.text}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Features
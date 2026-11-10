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

const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'})

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger:{
        trigger: '#f-canvas',
        start:'top top',
        end:'bottom top',
        scrub: 1,
        pin:true,
        pinSpacing: true,
        invalidateOnRefresh: true
      }
    })

    const timeline = gsap.timeline({
      defaults:{duration: .5, ease: 'power1.in'},
      scrollTrigger:{
        trigger: '#f-canvas',
        start:'top top',
        end:'bottom top',
        scrub: 1,
      }
    })

    if(groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {y: Math.PI * 2, ease:"power1.inOut"})
    }

    timeline
      .to('.feature_1', {opacity: 1, yPercent: -20})
      .to('.feature_2', {opacity: 1, yPercent: -20}, "+=.5")
      .to('.feature_3', {opacity: 1, yPercent: -20}, "+=.5")
      .to('.feature_4', {opacity: 1, yPercent: -20}, "+=.5")
  }, [])

  return(
    <group ref={groupRef}>
        <Suspense fallback={<Html><h2>Loading...</h2></Html>}>
          <Macbook scale={isMobile ? 0.2 : 0.6} position={[0, -1, 0]}/>
        </Suspense>
    </group>
  )
}

const Features = () => {
  return (
    <section id='features' className='layout-wrapper m-top'>
      <div className="heading-main">
        <h2>See it all in a new light.</h2>
      </div>
      <div id='f-canvas-wrapper'>
        <Canvas
          style={{width: '100%', height: '200%'}}
          id='f-canvas' camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}
          onCreated={({gl}) => {
            gl.setSize(window.innerWidth, window.innerHeight);
          }}>
          <StudioLights />
          <ambientLight intensity={0.5}/>
          <ModelScroll />
        </Canvas>  
      </div>
      <div className="contents">
        {features.map((feature) => 
          <div key={feature.id}>
            <p className={`feature_${feature.id} feature`} style={{...feature.style}}>
            <span className='highlight-text'>{feature.highlight}{" "}</span>{feature.text}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Features
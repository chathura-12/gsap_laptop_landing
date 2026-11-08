import { performanceImages, performImgPosition } from "../constants"
import "../styles/Performances.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

const Performancs = () => {
    const containerRef = useRef()

    useGSAP(() => {
        const timeline = gsap.timeline({
            defaults:{ ease: "power1.inOut", duration: 2, overwrite: "auto"},
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom 80%",
                scrub: 1,
                invalidateOnRefresh: true
            }
        })

        performImgPosition.forEach((pos) => {
            if(pos.id === 'pos1') return;
            const toVars = {};

            if(pos.left !== undefined) toVars.left = `${pos.left}%`
            if(pos.right !== undefined) toVars.right = `${pos.right}%`
            if(pos.top !== undefined) toVars.top = `${pos.top}%`
            if(pos.transform !== undefined) toVars.transform = `${pos.transform}`

            timeline.to(`.${pos.id}`, toVars, 0)
        })
    }, {scope:containerRef})
  return (
    <section ref={containerRef} id="performance" className="layout-wrapper">
        <div className='heading-main'>
            <h1>Next Level Graphic Performance.</h1>
            <h1>Game On.</h1>
        </div>
        <div className="wrapper">
            {performanceImages.map((image) => (
                <img className={`perf-img ${image.id}`} key={image.id} src={image.src} alt={image.id} />
            ))}
        </div>
        <div className="content">
            <p className="description"><span className="highlight-text">Run graphics-intensive workflows with responsiveness</span> that keeps up with your imagination.
            Each chip features a GPU with enhanced shader cores and a third-generation ray‑tracing engine,
            so 3D modeling is crisper and clearer than ever. And Dynamic Caching optimizes on-chip memory to
            significantly increase GPU utilization — providing a performance boost for apps like Blender,
            Unity Editor, and AAA games</p>
        </div>
    </section>
  )
}

export default Performancs
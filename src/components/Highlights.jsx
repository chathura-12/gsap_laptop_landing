import { useMediaQuery } from "react-responsive"
import "../styles/Highlights.css"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"

const Highlights = () => {
    const isMobile = useMediaQuery({query: "(max-width: 768px)"})
    const hContainerRef = useRef(null)

    useGSAP(() => {
        gsap.to('.box', {
            scrollTrigger:{
                trigger:hContainerRef.current,
                start: isMobile ? "20% bottom" : "top center",
            },
            y:0,
            opacity:1,
            stagger:0.1,
            duration:0.6,
            ease: "power1.inOut"
        })
    }, { scope: hContainerRef, dependencies: [isMobile]})
  return (
    <section ref={hContainerRef} id="highlights" className="layout-wrapper m-top">
        <h2 className="h-heading">There's never been a <br/> better time to upgrade</h2>
        <h4 className="h-subheading">Here's what you get with the new AetherPad Pro</h4>
        <div className="masonry">
            <div className="left-column">
                <div className="box left-box">
                    <div className="img-holder">
                        <img src="/icons/laptop.svg" alt="laptop" />
                    </div>
                    <div className="box-content">
                        <h4>Fly through</h4>
                        <h4>demanding tasks</h4>
                        <h4>up to 9.8x faster</h4>
                    </div>
                </div>
                <div className="box left-box">
                    <div className="img-holder">
                        <img src="/icons/shinning.svg" alt="display" />
                    </div>
                    <div className="box-content">
                        <h5>A stunning</h5>
                        <h5>Liquid Retina XDR</h5>
                        <h5>display</h5>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="box right-box">
                    <div className="img-holder">
                        <img src="/icons/AI.svg" alt="AI" />
                    </div>
                    <div className="box-content">
                        <h5>Built for</h5>
                        <h5 className="grad-text-A">Apple Intelligence.</h5>
                    </div>
                </div>
                <div className="box right-box">
                    <div className="img-holder">
                        <img src="/icons/battery.svg" alt="Battery" />
                    </div>
                    <div className="box-content">
                        <h4>Up to <span className="grad-text-B">14 more hours</span></h4>
                        <h4>battery life.<span className="fade-text">(Up to 24</span></h4>
                        <h4 className="fade-text">hours total.)</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights
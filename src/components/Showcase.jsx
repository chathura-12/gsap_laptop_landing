import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/Showcase.css"

const Showcase = () => {
  const isTablet = useMediaQuery({query: '(max-width: 768px)'})

  useGSAP(() => {
    if (isTablet) {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === '.showcase-media') st.kill();
      });
      gsap.set('.mask img', { clearProps: "all" });
      gsap.set('.content', { clearProps: "all" });
      return;
    }
    if(!isTablet){
      gsap.to('.showcase-media',{
        scrollTrigger: {
          trigger: '.showcase-media',
          start: 'top top',
          end: '+=1500',
          scrub:2,
          pin:true,
          invalidateOnRefresh: true,
          refreshPriority:1,
          onUpdate: (self) => {
            const p = self.progress;
            const split = 0.4;
            let currentScale;

            if (p <= split) {
              const t = p / split;
              currentScale = 5 + (600 - 5) * Math.pow(1 - t, 3);
            } else {
              const t = (p - split) / (1 - split);
              currentScale = 1.1 + (5 - 1.1) * Math.pow(1 - t, 2.5);
            }
            gsap.set('.mask img', { scale: currentScale, force3D: true });
          }
        }
      })
      gsap.to(".content", {
        yPercent:-40,
        scrollTrigger:{
          trigger:".showcase-media",
          start: '5% top',
          end: 'bottom top',
          scrub:1
        }
      })
    }
  }, {dependencies : [isTablet], revertOnUpdate: true})

  return (
    <section id='showcase' className='m-top layout-wrapper'>
      <div className="heading">
        <p className='heading-label'>Performance</p>
        <div className='heading-main'>
          <h2>M4 Pro. Unmatched.</h2>
          <h2>Power players.</h2>
        </div>
      </div>
      <div className="showcase-media">
          <div className="video">
            <video className="hero-media" src="/gameplay.mkv" autoPlay muted playsInline loop/>
          </div>
          <div className="mask">
            <img src="/mask.svg" alt="mask" />
          </div>
      </div>
      <div className="content">
        <div className="intoduction layout-wrapper">
          <p>Introducing {" "}
            <span className='highlight-text'>M4, the next generation MOONLIT silicon</span>
            . M4 powers
          </p>
          <p>
            Our most powerful chips ever built for a pro laptop. M4 deliver phenomenal single- and multithreaded
            CPU performance and faster unified memory — giving you the kind of speed you’ve never thought possible
          </p>
        </div>
        <div className="graphic-intro layout-wrapper">
          <div className="graphic-img">
            <img src="/showcase.png" alt="graphic-design" />
          </div>
          <h4>
            Run graphics-intensive workflows with responsiveness that keeps up with your imagination. M4 feature a GPU
            with enhanced shader cores and a third-generation ray-tracing engine, so 3D modeling is crisper and clearer than ever.
          </h4>
        </div>
        <p className='highlight-text underline'>Learn more about MOONLIT intelligent</p>
        <div className='performance'>
          <p>M4 Pro delivers game-changing power for scientists, engineers, software developers, and creative pros tackling intensive projects.</p>
          <p className='highlight-text'>Up to 10.9x faster than M2</p>
        </div>
      </div>
    </section>
  )
}

export default Showcase
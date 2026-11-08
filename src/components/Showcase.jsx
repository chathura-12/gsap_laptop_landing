import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/Showcase.css"

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isTablet = useMediaQuery({query: '(max-width: 1024px)'})

  useGSAP(() => {
    if(!isTablet){
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: 'bottom top',
          scrub:true,
          pin:true,
          invalidateOnRefresh: true,
          refreshPriority: 1
        }
      })

      timeline.to('.mask img', {
        transform: 'scale(1.1)'
      })
      ScrollTrigger.refresh();
    }
  }, [isTablet])

  return (
    <section id='showcase' className='m-top'>
        <div className="media">
            <div className="video">
              <video className="hero-media" src="/gameplay.mp4" autoPlay muted playsInline loop/>
            </div>
            <div className="mask">
              <img src="/mask.svg" alt="mask" />
            </div>
        </div>
        <div className='layout-wrapper'>
          <div className="content">
            <div className="wrapper">
              <p className='heading-label'>Performance</p>
              <div className='heading-main'>
                <h1>M4 Pro. Unmatched.</h1>
                <h1>Power players.</h1>
              </div>
              <div className="intoduction">
                <p>Introducing {" "}
                  <span className='highlight-text'>M4, the next generation MOONLIT silicon</span>
                  . M4 powers
                </p>
                <p>
                  Our most powerful chips ever built for a pro laptop. M4 deliver phenomenal single- and multithreaded
                  CPU performance and faster unified memory — giving you the kind of speed you’ve never thought possible
                </p>
                <p>
                  Run graphics-intensive workflows with responsiveness that keeps up with your imagination. M4 feature a GPU
                  with enhanced shader cores and a third-generation ray-tracing engine, so 3D modeling is crisper and clearer than ever.
                </p>
                <p className='highlight-text underline'>Learn more about MOONLIT intelligent</p>
              </div>
              <div className='performance'>
                <p>M4 Pro delivers game-changing power for scientists, engineers, software developers, and creative pros tackling intensive projects.</p>
                <p className='highlight-text'>Up to 10.9x faster than M2</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Showcase
import "../styles/Highlights.css"

const Highlights = () => {
  return (
    <section id="highlights" className="layout-wrapper m-top">
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
                        <h5>Apple Intelligence.</h5>
                    </div>
                </div>
                <div className="box right-box">
                    <div className="img-holder">
                        <img src="/icons/battery.svg" alt="Battery" />
                    </div>
                    <div className="box-content">
                        <h4>Up to 14 more</h4>
                        <h4>hours battery life.</h4>
                        <h4>(Up to 24 hours total.)</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights
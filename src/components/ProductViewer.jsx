import "../styles/ProductViewer.css";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
import { useModelStatus } from "../constants";

const ProductViewer = () => {
    const {silver, silverTouchPad, model14, model16, spaceDark, spaceDarkTouchPad} = useModelStatus

    const [color, setColor] = useState(silver)
    const [touchPadColor, setTouchPadColor] = useState(silverTouchPad)
    const [size, setSize] = useState(model14)

    const isMobile = useMediaQuery({query: '(width <= 1024px)'})

  return (
    <section id='product-viewer' className='layout-wrapper'>
        <h2>Take a close look</h2>
        <div className="product-control">
            <p className="info">
            MoonlitPro {size === model14 ? '14"' : '16"'} in {color === spaceDark ? 'Space Dark' : 'Silver'}</p>
            <div className="controls">
                <div className="color-control">
                    <div onClick={() => {
                        setColor(spaceDark)
                        setTouchPadColor(spaceDark)
                    }}
                    className={`color-black ${color === spaceDark ? 'active': ''}`}/>
                    <div onClick={() => {
                        setColor(silver)
                        setTouchPadColor(silver)
                    }}
                    className={`color-silver ${color === silver ? 'active': ''}`}/>
                </div>
                <div className="size-control">
                    <div onClick={() => setSize(model14)}
                    className="model-size"
                    style={{
                        background: size === model14 ? 'white' : 'rgba(0,0,0,0)',
                        color: size === model14 ? 'black' : 'white'
                    }}>
                        <p>14"</p>
                    </div>
                    <div onClick={() => setSize(model16)}
                    className="model-size"
                    style={{
                        background: size === model16 ? 'white' : 'rgba(0,0,0,0)',
                        color: size === model16 ? 'black' : 'white'
                    }}>
                        <p>16"</p>
                    </div>
                </div>
            </div>
        </div>
        <Canvas id="canvas" camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
            <StudioLights />
            <ModelSwitcher color={color} scale={isMobile ? 0.5 : 0.7} size={size}/>
        </Canvas>
    </section>
  )
}

export default ProductViewer;
import "../styles/ProductViewer.css";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
import { useModelStatus } from "../constants";
import { use } from "react";

const ProductViewer = () => {
    const {silver, model14, model16, spaceDark} = useModelStatus

    const [color, setColor] = useState(silver)
    const [size, setSize] = useState(model14)

    useModelStatus.setModelColor = color;

    const isSmallLaptop = useMediaQuery({query: '(max-width:1024px)'})
    const isTablet = useMediaQuery({query: '(max-width:768px)'})
    const isMobile = useMediaQuery({query: '(max-width:480px)'})

    const modelSize = isMobile ? 0.3 : isTablet ? 0.5 : isSmallLaptop ? 0.7 : 0.7;

  return (
    <section id='product-viewer' className='layout-wrapper m-top'>
        <h2 className="heading">Take a close look .</h2>
        <div className="product-control">
            <p className="info">
            Moonlit AetherPad Pro {size === model14 ? '14"' : '16"'} in {color === spaceDark ? 'Space Dark' : 'Silver'}</p>
            <div className="controls">
                <div className="color-control">
                    <div onClick={() => setColor(spaceDark)}
                    className={`color-black ${color === spaceDark ? 'active': ''}`}/>
                    <div onClick={() => setColor(silver)}
                    className={`color-silver ${color === silver ? 'active': ''}`}/>
                </div>
                <div className="size-control">
                    <div onClick={() => setSize(model14)}
                    className="model-size"
                    style={{
                        background: size === model14 ? 'white' : 'rgba(0,0,0,0)',
                        color: size === model14 ? 'black' : 'white'
                    }}>
                        <span className="size">14"</span>
                    </div>
                    <div onClick={() => setSize(model16)}
                    className="model-size"
                    style={{
                        background: size === model16 ? 'white' : 'rgba(0,0,0,0)',
                        color: size === model16 ? 'black' : 'white'
                    }}>
                        <span className="size">16"</span>
                    </div>
                </div>
            </div>
        </div>
        <Canvas
            id="product-canvas" camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}
            onCreated={({gl}) => {
                gl.setSize(window.innerWidth, window.innerHeight);
            }}>
            <StudioLights />
            <ModelSwitcher color={color} scale={modelSize} size={size}/>
        </Canvas>
    </section>
  )
}

export default ProductViewer;
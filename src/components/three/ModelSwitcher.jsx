import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react';
import gsap from 'gsap';
import MacbookModel14 from '../models/Macbook-14';
import MacbookModel16 from '../models/Macbook-16';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;
    const dummy = { visiblePercent: group.visible ? 1 : 0 };

    gsap.to(dummy, {
        visiblePercent: opacity,
        duration: ANIMATION_DURATION,
        onUpdate: () => {
            if (dummy.visiblePercent < 0.5) {
                group.visible = false;
            } else {
                group.visible = true;
            }
        }
    });
}

const MoveGroup = (group, x) => {
    if(!group) return;

   gsap.to(group.position , {x: x, duration:ANIMATION_DURATION})
}

const ModelSwitcher = ({color, scale, size}) => {
    const smallRef = useRef();
    const largeRef = useRef();

    const showLarge = size === 0.8

    useGSAP(() => {
        if(showLarge) {
            MoveGroup(smallRef.current, -OFFSET_DISTANCE);
            MoveGroup(largeRef.current, 0);

            fadeMeshes(smallRef.current, 0);
            fadeMeshes(largeRef.current, 1);
        }
        else{
            MoveGroup(smallRef.current, 0);
            MoveGroup(largeRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallRef.current, 1);
            fadeMeshes(largeRef.current, 0);
        }
    }, [scale, size])

    const controlsConfig = {
        snap: true,
        speed: 3,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass: 1, tension: 0, friction: 26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeRef}>
                    <MacbookModel16 color={color} scale={scale} position={[0, 0, 1]}/>
                </group>
            </PresentationControls>
            <PresentationControls {...controlsConfig}>
                <group ref={smallRef}>
                    <MacbookModel14 color={color} scale={scale} position={[0, 0, 1]}/>
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
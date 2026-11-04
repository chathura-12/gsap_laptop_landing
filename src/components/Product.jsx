import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const ss = '/models/scene.gltf'
export function Product() {
  // Load your glTF file
  const { scene } = useGLTF(ss); 
  const screenRef = useRef();

  useEffect(() => {
    // 🟢 Target the screen child directly using the name from your glTF JSON
    const screenMesh = scene.getObjectByName('screen');
    
    if (screenMesh) {
      screenRef.current = screenMesh;
      
      // Example manipulation: Change the screen material color to a bright neon blue
      screenMesh.material.color.set('#ed7a06');
      
      console.log("Successfully accessed the screen node!", screenMesh);
    }
  }, [scene]);

  return <primitive object={scene} />;
}

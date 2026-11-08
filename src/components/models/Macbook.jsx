import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useModelStatus } from '../../constants';
import { useEffect } from 'react';
import { noChangeParts } from '../../constants';

export default function Macbook(props) {
  const {setModelColor, texture} = useModelStatus
  const { nodes, materials, scene } = useGLTF('/models/macbook-16-transformed.glb')

  const screen = useVideoTexture(texture);

  screen.flipY = false

  useEffect(() => {
    scene.traverse((child) => {
      if(child.isMesh){
        if(!noChangeParts.includes(child.name)){
          child.material.color.set(setModelColor)
        }
      }
    })
  }, [setModelColor, scene])
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BasePanel_1.geometry} material={materials.chargerPort} />
      <mesh geometry={nodes.BasePanel_2.geometry} material={materials.PaletteMaterial003} />
      <mesh geometry={nodes.BasePanel_3.geometry} material={materials.PaletteMaterial004} />
      <mesh geometry={nodes.BasePanel_4.geometry} material={materials.keyboard} />
      <mesh geometry={nodes.BasePanel_5.geometry} material={materials.SoundPanel} />
      <mesh geometry={nodes.BasePanel_6.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Monitor_1.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Monitor_2.geometry}>
        <meshBasicMaterial map={screen}/>
      </mesh>
      <mesh geometry={nodes.Monitor_3.geometry} material={materials.Logo} />
    </group>
  )
}

useGLTF.preload('/models/macbook-16-transformed.glb')

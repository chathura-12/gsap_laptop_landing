import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { noChangeParts } from '../../constants'

export default function MacbookModel14({color, ...props}) {
  const { nodes, materials, scene } = useGLTF('/models/macbook-14-transformed.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if(child.isMesh) {
        if(!noChangeParts.includes(child.name)) {
          child.material.color.set(color)
        }
      }
    })
  }, [color])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Base_1.geometry} material={materials.PaletteMaterial003} />
      <mesh geometry={nodes.Base_2.geometry} material={materials.keyboard} />
      <mesh geometry={nodes.Base_3.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Monitor_1.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Monitor_2.geometry} material={materials.screen} />
      <mesh geometry={nodes.Monitor_3.geometry} material={materials.logo} />
    </group>
  )
}

useGLTF.preload('/models/macbook-14-transformed.glb')

import { Environment, Lightformer } from "@react-three/drei"


const StudioLights = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
            <group>
                <Lightformer
                    form="rect"
                    intensity={5}
                    position={[-10, 5, -5]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                />
                <Lightformer
                    form="rect"
                    intensity={5}
                    position={[5, 0, 1]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                />
                <Lightformer
                    form="rect"
                    intensity={2}
                    position={[-10, 0, 1]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                />
                <Lightformer
                    form="rect"
                    intensity={2}
                    position={[4, 2, 6]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                />
            </group>
        </Environment>
    </group>
  )
}

export default StudioLights
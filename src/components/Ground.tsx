import { MeshReflectorMaterial } from "@react-three/drei";

const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1000}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={0.3}
        minDepthThreshold={0.3}
        maxDepthThreshold={0.3}
        color="#050505"
        metalness={0.5}
        mirror={0}
      />
    </mesh>
  );
};

export default Ground;

import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const Light = () => {
  const dLightRef = useRef<DirectionalLight>(null!);
  useHelper(dLightRef, DirectionalLightHelper, 1, "white");

  return (
    <>
      <directionalLight
        ref={dLightRef}
        position={[0, 3, 0]}
        intensity={1}
        color="white"
      />
    </>
  );
};

export default Light;

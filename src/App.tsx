import { useEffect, useRef } from "react";
import {
  CameraControls,
  CameraControlsProps,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, MeshProps } from "@react-three/fiber";
import { MOUSE } from "three";
import {
  GestureHandlers,
  GestureOptions,
  useGesture,
} from "@use-gesture/react";

const Box = ({ ...rest }: MeshProps) => {
  return (
    <mesh {...rest}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const Camera = ({ ...rest }: CameraControlsProps) => {
  const ccRef = useRef<CameraControls>(null);

  const bind = useGesture({
    onDrag: (state) => console.log(state),
  });

  useEffect(() => {}, []);
  return (
    <CameraControls
      {...rest}
      {...bind}
      ref={ccRef}
      dollyDragInverted
      verticalDragToForward
      mouseButtons={{
        left: MOUSE.PAN,
        right: MOUSE.DOLLY,
        middle: MOUSE.MIDDLE,
        wheel: MOUSE.MIDDLE,
      }}
    />
  );
};

export default function App() {
  return (
    <Canvas>
      <PerspectiveCamera position={[0, -1, 0]}>
        <color attach="background" args={["#403d39"]} />
        <Camera />
        <ambientLight intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box />
        <Environment preset="sunset" />
      </PerspectiveCamera>
    </Canvas>
  );
}

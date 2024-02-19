import { PropsWithChildren } from "react";
import { Canvas as TCanvas } from "@react-three/fiber";
import { Environment, MapControls } from "@react-three/drei";
import Light from "./Light";

export type CanvasProps = PropsWithChildren;

const Canvas = ({ children }: CanvasProps) => {
  return (
    <div style={{ height: "100%" }}>
      <TCanvas shadows camera={{ position: [0, 2, 5] }}>
        <Light />
        <MapControls
          makeDefault
          panSpeed={0.3}
          rotateSpeed={0.3}
          maxAzimuthAngle={10}
        />
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        {children}
        <Environment preset="city" />
      </TCanvas>
    </div>
  );
};

export default Canvas;

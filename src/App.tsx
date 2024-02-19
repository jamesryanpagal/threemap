import { Suspense } from "react";
import Ground from "./components/Ground";
import Scene2 from "./scene/Scene2";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Scene2 />
        <Ground />
      </Canvas>
    </Suspense>
  );
};

export default App;

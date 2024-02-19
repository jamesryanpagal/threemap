const Scene2 = () => {
  return (
    <mesh position-y={0.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default Scene2;

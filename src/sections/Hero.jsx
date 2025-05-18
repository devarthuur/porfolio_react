import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float, Loader } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";



const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });

    const astronautPosition = isMobile ? [0, -1.5, 0] : [1.3, -1.5, 0];
  const astronautScale = isMobile ? 0.23 : 0.23;
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}
            >
                <Canvas camera={{ position: [0, 1, 3] }}>
                    <Suspense>
                        <Float>
                            <Astronaut scale={astronautScale} position={astronautPosition} />
                        </Float>
                        <Rig />
                    </Suspense>
                </Canvas>
                <Loader />
            </figure>
        </section>
    );
};

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5,
            delta
        );
    });
}

export default Hero;

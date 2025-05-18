import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing" id="about">
            <h2 className="text-heading">Sobre mim</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Oi, Eu sou Arthur</p>
                        <p className="subtext">
                            Nos últimos 3 anos, venho aprimorando minhas habilidades em desenvolvimento
                            frontend e backend para entregar aplicações web e sistemas dinâmicos, robustos e eficientes.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500">
                            Principais Linguagens
                        </p>
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="Tailwind"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            text="JavaScript"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="React"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/logos/javascript.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/logos/react.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                            image="assets/logos/tailwindcss.svg"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Fuso Horário</p>
                        <p className="subtext">
                            Estou baseado no Brasil e disponível para trabalho remoto com times do mundo todo. Adaptável a diferentes fusos e estilos de trabalho.
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Quer começar um projeto comigo?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headText">Skills</p>
                        <p className="subtext">
                            Tenho experiência com uma variedade de linguagens, frameworks e ferramentas — como JavaScript, TypeScript, React, Next.js, Node.js, .NET, e SQL.
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

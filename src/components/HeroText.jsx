import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
    const words = ["Aplicações", "Soluções", "Segurança"];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text overflow-hidden px-4">
            {/* Desktop View */}
            <div className="hidden md:flex flex-col space-y-4">
                <motion.h1
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Olá, Me Chamo Arthur
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-5xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        Um desenvolvedor <br /> focado em criar
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords words={words} className="font-black text-white text-8xl" />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Voltadas à Web
                    </motion.p>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col space-y-4 md:hidden">
                <motion.p
                    className="text-2xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Olá, Me Chamo Arthur
                </motion.p>
                <div>
                    <motion.p
                        className="text-3xl font-semibold text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        Um desenvolvedor <br /> focado em criar
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-bold text-white text-4xl break-words max-w-full"
                        />
                    </motion.div>
                    <motion.p
                        className="text-2xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Voltadas à Web
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default HeroText;
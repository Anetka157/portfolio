import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
    const frontendSkills = [
        "React",
        "Vue",
        "TypeScript",
        "TailwindCSS",
        "Svelte",
    ];

    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center">
                        {" "}
                        O mně
                    </h2>

                    <div className="rounded-xl p-8 border-black/30 border">
                        <p className="text-gray-600 mb-6">
                            Fotografování mě provázelo už od <u>dětství</u> – fascinovalo mě zachycování okamžiků a
                            hledání
                            krásy ve světě kolem sebe.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Studovala jsem IT, kde jsem se nejvíce zaměřovala na grafiku a
                            naučila se pracovat s vizuální estetikou, ale stále mi něco <u>chybělo.</u> Teprve když jsem
                            se
                            rozhodla věnovat fotografování naplno a absolvovala specializovanou školu, pochopila jsem,
                            že právě to je <u>moje skutečná vášeň.</u>
                        </p>
                        <img
                            src="/aneta-portfolio/ctyrlistek.svg"
                            style={{
                                position: "absolute",
                                bottom: "365px",
                                right: "25px",
                                width: "55px",
                                height: "50px",
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-black/30 border">
                            <h3 className="text-xl text-emerald-500 font-bold mb-4"> Kde jsem studovala </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>
                                    <strong> Informační technologie </strong> - škola Orbis

                                </li>
                                <li>
                                    <strong> Grafická tvorba </strong> - Zlínská soukromá vyšší odborná škola umění, o.p.s.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-black/30 border">
                            <h3 className="text-xl text-emerald-500 font-bold mb-4"> Zkušenosti </h3>
                            <div className="space-y-4 text-gray-600">
                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        Samostatné focení (2020 - Present){" "}
                                    </h4>
                                    <p>
                                        Samostatné focení mi za pět let přineslo příležitost zdokonalit kreativitu a zachytit jedinečné okamžiky.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        Pomoc při fotografování (2019){" "}
                                    </h4>
                                    <p>
                                        Získala jsem znalost práce s profesionálním vybavením a technikami osvětlení.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

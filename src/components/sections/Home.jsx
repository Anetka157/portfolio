import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
            <RevealOnScroll>
                <div className="text-center z-10">
                    <h1 className="text-green-100 text-6xl md:text-8xl lg:text-10xl">*</h1>
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-cyan-900 to-emerald-500 bg-clip-text text-transparent">
                        V tom případě jsi tu správně!
                    </h1>
                    <hr className="border-t border-gray-500 my-6" />

                    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0">

                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-900 to-emerald-500 bg-clip-text text-transparent">
                                Ahoj, jsem <u>Anet</u>.
                            </h2>
                            <div className="text-gray-600 text-sm md:text-lg">
                                <p>Jsem vášnivá fotografka a miluji zachycovat jedinečné momenty.</p>
                                <p>Ať už jde o svatební den, rodinnou oslavu nebo portrétní focení,</p>
                                <p>mým cílem je vytvořit snímky plné emocí a krásy.</p>
                                <br />
                                <p>Věřím, že fotografie by měla být příběhem.</p>
                                <p>Pracuji s profesionální zrcadlovkou a pečlivě upravuji snímky</p>
                                <p>v softwaru, abych zdůraznila jejich <u>atmosféru a jedinečnost.</u></p>
                            </div>
                        </div>


                        <img
                            src="/aneta-portfolio/foto1.png"
                            alt="Anet"
                            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
                            style={{width:"400px", height:"400px"}}
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

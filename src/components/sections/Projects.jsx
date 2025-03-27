import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Fotogalerie
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className="p-6 rounded-xl transition flex flex-col items-center justify-center"
                        >
                            <h3 className="text-xl text-emerald-500 font-bold mb-2"> Svatební focení </h3>
                            <img
                                src="/aneta-portfolio/svatba4.png"
                                alt="Anet"
                                className="rounded-lg shadow-lg"
                                style={{width: "280px", height: "400px"}}
                            /> <br />
                            <h4><strong>Recenze zákaznice</strong></h4>
                            <p className="text-gray-600 mb-4">
                                Fotografka zachytila náš svatební den nádherným způsobem! Skvěle se přizpůsobila našim přáním a přidala svůj kreativní náhled. Výsledné fotografie jsou úžasné.
                            </p>
                            

                        </div>
                        <div className="p-6 rounded-xl transition flex flex-col items-center justify-center"
                        >
                            <h3 className="text-xl text-emerald-500 font-bold mb-2"> Rodinné focení </h3>
                            <img
                                src="/aneta-portfolio/dite.png"
                                alt="Anet"
                                className="rounded-lg shadow-lg"
                                style={{width: "280px", height: "400px"}}
                            /> <br/>
                            <h4><strong>Recenze rodiny</strong></h4>
                            <p className="text-gray-600 mb-4">
                                Rodinné focení bylo skvělé! Fotografka vytvořila příjemnou atmosféru, díky které jsme se
                                cítili přirozeně. Jsme nadšení a určitě se k ní vrátíme!
                            </p>
                            
                        </div>

                        <div
                            className="p-6 rounded-xl transition flex flex-col items-center justify-center"
                        ><h3 className="text-xl text-emerald-500 font-bold mb-2">Portrétní focení</h3>
                            <img
                                src="/aneta-portfolio/zena.avif"
                                alt="Anet"
                                className="rounded-lg shadow-lg"
                                style={{width: "280px", height: "400px"}}
                            /> <br/>
                            <h4><strong>Recenze zákaznice</strong></h4>
                            <p className="text-gray-600 mb-4">
                                Portrétní focení s touto fotografkou bylo úžasné! Cítila jsem se velmi pohodlně a
                                výsledné snímky zachytily moji přirozenou krásu a osobnost. Jsem nadšená a doporučuji
                                všem, kdo hledají skvélé portréty!
                            </p>
                            
                        </div>

                        <div
                            className="p-6 rounded-xl transition flex flex-col items-center justify-center"
                        ><h3 className="text-xl text-emerald-500 font-bold mb-2">Volnočasové focení</h3>
                            <img
                                src="/aneta-portfolio/sklenice.avif"
                                alt="Anet"
                                className="rounded-lg shadow-lg"
                                style={{width: "280px", height: "400px"}}
                            /> <br/>
                            <h4><strong>Čemu se ještě věnuji</strong></h4>
                            <p className="text-gray-600 mb-4">
                                Kromě portrétů, svateb atd. se zaměřuji i na volnočasové focení, kde zachycuji přírodu,
                                městské scenérie, i obyčejné předměty a snažím se hledat nové styly upravování fotek.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

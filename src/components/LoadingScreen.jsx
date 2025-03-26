import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Chceš zachytit svoje zážitky tak, aby zůstaly navždy živé?";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 70);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl md:text-6xl font-bold bg-clip-text text-white">
                {text} <span className="animate-blink ml-1"> |</span>
            </div>

            <div className="w-[250px] h-[2px] relative overflow-hidden">
                <div className="w-[40%] h-full bg-white shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>


            <img
                src="/aneta-portfolio/foto4.png"
                style={{
                    position: "absolute",
                    top: "90px",
                    left: "100px",
                    width: "150px",
                    height: "130px",
                }}

            />


            <img
                src="/aneta-portfolio/foto5.png"
                style={{
                    position: "absolute",
                    bottom: "100px",
                    right: "100px",
                    width: "200px",
                    height: "180px",
                }}

            />
        </div>
    );
};

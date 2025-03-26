import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const SERVICE_ID = "service_f5cthdo";
    const TEMPLATE_ID = "template_b654lsr";
    const PUBLIC_KEY = "1Ku53XhJt9aaSzbAZ";


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Zpráva byla odeslána!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Jejda! Něco se pokazilo. Zkuste to prosím znovu."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 bg-white"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Kontaktujte mě
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-black/30 rounded px-4 py-3 text-gray-500 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Jméno a příjmení"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-black/30 rounded px-4 py-3 text-gray-500 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="napriklad@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
              <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-black/30 rounded px-4 py-3 text-gray-500 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Vaše zpráva..."
                  onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                  }
              />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-teal-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Odeslat Zprávu
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
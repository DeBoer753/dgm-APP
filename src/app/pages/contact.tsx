// PLUGINS
import { useState } from "react";

// COMPONENTS
import FlexStack from "@/components/custom/layout/flex-stack";

// CONTACT
export default function Contact() {

    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        setMessageSent(true);
    };
    
    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-zinc-200 to-zinc-50 w-full h-[800px] pt-20" style={{  backgroundImage: `url('/imgs/contact_bg.png')`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="max-w-sm bg-orange-950 bg-opacity-90 p-5 shadow-lg w-full">
                <FlexStack>
                    <h1 className="text-center text-white text-xl font-thin">CONTACT</h1> 
                    <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-4">
                        <div>
                            <label className="text-gray-200 text-md">First Name*</label>
                            <input className="w-full px-4 py-2 mt-1 bg-gray-300 border border-gray-600  focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label className="text-gray-200 text-md">Last Name*</label>
                            <input className="w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label className="text-gray-200 text-md">Email*</label>
                            <input className="w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label className="text-gray-200 text-md">Message*</label>
                            <textarea id="message" name="message" placeholder="Your Message" rows="7"     
                        className="w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                        </div>
                        <button 
                            type="submit"
                            className={`w-full py-2 font-semibold transition-all duration-500 ${
                                messageSent ? "bg-blue-400 text-white" : "bg-black text-white hover:bg-white hover:text-black"
                            }`}
                        >
                            {messageSent ? "Message Sent" : "Send Message"}
                        </button>
                    </form>
                </FlexStack>
            </div>
        </div>
    );
}
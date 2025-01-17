// COMPONENTS
import Box from "@/components/custom/layout/box";
import FlexStack from "@/components/custom/layout/flex-stack";

// CONTACT
export default function Contact() {
    return (
        <div className="border border-red-300">
            <h1 className="text-center">CONTACT</h1>
            <Box className="bg-gray-500 bg-opacity-90 p-8 shadow-lg w-96">
                <FlexStack>
                    <form action="" method="get">
                        <label className="text-gray-200 text-md">First Name*</label>
                        <input className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        <label className="text-gray-200 text-md">Last Name*</label>
                        <input className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        <label className="text-gray-200 text-md">Email*</label>
                        <input className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        <label className="text-gray-200 text-md">Message*</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="7" 
                        class="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                        <button type="submit" 
                        className="w-full py-2 bg-black text-white font-semibold hover:opacity-90 transition-opacity">
                        Send Message
                        </button>
                    </form>
                </FlexStack>
            </Box>
        </div>
    );
}
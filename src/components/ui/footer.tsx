// FOOTER 
export default function Footer() {
  
    return (
        <div className="bg-orange-950 py-10 px-5">
            <p className="text-center text-white">
                <span className="font-bold">© David Glass Music</span> | Website created by  
                <a 
                href="https://graybuckmedia.com/" // Replace with your actual link
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit Graybuck Media (opens in a new tab)"
                className="bg-gray-300 hover:bg-gray-400 transition-colors duration-300 text-black font-medium px-1.5 rounded-full ml-2 inline-block"
                >
                Graybuck Media
                </a>
            </p>
        </div>
    );
  }

  // Note: ADA Compliance - aria-label
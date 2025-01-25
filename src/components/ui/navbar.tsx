export default function Navbar() {

  // Nav link titles to be mapped:
  const links = ['Home', 'About', 'Video', 'Music', 'Contact' ];

  return (
    <nav className="flex justify-between sticky shadow-[0_4px_10px_2px_rgba(0,0,0,0.3)] top-0 z-50 bg-zinc-800 py-4">
      <div className="text-2xl text-white ml-5">LOGO</div>
      <div className="flex flex-row gap-10 mr-5">
        {links.map((link, index) => (
          <h2 key={index} 
              className={`text-2xl text-white relative cursor-pointer [font-family:'Dancing_Script',cursive] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 ${index % 2 === 0 ? 'after:bg-white hover:after:w-full' : 'after:bg-black hover:after:w-full'}`}
          >
            {link}
          </h2>
        ))}
      </div>
    </nav>
  );
}
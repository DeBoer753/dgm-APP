// NAVBAR
export default function Navbar() {

  // Nav link titles to be mapped:
  const links = ['Home', 'About', 'Video', 'Music', 'Contact' ]

  return (
    <nav className="flex justify-between sticky shadow-[0_4px_10px_2px_rgba(0,0,0,0.3)] top-0 z-50 bg-zinc-600 py-4">
      <div className="text-2xl text-white ml-5">LOGO</div>
      <div className="flex flex-row gap-10 mr-5">
        {links.map((links, index) => (
          <h2 key={index} className="text-2xl text-white [font-family:'Dancing_Script',cursive] relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">{links}</h2>
        ))}
      </div>
    </nav>
  );
}

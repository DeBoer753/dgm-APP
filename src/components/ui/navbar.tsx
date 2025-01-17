// NAVBAR
export default function Navbar() {

  // Nav link titles to be mapped:
  const links = ['Home', 'About', 'Video', 'Music', 'Contact' ]

  return (
    <nav className="flex justify-between border border-green-500 py-4">
      <div className="border border-blue-500 ml-5">LOGO</div>
      <div className="flex flex-row border border-red-500 gap-10 mr-5">
        {links.map((links, index) => (
          <h2 key={index} className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">{links}</h2>
        ))}
      </div>
    </nav>
  );
}

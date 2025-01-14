export default function Navbar() {
    return (
      <nav className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">MyLogo</div>
  
            {/* Navigation Links */}
            <div className="flex space-x-8">
              <a href="#" className="nav-link active">HOME</a>
              <a href="#" className="nav-link">ABOUT</a>
              <a href="#" className="nav-link">VIDEO</a>
              <a href="#" className="nav-link">MUSIC</a>
              <a href="#" className="nav-link">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

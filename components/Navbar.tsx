import Link from "next/link";

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-yellow-500 hover:text-yellow-200">A&S</h2>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
            <Link href="/" className="mr-5 hover:text-yellow-500">Home</Link>
            <Link href="/about" className="mr-5 hover:text-yellow-500">About</Link>
            <Link href="/project" className="mr-5 hover:text-yellow-500">project</Link>
            <Link href="/contact" className="mr-5 hover:text-yellow-500">contact</Link>
          </nav>
          <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 text-black rounded font-bold mt-4 md:mt-0">
            Download CV
          </button>
        </div>
      </header>
      
    
    );
  }
  
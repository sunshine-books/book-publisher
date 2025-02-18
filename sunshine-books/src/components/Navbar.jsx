import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";


function Navbar() {
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú desplegable
   

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
        

    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex items-center justify-end">
                {/* Icono para el menú en pantallas móviles */}
                <button onClick={toggleMenu} className="block lg:hidden">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path /*this create the hamburger img*/
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                </button>

                {/* Menú en pantallas grandes */}
                <div className="hidden lg:flex space-x-4">
                    <Link to="/" className="hover:text-gray-700 px-3 py-2 rounded transition">Home</Link>
                    <br></br>
                    {/* INPUT TO SEARCH */}
                    <div className="flex gap-0">
                        <input
                        type="text"
                        placeholder="Search your book..."
                        className="bg-gray-100 px-4 py-2 rounded-l-lg text-black"
                        />
                        <button onClick={()=>{navigate("/searchbooks")} } className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">Search</button>
                    </div>
              
                    <Link to="/about" className="hover:text-gray-700 px-3 py-2 rounded transition">About</Link>
                    <br></br>
                    <Link to="/NewBook" className="bg-white text-black hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition">Register a Book</Link>
                </div>
            </div>


            {/* Menú desplegable en pantallas pequeñas */}
            {isOpen && (
                <div className="lg:hidden flex flex-col space-y-4 mt-4">
                    <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
                    <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About</Link>
                    <div className="flex flex-col gap-0 " >
                        <input
                            type="text"
                            placeholder="Search your book..."
                            className="bg-gray-100 px-4 py-2 rounded-lg text-black"
                        />
                        <button onClick={()=>{navigate("/searchbooks")} } className="bg-orange-500 text-white px-4 py-2 rounded-lg">Search</button>
                    </div>
                    <br></br>
                    <Link to="/NewBook" className="bg-white text-black text-center block\ hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition">Register a Book</Link>
                </div>
            )}
           
        </nav>
    )
}

export default Navbar


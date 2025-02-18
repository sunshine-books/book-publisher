import { Link } from "react-router";
import { MarkGithubIcon } from '@primer/octicons-react'


function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400 text-sm">
                            We are committed to providing a variety genre of books you.
                        </p>
                        <Link to="/about" className="text-left hover:text-orange-500 px-3 py-2 rounded transition">Read more about us</Link>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Our Books</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex flex-row justify-center md:justify-start space-x-4">
                            <p className="text-gray-400 text-base"> Olga ML </p>
                            <a href="https://github.com/omleche"
                                className="text-gray-400 hover:text-white transition text-2xl"
                                target="_blank" rel="noopener noreferrer">
                                <MarkGithubIcon />
                            </a>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <p className="text-gray-400 text-base"> Sergio Lloreans </p>
                            <a href="https://github.com/sllorens-cuenca"
                                className="text-gray-400 hover:text-white transition text-2xl"
                                target="-blank" rel="noopener noreeferrer">
                                <MarkGithubIcon />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Sunshine Books. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;
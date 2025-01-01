
"use client" // Enable React hooks
export default function Footer(){

    return(
        <footer className="bg-brand-navy text-white py-10 mt-auto ">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-bold">Coulsource Digital</h3>
                    <p className= "text-sm text-gray-400 mt-2">
                        Deeloping solutions.
                    </p>
                </div>

                {/* Navigation links */}
                <div>
                    <h3 className="text-xl font-bold"> Quick Links</h3>
                    <ul className="mt-2 space-y-1">
                        <li>
                            <a href="#home"  className="text-gray-400 hover:text-brand-ornage">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#about"  className="text-gray-400 hover:text-brand-ornage">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#services"  className="text-gray-400 hover:text-brand-ornage">
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#contact"  className="text-gray-400 hover:text-brand-ornage">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Colum 3: Contact Info */}

                <div>
                    
                    <h3 className="text-xl font-bold">Contact Us</h3>
                    <ul className="mt-2 space-y-1">
                        <li>
                            <span className="text-gray-400">Email:</span> {""}
                            <a 
                            href="coulsource@gmail.com"
                            className="text-brand-orange hover:underline">
                                coulsource@gmail.com
                            </a>
                        </li>

                        <li>
                            {/*<span className="text-gray-400"> Phone:</span> 
                            +1 2168349684*/}
                        </li>

                        <li>
                            <span className="text-gray-400"> Address: 2696 cranlyn rd shaker hts Oh 44122</span>
                        </li>
                    </ul>
                </div>

                {/* Colum social media media */}
                <div>
                    <h3 className="text-xl font-bold"> Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-orange"
                        >
                            <img src="/socials/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                        </a>

                        <a
                         href="https://www.instagram.com"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-gray-400 hover:text-brand-orange"
                        >
                            <img src="/socials/instagram.png" alt="Instagram" className="w-6 h-6" />

                        </a>

                        <a
                         href="https://www.instagram.com"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-gray-400 hover:text-brand-orange"
                        >
                            <img src="/socials/twitter.png" alt="twitter" className="w-6 h-6" />

                        </a>


                        <a
                         href="https://www.instagram.com"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-gray-400 hover:text-brand-orange"
                        >
                            <img src="/socials/facebook.png" alt="Instagram" className="w-6 h-6" />

                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Coulsource Digital. All rights reserved.
            </div>
        </footer>
    );
}
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <>
        <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4">Fama Barber Shop & Beauty Salon</h2>
            <div className="flex justify-center gap-6 mb-4">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
            >
                <FaFacebookF size={24} />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300"
            >
                <FaInstagram size={24} />
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors duration-300"
            >
                <FaTwitter size={24} />
            </a>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Fama Barber Shop. All rights reserved.</p>
        </div>
        </footer>
        </>
    );
}

export default Footer;
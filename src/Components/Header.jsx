import logo from '../assets/logo.png';

function Header(){
    return(
        <>
        <header className="bg-black text-white p-4 animate-in slide-in-from-top fade-in duration-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
                    <img src={logo} alt="Fama Logo" className="h-20 w-20 object-contain" />
                    <h1 className="text-xl font-bold">Fama Barber Shop</h1>
                </div>
            <nav className="space-x-4">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#gallary" className="hover:text-gray-300">Gallary</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
            </nav>
        </div>
        </header>
        </>
    )
}

export default Header;

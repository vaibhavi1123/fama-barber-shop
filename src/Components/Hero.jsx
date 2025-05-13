function Hero(){
    return(
        <>
        <section className="bg-cover bg-center h-[90vh] text-white flex items-center justify-center"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/close-up-washbasin_107420-94763.jpg?ga=GA1.1.1963795720.1733663457&semt=ais_hybrid&w=740')" }}>
            <div className="bg-black bg-opacity-60 p-6 rounded text-center max-w-lg">
                <h2 className="text-4xl font-bold mb-4">Barbering with Style</h2>
                <p className="mb-6">Rated 4.6 stars with 116+ reviews — visit us today in Denton, TX!</p>
                <a href="#contact" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Book Now</a>
            </div>
        </section>
        </>
    );
}

export default Hero;
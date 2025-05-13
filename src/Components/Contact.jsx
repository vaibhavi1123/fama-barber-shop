function Contact(){
    return(
        <>
        <section className="py-12 bg-gray-100" id="contact">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-2">📍 500 N Bell Ave #109, Denton, TX 76209</p>
                <p className="mb-2">📞 <a href="tel:+19406129127" className="text-blue-600 hover:underline">+1 940-612-9127</a></p>
                <p className="mb-2">🕒 Open ⋅ Closes 7 pm</p>
                <p className="mb-2">📍 <a href="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Directions on Google Maps</a></p>
            </div>
            <div>
                <iframe
                title="Fama Barber Shop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.123456789!2d-97.123456789!3d33.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c123456789abc%3A0x123456789abcdef!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                ></iframe>
            </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Contact;
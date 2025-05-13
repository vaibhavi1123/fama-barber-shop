const services = [
  { icon: '✂️', title: 'Haircuts', description: 'Classic and modern styles tailored to you.' },
  { icon: '🧔', title: 'Beard Grooming', description: 'Precision trims and styling for your beard.' },
  { icon: '💈', title: 'Shaves', description: 'Traditional hot towel shaves for a clean finish.' },
];

function Services(){
    return(
        <>
        <section className="py-12 bg-gray-100" id="services">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
        </>
    );
}

export default Services;
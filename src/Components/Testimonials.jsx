import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  { name: 'John D.', feedback: 'Best haircut I have ever had!' },
  { name: 'Sarah K.', feedback: 'Professional and friendly staff.' },
  { name: 'Mike L.', feedback: 'Great atmosphere and excellent service.' },
];

function Testimonials(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return(
        <>
        <section className="py-12" id="testimonials">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
                <div key={index}>
                <p className="text-lg italic">"{testimonial.feedback}"</p>
                <p className="mt-4 font-semibold">- {testimonial.name}</p>
                </div>
            ))}
            </Slider>
        </div>
        </section>
        </>
    );
}

export default Testimonials;
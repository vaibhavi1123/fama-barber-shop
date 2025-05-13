import React from 'react';

function Gallary(){
    const images = [
    "https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg?ga=GA1.1.1963795720.1733663457&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/mid-section-barber-applying-cream-clients-beard_107420-94759.jpg?ga=GA1.1.1963795720.1733663457&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/woman-washing-hair-customer_23-2147737054.jpg?ga=GA1.1.1963795720.1733663457&semt=ais_hybrid&w=740",
    // Add more image paths
    ];
    return(
        <>
        <div className="flex justify-between gap-6 p-6 w-full h-full object-cover transition-transform duration-300 group-hover:animate-scissor">
      {images.map((src, i) => (
        <div key={i} className="relative group w-1/3 aspect-square overflow-hidden rounded-xl shadow-lg">
  {/* Top half of image */}
  <img
    src={src}
    alt={`Image ${i + 1}`}
    className="absolute w-full h-full object-cover clip-top transition-transform duration-[1500ms] group-hover:-translate-y-[15px]"
  />

  {/* Bottom half of image */}
  <img
    src={src}
    alt={`Image ${i + 1}`}
    className="absolute w-full h-full object-cover clip-bottom transition-transform duration-[1500ms] group-hover:translate-y-[15px]"
  />

  {/* SVG Scissor Animation */}
  <svg
    className="absolute top-1/2 -translate-y-1/2 left-0 opacity-0 group-hover:opacity-100 animate-scissor-move pointer-events-none z-10"
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
</div>


      ))}
    </div>
        </>
    );
}

export default Gallary;
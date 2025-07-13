import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import demoimg from '../Images/About-main-img.avif';

// Alcohol images
import brandyImg from '../Images/brandy-circle.jpg';
import ginImg from '../Images/gin-circle.webp';
import rumImg from '../Images/rum-circle.jpg';
import tequilaImg from '../Images/Tequila-circle.jpg';
import vodkaImg from '../Images/vodka-circle.jpg';
import whiskeyImg from '../Images/Bar-backgraound.avif';

// Carousel images
import client1 from '../Images/client-1.jpg';
import client2 from '../Images/client-2.jpg';
import client3 from '../Images/client-3.jpg';
import client4 from '../Images/client-4.jpg';
import client5 from '../Images/client-5.jpg';
import client6 from '../Images/client-6.jpg';
import barBg from '../Images/Bar-backgraound.avif';

const alcoholTypes = [
  { name: 'Brandy', image: brandyImg },
  { name: 'Gin', image: ginImg },
  { name: 'Rum', image: rumImg },
  { name: 'Tequila', image: tequilaImg },
  { name: 'Vodka', image: vodkaImg },
  { name: 'Whiskey', image: whiskeyImg },
];

const testimonials = [
  {
    name: 'Mia Malkova',
    role: 'Marketing Manager',
    image: client1,
    review:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Rai-lil Black',
    role: 'Marketing Manager',
    image: client2,
    review:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Roger Scott',
    role: 'Marketing Manager',
    image: client3,
    review:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },

  {
    name: 'Mia Malkova',
    role: 'Marketing Manager',
    image: client4,
    review:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Rai-lil Black',
    role: 'Marketing Manager',
    image: client5,
    review:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Roger Scott',
    role: 'Marketing Manager',
    image: client6,
    review:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },





];

export default function About() {
  return (
    <div className="container-fluid p-0 m-0 bg-light">
      {/* Top Section */}
      <div className="row align-items-center py-5 px-md-5">
        <div className="col-md-6 px-5">
          <h2 className="fw-bold display-4 mb-4" style={{ whiteSpace: 'nowrap' }}>
            Desire Meets A New Taste
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
            would have been rewritten a thousand times and everything that was left from its origin would
            be the word <strong>"and"</strong>.
          </p>
          <h3 className="mt-4 fw-semibold">
            <span className="text-danger fst-italic fw-bold me-2">115</span>
            Years of Experience In Business
          </h3>
        </div>

        <div className="col-md-6 px-5 text-center">
          <img
            src={demoimg}
            alt="Whiskey bottle"
            style={{ width: '450px', height: 'auto' }}
            className="rounded shadow"
          />
        </div>
      </div>

      {/* Circle Hover Effects */}
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          {alcoholTypes.map((item, index) => (
            <div className="col-6 col-sm-4 col-md-2 mb-4" key={index}>
              <div className="circle-container">
                <img src={item.image} alt={item.name} className="circle-img" />
              </div>
              <p className="mt-2 fw-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Review Section */}
      <div
        className="py-5 text-white"
        style={{
          backgroundImage: `url(${barBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container text-center mb-4">
          <h6 className="text-uppercase fst-italic">Testimonial</h6>
          <h2 className="fw-bold display-5">Happy Clients</h2>
        </div>

        <div id="carouselTestimonials" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((client, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} data-bs-interval="3000">
                <div className="container d-flex justify-content-center">
                  <div
                    className="card text-white bg-transparent border-0 text-center"
                    style={{ maxWidth: '700px' }}
                  >
                    <div className="card-body">
                      <span className="fs-1 text-warning">❝</span>
                      <p className="fst-italic">{client.review}</p>
                      <img
                        src={client.image}
                        alt={client.name}
                        className="rounded-circle shadow"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <h5 className="mt-3 mb-0 fw-bold">{client.name}</h5>
                      <p className="text-muted">{client.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-indicators mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselTestimonials"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .circle-container {
          border: 2px solid #be4b28;
          border-radius: 50%;
          padding: 10px;
          width: 120px;
          height: 120px;
          margin: 0 auto;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .circle-img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .circle-container:hover .circle-img {
          transform: scale(1.1);
        }

        .carousel-indicators [data-bs-target] {
          background-color: #b7472a ;
        }
      `}</style>

   <div className='row m-0 p-0 w-100 Experience-div pt-5'>

    <div className='col-md-3 '>
  <h1 className='Experience-div-heding text-danger fst-italic fw-bold'>3,000</h1>
  <p className='Experience-div-para'>Our Satisfied Customers</p>
    </div>

    <div className='col-md-3 '>
  <h1 className='Experience-div-heding text-danger fst-italic fw-bold'>115</h1>
  <p className='Experience-div-para'>Years of Experience</p>
    </div>

    <div className='col-md-3 '>
  <h1 className='Experience-div-heding text-danger fst-italic fw-bold'>100</h1>
  <p className='Experience-div-para'>Kinds of Liquor</p>
    </div>

    <div className='col-md-3 '>
  <h1 className='Experience-div-heding text-danger fst-italic fw-bold'>40</h1>
  <p className='Experience-div-para'>Our Branches</p>
    </div>

   </div>





    </div>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar2';
import Footer from '../components/footer';
import './gallery-page.css';

const GalleryPage = (props) => {
  const images = [
    { src: '/IMG_0403.JPG', alt: 'Image 2' },
    { src: '/IMG_0402.JPG', alt: 'Image 3' },
    { src: '/IMG_0401.JPG', alt: 'Image 4' },
    { src: '/IMG_0400.JPG', alt: 'Image 5' },
    { src: '/IMG_0399.JPG', alt: 'Image 6' },
    { src: '/IMG_0398.JPG', alt: 'Image 7' },
    { src: '/IMG_0397.JPG', alt: 'Image 8' },
    { src: '/IMG_0396.JPG', alt: 'Image 9' },
    { src: '/IMG_0395.JPG', alt: 'Image 10' },
    { src: '/IMG_0393.JPG', alt: 'Image 11' },
    { src: '/bbf0d3f2-1743-49ed-8b29-8b6bc8b8635a-1500w.jpg', alt: 'Image 13' }, 
    { src: '/2209e84d-a845-4f6b-871d-aec16fbed8fc-1500w.jpg', alt: 'Image 14' }, 
    { src: '/468a92ef-3fe8-4bd0-90fa-60332fd5cca4-1500w.jpg', alt: 'Image 15' }, 
    { src: '/62cbcb29-c9d9-4f2c-8ceb-a783e5c0eec1-1500w.jpg', alt: 'Image 16' },
    { src: '/34f243ad-df9d-4bf1-a485-f33a5e09273b-1500w.jpg', alt: 'Image 17' }, 
    { src: '/31cb33ed-0712-40b2-a01b-aea3ee7b091c-1500w.jpg', alt: 'Image 18' },
    { src: '/0a498656-76ad-4e6b-862f-d5533d04a9f3-1500w.jpg', alt: 'Image 19' },
    { src: '/image.png', alt: 'Image 19' },
    { src: '/s1.JPG', alt: 'Image 20' },
    { src: '/s2.JPG', alt: 'Image 21' },
    { src: '/s3.JPG', alt: 'Image 22' },
    { src: '/s4.JPG', alt: 'Image 23' },
    { src: '/s4.JPG', alt: 'Image 23' },
    { src: '/s5.JPG', alt: 'Image 24' },
    { src: '/s6.JPG', alt: 'Image 25' },
    { src: '/s7.JPG', alt: 'Image 26' },
    { src: '/s8.JPG', alt: 'Image 27' },
    { src: '/s9.JPG', alt: 'Image 28' },
    { src: '/s10.JPG', alt: 'Image 29' },
    { src: '/s11.JPG', alt: 'Image 30' },
    { src: '/s12.JPG', alt: 'Image 31' },
    { src: '/s13.JPG', alt: 'Image 32' },
    { src: '/s14.JPG', alt: 'Image 33' },
    { src: '/s15.JPG', alt: 'Image 34' },
    { src: '/s16.JPG', alt: 'Image 35' },
    { src: '/s17.JPG', alt: 'Image 36' },
    { src: '/s178.JPG', alt: 'Image 37' },
  

    
  
  ];

  return (
    <div className="gallery-page-container">
      <Helmet>
        <title>GalleryPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps Gallery" />
        <meta property="og:title" content="GalleryPage - Harmony Steps " />
        <meta property="og:description" content="HarmonySteps Gallery" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1" />
      
      <div className="gallery-page-header">
        <h1>Our Gallery</h1>
        <p>Explore the highlights from our events, performances, and more.</p>
      </div>

      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <Footer logo="Harmony Steps Dance" rootClassName="footer-root-class-name" />
    </div>
  );
};

export default GalleryPage;
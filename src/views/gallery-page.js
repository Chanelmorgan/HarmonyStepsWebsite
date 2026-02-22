import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar2';
import Footer from '../components/footer';
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
    { src: '/s15.png', alt: 'Image 34' },
    { src: '/s16.png', alt: 'Image 35' },
    { src: '/s17.JPG', alt: 'Image 36' },
    { src: '/s18.JPG', alt: 'Image 37' },
    { src: '/new_1.JPG', alt: 'Image 38' },
    { src: '/new_2.JPG', alt: 'Image 39' },
    { src: '/new_3.JPG', alt: 'Image 40' },
    { src: '/new_5.JPG', alt: 'Image 42' },
    { src: '/new_6.JPG', alt: 'Image 43' },
    { src: '/new_7.JPG', alt: 'Image 44' },
    { src: '/new_8.JPG', alt: 'Image 45' },
    { src: '/new_9.JPG', alt: 'Image 46' },
    { src: '/new_10.JPG', alt: 'Image 47' },
    { src: '/new_11.JPG', alt: 'Image 48' },
    { src: '/new_12.JPG', alt: 'Image 49' },
    { src: '/new_13.JPG', alt: 'Image 50' },
    { src: '/new_14.JPG', alt: 'Image 51' },
    { src: '/new_15.png', alt: 'Image 52' },
    { src: '/new_16.JPG', alt: 'Image 53' },

  
  ];

  return (
    <div className="gallery-page-container">
      <Head>
        <title>GalleryPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps Gallery" />
        <meta property="og:title" content="GalleryPage - Harmony Steps " />
        <meta property="og:description" content="HarmonySteps Gallery" />
      </Head>
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
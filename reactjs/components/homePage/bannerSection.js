import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { loading: () => null, ssr: false })
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SearchBlock from "./searchBlock";

const BannerSection = () => {
  return (
    <section className="banner_section">
      <OwlCarousel
        loop={true}
        dots={false}
        nav={false}
        autoplay={true}
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        responsive={{
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }}
        className='owl-theme'
        id="bannerslider"
      >
        <div className='item'>
          <img src="images/slider-img.png" alt="bannerslider" />
          <div className="caption_block home">
            <div className="container">
              <h1>Seamless booking for your Next Adventure</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales eros non viverra maximus. </p>
              <button className="button1">Explore More</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <img src="images/maldivecard1.png" alt="bannerslider" />
          <div className="caption_block home">
            <div className="container">
              <h1>Seamless booking for your Next Adventure</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales eros non viverra maximus. </p>
              <button className="button1">Explore More</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <img src="images/maldivecard2.png" alt="bannerslider" />
          <div className="caption_block home">
            <div className="container">
              <h1>Seamless booking for your Next Adventure</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales eros non viverra maximus. </p>
              <button className="button1">Explore More</button>
            </div>
          </div>
        </div>
      </OwlCarousel>
      <SearchBlock />
    </section>
  )
}

export default BannerSection;
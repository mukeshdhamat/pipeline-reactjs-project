import React, { useEffect, useState } from 'react'
import BannerSection from '../../components/homePage/bannerSection';
import OfferSection from '../../components/homePage/offerSection';
import PopularDealsSection from '../../components/homePage/popularDealsSection';
import WhyChooseUsSection from '../../components/homePage/whyChooseUsSection';
import Layout from '../../components/Layout';

const Home = ({ ...props }) => {
  const { offers, popularDeals } = props;
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [isSubscribeShown, setIsSubscribeShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 600 && isSubscribeShown === false ){
        setShowSubscribe(true);
      } else if (window.scrollY < 600) {
        setShowSubscribe(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [isSubscribeShown]);

  const handleShowSubsribe = () => {
    setIsSubscribeShown(true);
    setShowSubscribe(false);
  }

  return (
    <Layout {...props}>
      <div>
        <BannerSection />
        <main>
          <PopularDealsSection  popularDeals={popularDeals} />
          <OfferSection offers={offers} />
          <WhyChooseUsSection />
          <div className={showSubscribe ? "newsletterss_block show fade-in" : "newsletterss_block d-none"}>
            <span className="close_icon" onClick={() => handleShowSubsribe()}><img src="images/close.svg" height="13" width="13" alt="newsletter" /></span>
            <h4>Newsletter </h4>
            <p>Sign Up for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
            <form>
              <div className="form-group">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input type="email" placeholder="Email" />
              </div>
              <button className="button1">Subscribe</button>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Home;
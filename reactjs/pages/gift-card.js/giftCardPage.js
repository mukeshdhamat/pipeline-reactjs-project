import React from 'react';
import Layout from "../../components/Layout";

const GiftCard = ({ ...props }) => {
  return (
    <Layout {...props}>
      <section className="giftcard_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftimg_block">
              <img src="images/cardimg1.png" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lefttext_block">
              <div className="block_title">
                <h2>The Luxury Trips Gift Card</h2>
              </div>
              <p>Treat them to something they really want with a Luxury Escapes Gift Card. From local weekends away to once-in-a-lifetime getaways in exotic locales, they’ll have the world at their fingertips with great deals to amazing places.</p>
              <button className="button1"><a href="giftcards-inner.html">Log In to Buy</a></button>
            </div>
          </div>
        </div>
      </section>
      <section className="bannerimg_section  center giftcard">
        <img src="images/giftcardbanner.png" alt="giftcardbanner" className="banneimg1" />
        <div className="captionimg_block">
          <h2>Priceless Memories Included</h2>
          <p>Whether you’re buying for someone special, a friend, family member, or even a customer, client or employee, the Luxury Escapes Gift Card is a present everyone is guaranteed to love. Best of all, they can enjoy the ultimate flexibility of three years’ validity to book whichever escape they choose.</p>
        </div>
      </section>
      <main>
        <section className="howitworks_section">
          <div className="container">
            <div className="chooseus_block giftcard">
              <div className="block_title">
                <h2>How It Works</h2>
              </div>
              <div className="block_content">
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 choose_block">
                    <div className="icon_block">
                      <img src="images/choose1.svg" alt="icon" />
                    </div>
                    <div className="choose_content">
                      <h6>Purchase Online</h6>
                      <p>If you find a better price, we'll match it</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 choose_block">
                    <div className="icon_block">
                      <img src="images/choose2.svg" alt="icon" />
                    </div>
                    <div className="choose_content">
                      <h6>Purchase Online</h6>
                      <p>If you find a better price, we'll match it</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 choose_block">
                    <div className="icon_block">
                      <img src="images/choose3.svg" alt="icon" />
                    </div>
                    <div className="choose_content">
                      <h6>Purchase Online</h6>
                      <p>If you find a better price, we'll match it</p>
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <a href="#" className="btn-primary">Read Our Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq_section">
          <div className="container">
            <div className="block_title">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="block_content">
              <div className="accordion">
                <div className="accordion-item">
                  <a>Why is the moon sometimes out during the day?</a>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Why is the sky blue?</a>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Will we ever discover aliens?</a>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>How much does the Earth weigh?</a>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>How do airplanes stay up?</a>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default GiftCard;
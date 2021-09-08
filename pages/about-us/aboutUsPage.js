import React from 'react';
import Layout from "../../components/Layout";

const AboutUs = ({ ...props }) => {
  return (
    <Layout {...props}>
      <section className="container">
        <div className="bannerimg_section center about-us-banner">
          <img src="images/about-us-banner.jpg" alt="About Us" className="banneimg1" />
          <div className="captionimg_block">
            <h2>It’s time to see the world with a different lens</h2>
          </div>
        </div>
        <div className="about-content">
          <h2 className="playfair">About Us</h2>
          <p>Customized Luxury Holidays hand-picked & neatly crafted by Experts with strenuous efforts, that is what we do at THE LUXURY TRIPS. We pick handful of properties and cater to our selective clientele and assist them up a step ahead to get more personal with the taste of luxury.</p>
          <p>Born out of curiosity in the midst of the world crisis with a deeper thought and understanding what the world requires, thus The Luxury Trips was brought in with a pure thought to offer the clients the sense and touch of luxury what the world has to offer.</p>
          <p>Whether it’s the American Continent, the grandeur Fiji Islands or the Boracay beaches or either the nightlife in European cities we cover it all, we know where the hidden gems are and we bring it on the platter to serve the wealthy and affluent classes of the globe.</p>
          <p>Our guests enjoy the finest of the services with matchless pricing and a class of human touch added in every luxurious experience you book with us. Top of the range technology gathered on one platform to make sure every esteemed guest feels this class apart service on board and makes it convenience in hand.</p>
          <p>We want to welcome all the ones who are looking to taste this luxury experience, we stand at your service to make you roam around the world with an extra touch of opulence.</p>
        </div>
      </section>
      <section className="about-nav-section d-none">
        <ul>
          <li><a href="#OurVision">Our Vision</a></li>
          <li><a href="#TheCompany">The Company</a></li>
          <li><a href="#LeadershipTeam">Leadership Team</a></li>
          <li><a href="#OurCulture">Our Culture</a></li>
          <li><a href="#MediaRelease">Media Release</a></li>
        </ul>
      </section>
      <section id="OurVision" className="our-vision-section">
        <div className="container">
          <h2>At The Luxury Trips we believe everyone deserves a great escape</h2>
          <div className="vision-category">
            <h3>Why choose The Luxury Trips for your next holiday?</h3>
            <div className="vision-inner">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="vision-box">
                    <div className="vision-icon">1</div>
                    <p>We’ll give our best price guarantee. Your escape is negotiated exclusively.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="vision-box">
                    <div className="vision-icon">2</div>
                    <p>We’ll give you a 7-Day ‘Change of Mind’ refund guarantee</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="vision-box">
                    <div className="vision-icon">3</div>
                    <p>We’ll give you VIP inclusions. Get more with your escape.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="mb-2">Become a member today</h3>
          <p>It’s free and each day we’ll send you our specially negotiated holidays</p>
          <a href="#" className="btn-primary">Join Now</a>
        </div>
      </section>
      <section id="TheCompany" className="bannerimg_section center the-company-section d-none">
        <img src="images/people-coworking-covid-restrictions-img.png" alt="The Company" className="banneimg1" />
        <div className="captionimg_block">
          <h2 className="playfair">The Company</h2>
          <p>Luxury Escapes has more than two million subscribers to our websites with customers across Australia, New Zealand, Singapore, India, Hong Kong, the US and the UK.</p>
          <p>Luxury Escapes is a member of IATA (International Air Transport Association).</p>
          <p>Our team is at work 365 days a year, and is contactable by phone and email and love to hear from our members before, during and after their Luxury Escape.</p>
          <p>Luxury Escapes is owned by Lux Group Limited, a privately-owned business based in Melbourne which was founded in 2009 by Jeremy Same and Adam Schwab. Lux Group has more than 250 team members globally, with major offices in Sydney, Melbourne, Bangalore, Singapore and San Francisco. In addition to Luxury Escapes, Lux Group is a party to a joint venture which houses the Scoopon, Cudo and TreatMe brands.</p>
        </div>
      </section>
      <section id="LeadershipTeam" className="leader-team-section d-none">
        <div className="container">
          <div className="leader-title">
            <h2 className="playfair">Leadership Team</h2>
            <p>Our leaders inspire our team to live according to our company values, which include impressing our customers and clients with a truly exceptional experience, innovation, experimenting and learning, being accountable and being positive and fun.</p>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team1.png" alt="Team" />
                </div>
                <h4>John Smith</h4>
                <p>Co-Founder & CEO</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team2.png" alt="Team" />
                </div>
                <h4>Marion Lamb</h4>
                <p>Finance Officer</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team3.png" alt="Team" />
                </div>
                <h4>Lela West</h4>
                <p>Marketing Head</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team4.png" alt="Team" />
                </div>
                <h4>Samuel Barnes</h4>
                <p>Sales head</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team5.png" alt="Team" />
                </div>
                <h4>Edgar Clark</h4>
                <p>Manager</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team6.png" alt="Team" />
                </div>
                <h4>Micheal Herrera</h4>
                <p>Customer experience</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team7.png" alt="Team" />
                </div>
                <h4>Fred Thomas</h4>
                <p>Manager</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="images/team8.png" alt="Team" />
                </div>
                <h4>Eddie Payne</h4>
                <p>Out Sourcing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="OurCulture" className="our-culture-section d-none">
        <h2 className="playfair">Our Culture</h2>
        <div className="our-image-gallery">
          <div className="img-box">
            <img src="images/our-culture-img1.jpg" alt="" />
          </div>
          <div className="img-box">
            <img src="images/our-culture-img2.jpg" alt="" />
            <img src="images/our-culture-img3.jpg" alt="" />
          </div>
          <div className="img-box">
            <img src="images/our-culture-img4.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="our-mission-section d-none">
        <div className="container">
          <div className="leader-title">
            <h2 className="playfair">Our Mission</h2>
            <p>We want to make people happy with incredible deals for the world's best holiday experiences.</p>
          </div>
        </div>
      </section>
      <section className="our-values-section d-none">
        <div className="container">
          <h2 className="playfair">Our Values</h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="value-box blue-box">
                <div className="icon-title">
                  <div className="value-icon">
                    <img src="images/heart-ic.svg" alt="" />
                  </div>
                  <h3>Make People Love Us</h3>
                </div>
                <ul>
                  <li>We just want our customers to like us, we want them to love us</li>
                  <li>We will never settle - we will go above and beyond to exceed expectations - every time</li>
                  <li>We care - we pride ourselves on our relationships. With members, with our clients, with our team</li>
                  <li>Always be helping</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="value-box green-box">
                <div className="icon-title">
                  <div className="value-icon">
                    <img src="images/solution-ic.svg" alt="" />
                  </div>
                  <h3>Move Fast and Find the Solutions</h3>
                </div>
                <ul>
                  <li>Take responsibility. Be prepared to get it wrong some of the time (you won't be blamed for having a go.)</li>
                  <li>We reward speed and efficiency. We must never dwell on mistakes (but we MUST learn from them)</li>
                  <li>Back yourself in – give things a try and improve processes</li>
                  <li>Challenge the status quo.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="value-box lightblue-box">
                <div className="icon-title">
                  <div className="value-icon">
                    <img src="images/checkmark-ic.svg" alt="" />
                  </div>
                  <h3>Do What's Right</h3>
                </div>
                <ul>
                  <li>No Hierarchy. Everyone’s door should always be open</li>
                  <li>Pay it Forward. It won’t be forgotten</li>
                  <li>Feedback is a gift (but deliver it the right way)</li>
                  <li>Never, ever, ever, screw a customer</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="value-box yellow-box">
                <div className="icon-title">
                  <div className="value-icon">
                    <img src="images/magic-ic.svg" alt="" />
                  </div>
                  <h3>Execute Brilliantly</h3>
                </div>
                <ul>
                  <li>Our customers care about the details, so should we</li>
                  <li>Try to think about every possible problem. And solve them</li>
                  <li>Care about the process, not just about the outcome</li>
                  <li>Never ignore the details</li>
                  <li>Get shit done, properly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="MediaRelease" className="media-releases-section d-none">
        <div className="container">
          <h2 className="playfair">Media Releases</h2>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="media-box">
                <div className="img-box">
                  <img src="images/media-img1.png" alt="" />
                </div>
                <div className="media-content">
                  <div className="date-box">
                    <img src="images/dateicon.svg" alt="dateicon" /> 26 May 2021
                  </div>
                  <h3>Travel 2020: A New Decade of Travel</h3>
                  <p>With the end of summer approaching, Luxury Escapes have today unveiled the world-first Holiday Lab, a pop-up designed to prescribe Australians with a tangible remedy for their post-holiday blues.</p>
                  <a href="#" className="btn-secondary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="media-box">
                <div className="img-box">
                  <img src="images/media-img2.png" alt="" />
                </div>
                <div className="media-content">
                  <div className="date-box">
                    <img src="images/dateicon.svg" alt="dateicon" /> 26 May 2021
                  </div>
                  <h3>Luxury Escapes unveil world-first Holiday Lab retail pop-up</h3>
                  <p>With the end of summer approaching, Luxury Escapes have today unveiled the world-first Holiday Lab, a pop-up designed to prescribe Australians with a tangible remedy for their post-holiday blues.</p>
                  <a href="#" className="btn-secondary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="media-box">
                <div className="img-box">
                  <img src="images/media-img3.png" alt="" />
                </div>
                <div className="media-content">
                  <div className="date-box">
                    <img src="images/dateicon.svg" alt="dateicon" /> 26 May 2021
                  </div>
                  <h3>Travel 2021: Travel Reimagined</h3>
                  <p>With the end of summer approaching, Luxury Escapes have today unveiled the world-first Holiday Lab, a pop-up designed to prescribe Australians with a tangible remedy for their post-holiday blues.</p>
                  <a href="#" className="btn-secondary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutUs;
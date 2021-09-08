import React from 'react';
import Layout from "../../components/Layout";

const ContactUs = ({ ...props }) => {
  return (
    <Layout {...props}>
      <section className="bannerimg_section">
        <img src="images/contactbanner.png" alt="contactbanner" className="banneimg1" />
        <div className="captionimg_block">
          <h2>Contact Us</h2>
        </div>
      </section>
      <main>
        <section className="contactus_section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 right_block">
                <h4>Can’t find answer in our FAQs section? You can ask your question directly!</h4>
                <div className="contactus_form">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>What can we do to help today?</label>
                        <select>
                          <option>Please select your issue</option>
                          <option>issue1</option>
                          <option>issue1</option>
                          <option>issue1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="form-group last">
                        <label>Would you like to give us more details about your query?</label>
                        <textarea></textarea>
                        <span className="textarea-info">Minimum of 200 characters</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn-primary">Submit</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 left_block">
                <h4 className="text-center">You can also call us at</h4>
                <img src="images/contacticon1.svg" alt="contacticon" className="contacticon" />
                <a href="tel:079 423 3323">079 423 3323</a>
                <span>For furthur questions</span>
                <p> <img src="images/location.svg" alt="contacticon" style={{ marginRight: "5px" }} />26,New Cloth Market, Ahmedabad : 380002 India.</p>
                <div className="contact1_block d-none">
                  <img src="images/locationicon1.svg" alt="locationicon" />
                  <p>
                    26,New Cloth Market,
                    Ahmedabad: 380002 India.</p>
                  <div className="map-responsive ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.0768848940745!2d72.59930745791723!3d23.018125596238825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac8a7faf3%3A0x23850359c0a15770!2sNew%20Cloth%20Market!5e0!3m2!1sen!2sin!4v1623531125067!5m2!1sen!2sin" width="600" height="320" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
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

export default ContactUs;
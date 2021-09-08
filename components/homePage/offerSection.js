import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { loading: () => null, ssr: false })
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OfferSection = ({ ...props }) => {
  const { offers } = props;
  return (
    <section className="offer1_section">
      <div className="container">
        {offers?.length > 0 ? (
          <>
            {offers.map((offer, index) => {
              return (
                <div className="offerdetail_block" key={offer.id}>
                  <div className="first_block">
                    <div className="row no-margin">
                      <div className="col-md-4 col-lg-4 col-md-4 col-xs-12 img_block">
                        <img src={offer.offerTitleImage} />
                        <div className="offersmall_block">{offer.offerText}</div>
                      </div>
                      <div className="col-md-8 col-lg-8 col-md-8 col-xs-12 imgright_block">
                        {offer?.hotelImages.length > 0 ? (
                          <OwlCarousel
                            loop={true}
                            dots={true}
                            nav={true}
                            autoplay={false}
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
                            id="offerslider1"
                          >
                            {offer?.hotelImages.map((hotelImage, index) => {
                              return (
                                <div className="item" key={`${offer.id}${index}`}>
                                  <img src={hotelImage} alt="dealimg" />
                                </div>)
                            })}
                          </OwlCarousel>
                        ) : (
                          <div className="item">
                            No Image Found
                          </div>
                        )}
                        <a href="#" className="wishlist_icon"><img src="images/wishlist_icon.svg" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="last_block">
                    <div className="placename_block">
                      <div className="firstline_block">
                        <img src="images/location.svg" alt="" />
                        {offer.city}
                      </div>
                      <h5>{offer.hotelDescription}</h5>
                      <div className="lable_with_date">
                        <h6>{offer.hotelName}</h6>
                        <div className="ddate_block">
                          <img src="images/dateicon.svg" alt="dateicon" width="17" height="17" />
                          Travel until <b>{offer.travelUntilDate}</b>
                        </div>
                      </div>
                    </div>
                    <div className="price_block">
                      <span>{offer.numberOfNights} nights from</span>
                      <div className="price">₹{offer.amount}<span>/ room</span></div>
                      <span className="valuespan">Valued up to ₹{offer.valueAmount}</span>
                    </div>
                    <div className="detail_block">
                      <button className="button1">View Detail</button>
                      <a href="#" className="share_this">
                        <img src="images/share_icon.svg" alt="dateicon" width="17" height="17" /> Share this package link
                      </a>
                    </div>
                  </div>
                  <div className="lastul_block">
                    {offer?.hotelFacilitiesDetails?.length > 0 && <ul>
                      {offer?.hotelFacilitiesDetails.map((labels, index) => {
                        return (
                          <li key={`${offer.id}${index}`}>
                            {labels}
                          </li>
                        )
                      })}
                    </ul>}
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <div className="offerdetail_block">
            No offers found
          </div>
        )}
      </div>
    </section>
  )
}

export default OfferSection;
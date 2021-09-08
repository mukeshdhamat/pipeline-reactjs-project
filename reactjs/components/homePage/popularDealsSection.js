import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { loading: () => null, ssr: false })
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const PopularDealsSection = ({ ...props }) => {
  const { popularDeals } = props;
  return (
    <section className="populardeals_section">
      <div className="container">
        <div className="block_title">
          <h2>Popular deals for India</h2>
        </div>
        {popularDeals?.length > 0 ? (
          <div className="block_content">
            <OwlCarousel
              loop={true}
              nav={true}
              dots={false}
              autoplay={true}
              autoplayTimeout={3000}
              margin={20}
              responsive={{
                0: {
                  items: 1
                },
                600: {
                  items: 2
                },
                1000: {
                  items: 3
                }
              }}
              id="dealsslider"
            >
              {popularDeals.map((deal) => {
                return (
                  <div className="item" key={deal.id}>
                    <img src={deal.url} alt="dealsslider" />
                    <div className="dealstitle_block">
                      <h4>{deal.title}</h4>
                      <h6>{deal.city}, {deal.state}</h6>
                    </div>
                  </div>
                )
              })}
            </OwlCarousel>
          </div>
        ) : (
          <div className="block_content">
            No Deals Found
          </div>
        )}
      </div>
    </section>
  )
}

export default PopularDealsSection;
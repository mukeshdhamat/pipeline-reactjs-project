import HomeContainer from './home';
import { getUserProps, getPopularDeals, getOffers } from "./../utils/commonFunctions";

const Index = ({ ...props }) => {
  return (
    <HomeContainer {...props} />
  )
}

export async function getServerSideProps({ req, res }) {
  const token = req.cookies.token;
  const userDetails = await getUserProps(token);
  const popularDeals = await getPopularDeals();
  const offers = await getOffers();
  const response = {
    props: {
      userData: userDetails?.userData || {},
      userToken: userDetails?.userToken || "",
      isUserLoggedIn: userDetails?.isUserLoggedIn || false,
      offers: offers || [],
      popularDeals: popularDeals || []
    }
  }
  return response;
}

export default Index;

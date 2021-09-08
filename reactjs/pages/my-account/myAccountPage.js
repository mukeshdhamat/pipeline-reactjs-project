import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Link from 'next/link';
import { getUserData } from "../../utils/commonFunctions";

const MyAccount = ({ ...props }) => {
  const { setUserIsLoggedOut } = props;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let userDetails = getUserData();
    setUserData(userDetails);
  }, [])

  return (
    <Layout {...props}>
      <div>
        <section className="my-account-section search-header-mr-top">
          <div className="container">
            <div className="profile-box">
              <div className="profile-info">
                <img src="images/user-img.svg" alt="" />
                <h3>{`${userData?.firstName || '' } ${userData?.lastName || ''}`}</h3>
              </div>
              <div className="logout-info" onClick={() => setUserIsLoggedOut()}>
                <Link href="/">
                  <a><img src="images/logout-ic.svg" alt="" /> Logout</a>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <a href="my-trips.html" className="my-account-item">
                  <div className="img-box">
                    <img src="images/my-trip-ic.svg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3>My Trips</h3>
                    <p>View details of your upcoming and past trips</p>
                  </div>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <Link href="/my-profile">
                  <a className="my-account-item active">
                    <div className="img-box">
                      <img src="images/user-blue-ic.svg" alt="" />
                    </div>
                    <div className="content-box">
                      <h3>My Profile</h3>
                      <p>Update your personal details and link your friend flyer account</p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-12 col-lg-4">
                <a href="my-destination.html" className="my-account-item">
                  <div className="img-box">
                    <img src="images/location-blue-ic.svg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3>My Destination</h3>
                    <p>Set your favourite destination as we’ll find you the trips</p>
                  </div>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <a href="credit-payment.html" className="my-account-item">
                  <div className="img-box">
                    <img src="images/credit-card-ic.svg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3>Credit & Payment</h3>
                    <p>Review your saved credit cards and The Luxury Trips balance</p>
                  </div>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <a href="subscription.html" className="my-account-item">
                  <div className="img-box">
                    <img src="images/mail-blue-ic.svg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3>Subscriptions</h3>
                    <p>Control what you want to be contacted about and when</p>
                  </div>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <a href="subscription.html" className="my-account-item">
                  <div className="img-box">
                    <img src="images/mycaccoint_gift.svg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3>My Gift Cards</h3>
                    <p>Set your favourite destination as we’ll find you the trips</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default MyAccount;
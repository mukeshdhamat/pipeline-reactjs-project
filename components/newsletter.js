const Newsletter = () => {
  return (
    <div className="top_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 first1_block">
            <img src="images/newsletter.svg" alt="newsletter" />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 news_block">
            <h6>Newsletter</h6>
            <p>Sign Up for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 subscribe_block">
            <form>
              <input type="text" placeholder="Email" />
              <button>Subscribe
                <img src="images/subicon.svg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
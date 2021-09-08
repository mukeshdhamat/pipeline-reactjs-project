const SearchBlock = () => {
  return (
    <div className="search_block1">
      <div className="container">
        <form className="search_form">
          <div className="searchcity_block d-flex">
            <img src="images/search-ic.svg" alt="Search" />
            <div className="ui-widget w-100">
              <input type="text" placeholder="Search for city, region or country" id="tags" />
            </div>
          </div>
          <div className="searchdate_block">
            <img src="images/dateicon.svg" alt="dateicon" />
            <input type="text" placeholder="Select date" id="datepicker" />
          </div>
          <div className="searchguest_block d-flex">
            <img src="images/user-ic.svg" alt="User" />
            <input type="text" placeholder="Guests" />
            <div className="gurstdetail_block">
              <div className="searchguestinner_block">
                <div className="si_block1">Room 1</div>
                <div className="si_block2">
                  <label>Adults</label>
                  <div className="plusminus_block">
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <input type="text" value="1" readOnly />
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <div className="si_block2">
                  <label>Children <span>(0 - 17 years)</span></label>
                  <div className="plusminus_block">
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <input type="text" value="2" readOnly />
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <div className="si_block3">
                  <label>Children ages</label>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="reset_block">Reset</div>
              </div>
              <div className="lastg_block">
                <div className="lastone_block">
                  <div className="roundicon_block"><i className="fa fa-plus" aria-hidden="true"></i></div>
                  Add another room
                </div>
                <div className="lastsec_block">
                  <span>Wed, 12 May</span><i className="fa fa-long-arrow-right"></i><span>Fri, 14 May (3 Nights)</span>
                </div>
                {/* <div className="lastthree_block">
                        Choose dates later
                    </div> */}
              </div>
            </div>
          </div>
          <div className="searchbtn_block">
            <button className="button1">Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBlock;
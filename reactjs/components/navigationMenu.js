import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NavigationMenu = ({ ...props }) => {
  const { linkArrayDetails } = props;
  const [linkArray, setLinkArray] = useState({});

  useEffect(() => {
    setLinkArray(linkArrayDetails);
  }, [linkArrayDetails])

  return (
    <div className="menu_header">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li><Link href="/hotels-and-resorts"><a href="./index.html" className={ linkArray["hotels-and-resorts"] ? "nav-item nav-link active" : "nav-item nav-link"}>Hotels & Resorts </a></Link></li>
              <li><Link href="/villas"><a href="./index.html" className={ linkArray["villas"] ? "nav-item nav-link active" : "nav-item nav-link"}>Villas</a></Link></li>
              <li><Link href="/yacht-and-cruises"><a href="#" className={ linkArray["yacht-and-cruises"] ? "nav-item nav-link active" : "nav-item nav-link"}>Yacht & Cruises </a></Link></li>
              <li><Link href="/gift-card"><a className={ linkArray["gift-card"] ? "nav-item nav-link active" : "nav-item nav-link"}> Gift Cards </a></Link></li>
              <li className="submenu"><a href="#" className={ linkArray["travel-blog"] ? "nav-item nav-link active" : "nav-item nav-link"}>Explore</a>
                <ul className="submenu">
                  <li><Link href="/travel-blog"><a href="./blog.html">Travel Blog</a></Link></li>
                  <li><Link href="/travel-experience"><a href="./travelinsurance.html">Travel Experience</a></Link></li>
                  <li><Link href="/faq"><a href="./faqs.html">FAQ</a></Link></li>
                </ul>
              </li>
              <li><Link href="/about-us"><a className={ linkArray["about-us"] ? "nav-item nav-link active" : "nav-item nav-link"}>About Us </a></Link></li>
              <li><Link href="/contact-us"><a className={ linkArray["contact-us"] ? "nav-item nav-link active" : "nav-item nav-link"}>Contact Us</a></Link></li>
              <li className="submenu"><a href="#" className={ linkArray["b2b-login"] ? "nav-item nav-link active" : "nav-item nav-link"}>B2B Login</a>
                <ul className="submenu">
                  <li><Link href="/travel-blog"><a href="./blog.html">Travel Blog</a></Link></li>
                  <li><Link href="/travel-experience"><a href="./travelinsurance.html">Travel Experience</a></Link></li>
                  <li><Link href="/faq"><a href="./faqs.html">FAQ</a></Link></li>
                </ul>
              </li>
              <li className="mob_menu"><a href="./exp.html" className="nav-item nav-link">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationMenu;

import React, { useEffect, useRef } from 'react';
import Header from './header';
import Footer from './footer';
import LoadingBar from 'react-top-loading-bar';

const Layout = ({ ...props }) => {
  const { children, isLoading } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (isLoading === 'loading-start') {
      ref.current.continuousStart();
    } else if (isLoading === 'loading-end') {
      ref.current.complete();
    }
  }, [isLoading]);

  return (
    <div className="wrapper">
      <LoadingBar color='#31a1d0' ref={ref} />
      <div className={isLoading}></div>
      <Header title={"The Luxury Trips"} description={"The Luxury Trips is a trip booking Applications"} {...props} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
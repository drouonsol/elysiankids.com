
  import React from 'react';
import { Helmet } from 'react-helmet';
  import Footer from '../components/Footer';
  import Navbar from '../components/Navbar';

const PageNotFound = () => {
  return (
    <div style={{overflow:"hidden"}}>
    <Navbar />
      <div style={{width:"100"}}>
    <Helmet><title>404</title>      <link rel="icon" href="https://elysiankids-com.vercel.app/static/media/elysian.7d77471c57d669515068.png" type="image/icon type" /></Helmet>
    <div style={{minHeight:"50vh", textAlign:"center",verticalAlign:"middle" }}>
      <section style={{}}/>
      <div style={{verticalAlign:"middle", padding :"21vh 0",paddingTop:"21vh"}}>
      <h1  style={{verticalAlign:"middle" , fontFamily:"PermanentMarker",fontSize:"145px",color:"black"}}>404</h1>
      <h1 style={{textTransform:"uppercase",color:"black"}}>Yeah, This Page doesn't exsist</h1>
      </div>
    </div>
    <Footer />
    </div>
    </div>
  );
};
  
export default PageNotFound;
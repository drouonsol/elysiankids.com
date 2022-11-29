import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { NavbarSocialLinks } from "../styles/Navbar.style";
import Navbar from '../components/Navbar';
import "../index.scss";

const Home = () => {

  var totalBGs = 0;
  var rnd = Math.floor(Math.random() * totalBGs) + 0; // 1 - 15
  // 70% of the original volume

  //function MyButton(){

   // const [playSound] = useSound(mySound, { volume: 0.7 }) // 70% of the original volume
   // const handleClick = () => {
    //  playSound()
   // }
   // };

  function select() {
    (".l1") ({ backgroundImage: "url(https://static.infamouswolves.com/randomwolf/" + rnd + ".png)" });
  };

return (

  <div className='backlndpage' style={{}}>
    <Navbar />
	<div style={{ display: "flex",height:"70vh" ,justifyContent:"center",verticalAlign:"middle",textAlign:"center",alignItems:"center",verticalAlign:"middle" }}>
  <Helmet>
      <title>Home</title>
      
      </Helmet>

    <td>
    <div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle"}}>



<section style={{color:"white"}}>


 
<div style={{verticalAlign:"middle", padding :"21vh 0",paddingTop:"30vh"}}>
      <h1 className="indextext" style={{fontFamily:"Pieces NFI",}}>Elysian Kids</h1>
      <a href="https://twitter.com/infwlsnft" target="_blank" class="button button-arrow bg-blue">
      Twitter &nbsp;
      <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
        <g class="arrow-head">
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"/>
        </g>
        <g class="arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>            
    </a>
    <a href="https://twitter.com/infwlsnft" target="_blank" class="button button-arrow bg-magiceden">
      
      <img width="110px" src="https://static.infamouswolves.com/me.fadcf285a31df15afc4e.png" /> &nbsp;
      <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"  class="arrow-icon">
        <g class="arrow-head">
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"/>
        </g>
        <g class="arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>            
    </a>
      </div>

</section>
</div>

  </td>

</div>



<section style={{height:"100vh",margin:"0% 5%"}}>
<div className="grid-flex" style={{margin:"10vh 0"}}>
    <div className="col col-text" style={{borderRadius:"15px"}}>
    ;<blockquote className="twitter-tweet">
  <p lang="en" dir="ltr">
    Sunsets don't get much better than this one over{" "}
    <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">
      @GrandTetonNPS
    </a>
    .{" "}
    <a href="https://twitter.com/hashtag/nature?src=hash&ref_src=twsrc%5Etfw">
      #nature
    </a>{" "}
    <a href="https://twitter.com/hashtag/sunset?src=hash&ref_src=twsrc%5Etfw">
      #sunset
    </a>{" "}
    <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a>
  </p>
  — US Department of the Interior (@Interior){" "}
  <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">
    May 5, 2014
  </a>
</blockquote>

    </div>
    <div className="col col-text col-left">
      <div className="Aligner-item">
        <h1 style={{fontSize:"350%"}}>THE START OF A NEW ERA
   
        </h1>
      </div>
    </div>

  </div> 

  </section>





      <div className='footermobileindex'>
    
      </div>
      </div>
    


);
};

export default Home;

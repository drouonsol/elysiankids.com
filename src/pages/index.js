import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { NavbarSocialLinks } from "../styles/Navbar.style";
import Navbar from '../components/Navbar';
import "../index.scss";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Axios from 'axios';
import { useState } from 'react';

const Home = () => {

  const lamplortspersolana = 1000000000;
  var totalBGs = 0;
  var rnd = Math.floor(Math.random() * totalBGs) + 0; // 1 - 15
  // 70% of the original volume

  //function MyButton(){

   // const [playSound] = useSound(mySound, { volume: 0.7 }) // 70% of the original volume
   // const handleClick = () => {
    //  playSound()
   // }
   // };



  let nftnumber = Math.floor(Math.random()* 3333);
  let nftnumber2 = Math.floor(Math.random()* 3333);
  let nftnumber3 = Math.floor(Math.random()* 3333);
  let nftnumber4 = Math.floor(Math.random()* 3333);

  const nft0 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber + ".png";
  const nft1 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber2 + ".png";
  const nft2 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber3 + ".png";
  const nft3 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber4 + ".png";

  function select() {
    (".l1") ({ backgroundImage: "url(https://static.infamouswolves.com/randomwolf/" + rnd + ".png)" });
  };


  const [floorPrice,setfloorPrice,] = useState("")
  const [listings,setlistings,] = useState("")
  const [collectionvolume,setcollectionVolume] = useState("")



Axios.get("https://api-mainnet.magiceden.dev/v2/collections/ekids/stats/").then((res) => {
  setfloorPrice(res.data.floorPrice/lamplortspersolana)
  setlistings(res.data.listedCount)
  setcollectionVolume(Math.round(res.data.volumeAll/lamplortspersolana))
});

 const marketcap = 3333*floorPrice; 

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

    <a href="https://magiceden.io/marketplace/ekids" target="_blank" class="button button-arrow bg-magiceden">
    Buy a kid &nbsp;
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



<section style={{height:"auto",margin:"5%",verticalAlign:"center"}}>
<div className="grid-flex" style={{margin:"auto",verticalAlign:"center",top:"50",bottom:"50",background:"black",borderRadius:"20px"}}>
    <div className="col col-text" style={{borderRadius:"15px",verticalAlign:"center"}}>
    <TwitterTweetEmbed    options={{width: 1000}}
  tweetId={'1598006444636672002'}
/>


    </div>
    <div className="col col-text col-left" style={{verticalAlign:"center",top:"50",bottom:"50"}}>
      <div className="Aligner-item">
        <h1 style={{fontSize:"350%",textTransform:"uppercase",color:"white"}}>So we are in Shambles
        <h1 style={{fontSize:"120%",color:"white"}}>BUT...</h1>
   
        </h1>
      </div>
    </div>

  </div> 

  </section>







  <section style={{paddingTop:"50px",backgroundColor:"#ececec"}}>
  <h1 className="wwab" style={{fontFamily:"Oswald",}}>What we are building</h1>
  <h1 className="  wwabsmall" style={{fontFamily:"Oswald",}}>And what we are planning on building</h1>

  <div  style={{height: "fit-content",  }}> <div class="container">
    
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src={[nft1]} alt={nftnumber2} />
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>DOCS</h4>
                        <br/>
                        <a className="utilitybutton" target="_blank" href="https://docs.elysiankids.com/" style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Read our whitepaper</a>
                     <br/>
                     <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber2]}</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card"  >
                <div class="content" >
                    <div class="imgBx">
                        <img src={[nft2]} alt={[nftnumber3]}/>
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>STAKE</h4>
                        <br/>
                        <a className="utilitybuttonrejected" target="_blank"  style={{textTransform:"uppercase", fontFamily:"Oswald"}}>STAKE YOUR KID</a>
                        <br />
                        <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber3]}</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                      <a>
                        <img src={[nft3]} alt={nftnumber4} />
                      </a>
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>RAFFLES</h4>
                        <br/>
                        <a className="utilitybuttonrejected" target="_blank" style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Join a raffle</a>
                        <br/>
                     <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber4]}</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src={[nft0]} alt={nftnumber} />
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%",  fontFamily:"Oswald"}}>ELEGIBILITY</h4>
                        <br/ >
                        <a className="utilitybuttonrejected" target="_blank"  style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Check ELEGIBILITY</a>
                        <br/>
                     <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber]}</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            </div>
        </div>


  <img className="imgtransition" style={{display:"flex"}} width="100%"  src="https://media.discordapp.net/attachments/890670720705777785/1048337243028340757/Untitled_Artwork.png"/>
  </section>
  <section>
  <h1 className="wwab" style={{fontFamily:"Oswald",}}>STATS</h1>
    <div  style={{height: "fit-content",  }}> <div class="container">
    
            <div class="cardstats">
                <div class="content">
                   
                    <div class="contentBx">
                    <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald",}}>volume</h4>
                        <br/>
                        <h1 style={{fontSize:"300%", textTransform:"uppercase", fontFamily:"Pieces NFI"}}>{[collectionvolume]}</h1>
          
              
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="cardstats"  >
                <div class="content" >
                    
                    <div class="contentBx">
                    <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald",}}>Floor Price</h4>
                        <br/>
                        <h1 style={{fontSize:"300%", textTransform:"uppercase", fontFamily:"Pieces NFI",}}>{[floorPrice]}</h1>
                 

                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="cardstats">
                <div class="content">
                
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald",}}>Market CAP</h4>
                        <br/>
                        <h1 style={{fontSize:"300%", textTransform:"uppercase", fontFamily:"Pieces NFI"}}>{[marketcap]}</h1>
                 
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            
          </div>
          <a href="https://magiceden.io/marketplace/ekids" target="_blank" class="button button-arrow bg-magiceden">
    TRADE ON MAGICEDEN &nbsp;
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
  <section style={{borderRadius:"50px",height:"100vh"}}>
  </section>

      <div className='footermobileindex'>
    
      </div>
      </div>
    


);
};

export default Home;

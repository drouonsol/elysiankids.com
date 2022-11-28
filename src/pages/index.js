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

  <div className='backlndpage' style={{overflow:"hidden"}}>

	<div style={{ display: "flex",height:"70vh" ,justifyContent:"center",verticalAlign:"middle",textAlign:"center",alignItems:"center",verticalAlign:"middle" }}>
  <Helmet>
      <title>Home</title>
      
      </Helmet>

    <td>
    <div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle",background:"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)" ,height:"100vh"}}>


<h1 className='entertxt' style={{color:"white",justifyContent:"center",textTransform:"uppercase",textAlign:"center",top:"50",bottom:"50",display:"flex",alignItems:"center", fontSize:"500%",verticalAlign:"middle", fontFamily:"Oswald",fontWeight:"300"}}>
Elysian 
<br/>
KIDS
</h1>
<div>
<a style={{opacity:"0.5", fontFamily:"Oswald",textTransform:"uppercase",color:"white"}}>*Click anywhere </a>
</div>

 

</section>
</div>

  </td>

</div>





      <div className='footermobileindex'>
    
      </div>
      </div>
    


);
};

export default Home;

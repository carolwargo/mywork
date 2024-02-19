import React from 'react';
import NavbarBlack from '../../components/Navbar/NavbarBlack';    
//import LogoIcon from '../../assets/images/LogoIcon.png';    
const About = () => {
    return (
        <div className='bg-black text-white'>
            <NavbarBlack/>
            <header>
            <h1>Meet the TWO FACES of Technology...</h1>
                <div><h3>Our mission is to help businesses succeed by providing the most impactful, creative and scalable content marketing services and technology solutions to organizations across the globe.</h3></div>
            </header>
          
            <div className='row'>
                <div className='col'>
                <div className='container container-sm container-header-values'>
<div >
   
    <h3>WHY US?</h3>
    <p>
            "I enjoy working with the latest tools and frameworks to bring new
            ideas to life. From crafting interactive user interfaces to
            designing efficient and secure server-side solutions, I am dedicated
            to delivering a seamless user experience while optimizing
            performance. It is my pleasure to turn complex problems into elegant
            solutions."
          </p>
    <h1  style={{fontFamily:'Great Vibes', color: "#FA31C2",fontSize:"4rem"}}>WHO WE ARE</h1>
      <br></br>
      <p>"YOUR PARTNER IN IT SUCCESS AND INNOVATION"</p>
      <h1 style={{
                  textShadow: "2px 1px 4px pink",
                  color: "#FA31C2",
                  fontSize: "3.2rem",
                  fontFamily:'Raleway'
                }}>Meet the 2<span style={{color:'#00FFFF', fontSize: "2.5rem",  textShadow: "2px 1px 4px #00FFFF" }}>FACES </span>of Technology!</h1>
        <strong><span>  </span></strong>
      
      <p>
        "<span style={{color: '#FA31C2', fontSize:'1.4rem'}}>2</span><span style={{color:'#00FFFF'}}>FACE</span> is comprimised Passionate Team Dedicated To Empowering Businesses Through harnessing
        the power of cutting-edge tools and frameworks to breathe life into
        innovative concepts. Our expertise spans the spectrum, from creating
        immersive user interfaces to engineering robust, secure backend
        solutions. We are driven by a commitment to provide users with seamless
        experiences while maximizing system performance. Our forte lies in
        transforming intricate challenges into refined, elegant solutions."
      </p>
      <br></br>
      <p>"WHERE DEVELOPMENT MEETS DESIGN"</p>
      <h1  style={{fontFamily:'Great Vibes',color: "#FA31C2"}}>
        <strong>What we do</strong>
      </h1>
      <p>
        Strenthen your online presence with our development expertise. Whether
        it's crafting intuitive front-end interfaces or building robust back-end
        systems, we're equipped to handle it all. From full-stack development to
        specialized app creation, our team is proficient in turning your ideas
        into functional, user-friendly applications.
      </p>
</div>
</div>
    <div className='col'>
    <div className='container container-sm'>
    <h3>WHY US?</h3>
    <h3>VALUES</h3>
    </div>
    </div>
    </div>
    <div className='container container-sm bg-info'>
    <p>Our values are the foundation of our company. They guide our actions and behavior. They influence the way we work with each other – and the way we serve our clients and engage with our communities.</p>  
<ul>
    <li>Tone</li>
    <li>Values</li>
    <li>Visuals</li>
    <li>team</li>
    <li>why trust us</li>
    <li>contact</li>
</ul>
</div>
             
<div className='row bg-info-subtle' style={{backgroundColor:'#00FFFF'}}>
                <div className='col'>
                <div className='card'>
    <div className='container container-sm container-header-values'>

    </div>

    <div className='container container-sm container-content-values'>

</div>
</div>
</div>
                </div>
            </div>
        </div>
    );
};

export default About;
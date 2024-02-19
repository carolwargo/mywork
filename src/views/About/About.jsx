import React from 'react';
import NavbarBlack from '../../components/Navbar/NavbarBlack';
import Business from '../../assets/images/Business.png';

const About = () => {
    return (
        <div >
            <NavbarBlack />
            <header className="container py-5">
                <div className="text-center">
                    <h1 className="mb-4">Meet the TWO FACES of Technology...</h1>
                    <p className="lead">Welcome to our about page! Here, we'll introduce you to our team and tell you a bit about what we do.</p>
                </div>
            </header>

            <div className='container p4' id='contact'>
              <h3 className='text-center'>WHERE I WORK</h3>
              <p className='text-center'> <em>I'd love your feedback!</em></p>
              <div className='row p-2'>
                <div className='col-md-4'>
                <img src={Business} alt="Business" className="w3-image w3-round" style={{width:"100%"}} ></img>
                </div>
                <div className='col-md-8'>
                <div className="w3-large w3-margin-bottom">
                <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Huntingown, MD<br/>
        <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +443-771-1726<br/>
        <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com<br/>
                </div>
                <p>Feel free to reach out to us anytime at <a href="mailto:info@example.com">info@example.com</a>, or connect with us on social media:</p>

                <form action="/action_page.php" target="_blank">
        <div className="w3-row-padding" style= {{margin:"0 -16px 8px -16px"}}>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"></input>
          </div>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email"></input>
          </div>
        </div>
        <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message"></input>
        <button className="w3-button w3-black w3-right w3-section" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
                </div>
              </div>
            </div>

            <main className="container">
                <section className="py-4">
                    <h2 className="mb-3">Our Story</h2>
                    <p>We are TWO FACES, a team passionate about technology and innovation. Our journey began...</p>
                    {/* Include more detailed information about your company or team */}
                </section>

                <section className="py-4">
                    <h2 className="mb-3">Our Team</h2>
                    {/* Add information about team members */}
                </section>

                <section className="py-4">
                    <h2 className="mb-3">Our Mission</h2>
                    <p>At TWO FACES, our mission is to...</p>
                    {/* Add your mission statement or objectives */}
                </section>
            </main>
        </div>
    );
};

export default About;

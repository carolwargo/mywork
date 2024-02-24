import React from   'react';

import "bootstrap/dist/css/bootstrap.min.css";

const SocialTestimonial = () => {
    return (

        <div className="container mt-5 py-5" >
        <div className="row d-flex p-3 justify-content-center align-items-center">
        <div className="col-sm-12 col-md-5 col-lg-5 justify-content-center align-items-center">
               <div className='container'>
                <p>CASE STUDY:</p>
                <h1 className='pb-2'>
                     <span
                      style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#black",
                    }}
                    >
                        CREATE AN ONLINE PRESENCE: </span> <br />
                        <span style={{fontWeight:'lighter', fontSize:'2rem'}}> DEVELOP A TARGETED MARKETING STRATEGY FOR ATHLETIC TRAINING SERVICES.
                    </span>
                  </h1>
                  <p className='w3-tag w3-black px-3 pb-4 pt-3' style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem',boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
  <span style={{ color: '#F63DB0', fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>2</span>
  <span style={{ color: '#00FFFF', fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>FACE </span> 
  collaborates with local and nationally renowned athletic programs to amplify their visibility and reach. 
  Through the creation of compelling content and meticulous data analysis, we elevate both the program's exposure 
  and the personal brand of individual athletes.
</p>
</div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7 justify-content-center align-items-center">
                    <h1
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#black",
                    }}
                    >
                       IMAGE GOES HERE
                    </h1>
                </div>
                </div>



 {/* start about client*/}
                <div className="row d-flex p-3  justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                <h1>IMAGE GOES HERE</h1>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                <p>THE CLIENT:</p>
                <h1
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#black",
                    }}
                    >
                     TELL ABOUT THE CLIENT
                    </h1>
                    </div>
                </div>
 {/* end about client*/}

 {/*start challenge*/}
                <div className="row d-flex p-3  justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                    <p>CHALLENGES:</p>
                <h1
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#black",
                    }}
                    >
                     CHALLENGES FACED
                    </h1>
                </div>
                 {/*end challenge*/}
                  {/*start marketing efforts*/}
                <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                <p>MARKETING EFFORTS:</p>
                <h1
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#black",
                    }}
                    >
                     MARKETING EFFORTS EXPLAINED
                    </h1>
                    </div>
                </div>
                {/*end marketing effort*/}


                 {/*start results*/}
                 <div className="row d-flex p-3  justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                    <p>RESULTS:</p>
                    <h1
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#black",
                    }}
                    >
                    RESULTS GRAPH IMAGE OR TABLE GOES HERE 
                    </h1>
                </div>
                 {/*end results*/}
                  {/*start testimonial*/}
                <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                <p>TESTIMONIAL:</p>
                <h1
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#black",
                    }}
                    >
                    {'"'}TESTIMONIAL GOES HERE {'"'}
                    </h1>
                    </div>
                </div>
                {/*end testimonial*/}
              
                </div>
    );
}

export default SocialTestimonial;
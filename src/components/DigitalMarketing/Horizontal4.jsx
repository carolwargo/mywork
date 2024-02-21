import React from "react";

const Horizontal4 = () => {

    return (

        <main>
            <h1>HORIZONTAL FOUR</h1>
            
      {/*start what we offer */}
      <div className="w3-row w3-container">
        <div className="w3-center w3-padding-64">
          <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
            WHAT WE DO BEST...
          </span>{" "}
          <br />
          <p></p>
        </div>
      
        {/*start what we offer SEO  */}
        <div className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
          <h3>SEARCH ENGINE MARKETING</h3>
          <p style={{ fontSize: "14px", fontFamily: "serif" }}>
            <i>
              "A search engine is a software system designed to retrieve and
              display information stored on the internet in response to user
              queries."
            </i>
          </p>
        </div>
      
        {/*end what we offer SEO*/}
        {/*start what we offer social media  */}
        <div className="w3-col l3 m6 w3-grey w3-container w3-padding-16">
          <h3>SOCIAL MEDIA MARKETING</h3>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
      
        {/*end what we offer social media*/}
        {/*start what we offer content marketing */}
        <div className="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
          <h3>CONTENT MARKETING</h3>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
       
        {/*end what we offer content marketing*/}
        {/*start what we offer social media marketing*/}
        <div className="w3-col l3 m6 w3-black w3-container w3-padding-16">
          <h3>EMAIL MARKETING</h3>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
      </div>

      {/**end WHAT WE DO*/}
            </main>

    );
}

export default Horizontal4;
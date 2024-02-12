import React from "react";
import Business from "../../assets/images/Business.png";
import BlogHeader from "../../components/Blog/BlogHeader";
import YogaSet from "../../assets/images/YogaStory/YogaSet.png";
import moment from "moment";


// Create blog post objects with Moment.js timestamp
const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    timestamp: moment().toISOString(), // Current date and time
    content:
    "Lorem unde omnis iste natus error sit Sed ut perspiciatis unde omnis Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis...",
  imageUrl: YogaSet,
    comments: 5,
  },
  {
    id: 2,
    title: "Blog Post 2",
    timestamp: moment().toISOString(), // Current date and time
    content:
    "Lorem unde omnis iste natus error sit Sed ut perspiciatis unde omnis Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis...",
   imageUrl: YogaSet,
    comments: 10,
  },
  // Add more blog post objects as needed
];

const Blog = () => {
  return (
    <div>
      <BlogHeader />
      <main className="w3-light-grey">
        <div className="w3-content" style={{ maxWidth: "1400px" }}>
            {/* start Header */}
          <header className="w3-container w3-center w3-padding-32 pb-1 mt-2 border-bottom">
            <h1
              style={{color:'#00FFFF', textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"}}><b>BITS </b><span style={{color:'white', textShadow: "2px 2px 4px #000000"}}>& </span> <span style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
                  color: "#FDC5E8",}}>PIXELS</span>
            </h1>
            <p className="">
              Welcome to the blog of{" "}
              <span className="w3-tag" style={{ color: "#FDC5E8" }}>
                2FACE<span style={{ fontFamily: "tangerine" }}>Inc.</span>
              </span>
            </p>
          </header>  {/* end Header */}
            {/*row start for the whole page with exception of header & footer */}
          <div className="w3-row p-2">
            {" "}

 {/*card start for bio, popular posts & tags*/}
 <div className="w3-col p-4 l4">
              {" "}
              {/*card start for bio*/}
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card-image-start for bio*/}
                <img
                  src={Business}
                  alt="Business"
                  style={{ width: "100%" }}
                ></img>{" "}
                {/*card-image-start for bio*/}
                <div className="w3-container w3-white justify-content-center">
                  {" "}
                  {/*card-container-start for bio*/}
                  <br></br>
                  <h5 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                    <b>Carol Wargo</b>
                  </h5>
                  <p className="mb-3">
                    Just me, myself and I, exploring the universe of uknownment.
                    I have a heart of love and a interest of lorem ipsum and
                    mauris neque quam blog. I want to share my world with you.
                  </p>
                  <br></br>
                </div>{" "}
                {/*card-container-end for bio*/}
              </div>
              {/*card end for bio*/}
              <hr />


              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all popular posts elements*/}
                <div className="w3-container w3-padding">
                  {" "}
                  {/*container start header popular posts */}
                  <h4>Popular Posts</h4>
                </div>
                {/*container end header popular posts */}
                <ul className="w3-ul w3-hoverable w3-white p-2">
                  {" "}
                  {/*list start popular posts */}
                  <li className="w3-padding-16">
                    {" "}
                    {/*list-item-1 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      style={{ width: "100%" }}
                    ></img>{" "}
                    <span className="w3-large">Lorem</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>{" "}
                  {/*list-item-1 end popular posts */}
                  <li className="w3-padding-16">
                    {" "}
                    {/*list-item-2 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      style={{ width: "100%" }}
                    ></img>{" "}
                    <span className="w3-large">Ipsum</span>
                    <br />
                    <span>Praes tinci sed</span>
                  </li>{" "}
                  {/*list-item-2 end popular posts */}
                  <li className="w3-padding-16">
                    {" "}
                    {/*list-item-3 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      style={{ width: "100%" }}
                    ></img>{" "}
                    <span className="w3-large">Dorum</span>
                    <br />
                    <span>Ultricies congue</span>
                  </li>{" "}
                  {/*list-item-3 end popular posts */}
                  <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      style={{ width: "100%" }}
                    ></img>{" "}
                    <span className="w3-large">Mingsum</span>
                    <br />
                    <span>Lorem ipsum dipsum</span>
                  </li>
                  {/*list-item-4 end popular posts */}
                </ul>{" "}
                {/*list end popular posts */}
              </div>{" "}
              {/*card end for all popular posts elements*/}
              <hr />


              
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all tags elements*/}
                <div className="w3-container w3-padding">
                  {" "}
                  {/*container start for tags Header*/}
                  <h4>Tags</h4>
                </div>{" "}
                {/*container end for tags Header*/}
                <div className="w3-container w3-white">
                  {" "}
                  {/*container start for tags*/}
                  <p>
                    <span className="w3-tag w3-black w3-margin-bottom">
                      Travel
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      New York
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      London
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      IKEA
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      NORWAY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      DIY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Ideas
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Baby
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Family
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      News
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Clothing
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Shopping
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Sports
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Games
                    </span>
                  </p>
                </div>{" "}
                {/*container end for tags only*/}
              </div>{" "}
              {/*card end for all tags elements*/}
            </div>{" "}
            {/*col end for bio, popular posts & tags*/}


             {/*col start for all posts iteration */}
           <div className="w3-col p-4 l8 s12">
              {" "}
              {/*col start for all posts */}
              {blogPosts.map((post) => (
                <div key={post.id} className="w3-card-4 w3-margin w3-white m-4">
                  <img
                    src={post.imageUrl}
                    alt="blog-post"
                    style={{ width: "100%" }}
                  />

                

                  <div className="w3-container m-2">  
              
                    <br></br>
                    <h3>
                      <b>
                        <i>{post.title}</i>
                      </b>
                    </h3>
                    <p>
                      Title description,{" "}
                      <span className="w3-opacity">
                        Posted on:{" "}
                        {moment(post.timestamp).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </span>
                    </p>
                  </div>

                  {/* end entries card title & title description */}

                  {/* start entries card content container*/}
                  <div className="w3-container m-2">
                    <p>{post.content}</p>
                    {/* start entries card content container ROW*/}
                    <div className="w3-row">
                      {/* start entries card content container COL BUT*/}
                      <div className="w3-col p-4 m12 s12">
                        <p>
                          <button className="w3-button w3-padding-large w3-white w3-border">
                            <b>READ MORE »</b>
                          </button>
                        </p>
                      </div>
                      {/* start entries card content container COL COMMENTS*/}
                    </div>
                    {/* end entries card content container ROW*/}
                  </div>
                  {/* end entries card content container*/}
                </div>
              ))}
            </div>
              {/*col end for posts iteration */}
           
            
          
          </div>{" "}
          {/*row end for the whole page with exception of header & footer */}
        </div>
        <footer className="w3-container w3-dark-grey w3-padding-32 text-center">
          <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
            Previous
          </button>
          <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
            Next »
          </button>
          <p style={{ color: "#FDC5E8" }}>
            2FACE<span style={{ fontFamily: "tangerine" }}>Inc.</span>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Blog;







/*<div className"w3-card w3-margin">
    <div className"w3-container w3-padding">
      <h4>Popular Posts</h4>
    </div>
    <ul className"w3-ul w3-hoverable w3-white">
      <li className"w3-padding-16">
        <img src="/w3images/workshop.jpg" a>lt="Image" className"w3-left w3-margin-right" style="width:50px">
        <span className"w3-large">Lorem</span><br>
        <span>Sed mattis nunc</span>
      </li>
      
      
      <li className"w3-padding-16">
        <img src="/w3images/gondol.jpg" alt="Image" className"w3-left w3-margin-right" style="width:50px">
        <span className"w3-large">Ipsum</span><br>
        <span>Praes tinci sed</span>
      </li> 
      
      
      
      <li className"w3-padding-16">
        <img src="/w3images/skies.jpg" alt="Image" className"w3-left w3-margin-right" style="width:50px">
        <span className"w3-large">Dorum</span><br>
        <span>Ultricies congue</span>
      </li>   
      
      
      
      
      
      <li className"w3-padding-16 w3-hide-medium w3-hide-small">
        <img src="/w3images/rock.jpg" alt="Image" className"w3-left w3-margin-right" style="width:50px">
        <span className"w3-large">Mingsum</span><br>
        <span>Lorem ipsum dipsum</span>
      </li>  
    </ul>
  </div>
  <hr> 

*/



import React from "react";
import Business from "../../assets/images/Business.png";
import BlogHeader from "../../components/Blog/BlogHeader";
import YogaSet from "../../assets/images/YogaStory/YogaSet.png";
import moment from "moment";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import {
  TwitterShareButton,
  FacebookShareButton,
  PinterestShareButton,
} from "react-share";

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

const PostsPageTest = () => {
  return (
    <div>
      <BlogHeader />
      <main className="w3-light-grey">
        <div className="w3-content" style={{ maxWidth: "1400px" }}>
            {/* start Header
          <header className="w3-container w3-center w3-padding-32 pb-1 mt-2 border-bottom">
            <h1>
              <b>BITS & PIXELS</b>
            </h1>
            <p className="">
              Welcome to the blog of{" "}
              <span className="w3-tag" style={{ color: "#FDC5E8" }}>
                2FACE<span style={{ fontFamily: "tangerine" }}>Inc.</span>
              </span>
            </p>
          </header>  end Header */}



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
              </div>{" "}
              {/*card end for bio*/}
              <hr />
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all popular posts elements*/}
                <div className="w3-container w3-padding">
                  {" "}
                  {/*container start header popular posts */}
                  <h4>Popular Posts</h4>
                </div>{" "}
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
                        <p>
                          <button className="w3-button w3-padding-small w3-white w3-border">
                            <b>READ MORE »</b>
                          </button>
                        </p>
                    </div>
                    <div className="row">
                        <div className="w3-col l8 w3-padding">
                              
                              {" "}
                              {/*container start for tags Header*/}
                              <h5>TAGS</h5>
                              {" "}
                              <p>
                                <span className="w3-tag w3-black w3-margin-bottom">
                                  IKEA
                                </span>
                                <span className="w3-tag w3-black w3-margin-bottom">
                                  NORWAY
                                </span>
                                <span className="w3-tag w3-black w3-margin-bottom">
                                  DIY
                                </span>
                                <span className="w3-tag w3-black w3-margin-bottom">
                                  IDEAS
                                </span>
                                <span className="w3-tag w3-black w3-margin-bottom">
                                  NEWS
                                </span>
                              
                              
                              </p>
                       
                            {/*container end for tags only*/}
                                </div>{" "}
                           
                            <div className="w3-col l4 w3-padding">
                              {" "}
                              {/*container start for tags Header*/}
                              <h5>SHARE THIS POST</h5>
             {/* start share-button container entries*/}
            <div className="text-center">
                                  {/* start Twitter Share Button */}
                                  <TwitterShareButton
                                    url={window.location.href}
                                    title={post.title}
                                    style={{ color: "#1877F2"}}
                                  > 
                                    <FaTwitter /> 
                                  </TwitterShareButton> {/* end Twitter Share Button */}
                                 {/* start Facebook Share Button */}
                                  <FacebookShareButton
                                    url={window.location.href}
                                    quote={post.title}
                                    style={{ color: "#1877F2" }}
                                  >
                                    <FaFacebook />
                                  </FacebookShareButton>  {/*end Facebook Share Button */}
                                  {/* start Pinterest Share Button */}
                                  <PinterestShareButton
                                    url={window.location.href}
                                    media={post.imageUrl}
                                    description={post.title}
                                    style={{ color: "red" }}
                                  >
                                    <FaPinterest />
                                  </PinterestShareButton> {/* end Pinterest Share Button */}
                  
            </div>{" "}
            </div>


                    </div>




                    <div className="w3-card w3-margin m-4">
                {" "}
               


    
              </div>{" "}
              {/*card end for all tags elements*/}




                  </div>
                  {/* end entries card content container*/}
                </div>
              ))}
            </div>
              {/*col end for posts iteration */}
           
            
          
          </div>{" "}
          {/*row end for the whole page with exception of header & footer */}
        </div>

         {/*
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
        */}


      </main>
    </div>
  );
};

export default PostsPageTest;

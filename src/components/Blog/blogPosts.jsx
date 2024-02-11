import React from "react";
//import Business from "../../assets/images/Business.png";
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    imageUrl: YogaSet,
    comments: 5,
  },
  {
    id: 2,
    title: "Blog Post 2",
    timestamp: moment().toISOString(), // Current date and time
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
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
            <h1>
              <b>BITS & PIXELS</b>
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
            
            

              
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all tags elements*/}
                <div className="w3-container w3-padding">
                  {" "}
                  {/*container start for tags Header*/}
                  <h4>Tags</h4>
                </div>{" "}
                {/*container end for tags Header*/}
         
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
                   {/* start share-button container entries*/}
                    <div
                      className="social-media-share"
                      style={{ fontSize: "14px", fontFamily: "belotta-text" }}
                    >
                      {/* start Twitter Share Button */}
                      <TwitterShareButton
                        url={window.location.href}
                        title={post.title}
                        style={{ color: "#1877F2" }}
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
                    </div> {/*end share-button container entries*/}
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
                      <div className="w3-col p-4 m8 s12">
                        <p>
                          <button className="w3-button w3-padding-large w3-white w3-border">
                            <b>READ MORE »</b>
                          </button>
                        </p>
                      </div>
                      {/* end entries card content container COL BUT*/}
                      <div className="w3-col p-4 m4 w3-hide-small">
                        <p>
                          <span className="w3-padding-large w3-right">
                            <b>Comments</b>{" "}
                            <span className="w3-tag">{post.comments}</span>
                          </span>
                        </p>
                      </div>
                      {/* start entries card content container COL COMMENTS*/}
                    </div>
                    {/* end entries card content container ROW*/}
                  </div>
                  {/* end entries card content container*/}

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

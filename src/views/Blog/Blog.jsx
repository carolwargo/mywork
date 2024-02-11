import React from 'react';
import Business from '../../assets/images/Business.png';
import BlogHeader from '../../components/Blog/BlogHeader';
import YogaSet from '../../assets/images/YogaStory/YogaSet.png';
import moment from 'moment';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { TwitterShareButton, FacebookShareButton, PinterestShareButton } from 'react-share';

// Create blog post objects with Moment.js timestamp
const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    timestamp: moment().toISOString(), // Current date and time
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: YogaSet,
    comments: 5,
  },
  {
    id: 2,
    title: 'Blog Post 2',
    timestamp: moment().toISOString(), // Current date and time
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
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
          <header className="w3-container w3-center w3-padding-32 pb-1 mt-2 border-bottom">
            <h1><b>BITS & PIXELS</b></h1>
            <p className=''>Welcome to the blog of <span className="w3-tag" style={{color: "#FDC5E8"}}>2FACE<span style={{fontFamily:'tangerine'}}>Inc.</span></span></p>
          </header>



          {/*entries row start */}
         
            <div  className="w3-row p-2">
              <div className="w3-col p-4 l8 s12">
                
              {blogPosts.map((post) => (
                <div key={post.id} className="w3-card-4 w3-margin w3-white m-4">
                  <img src={post.imageUrl} alt="blog-post" style={{ width: "100%" }} />
                  
                 
               {/* start entries card title & title description */}
               
               <div className="w3-container m-2">
               <div className="social-media-share" style={{ fontSize: '14px', fontFamily: 'belotta-text' }}>
                    {/* Twitter Share Button */}
                    <TwitterShareButton url={window.location.href} title={post.title} style={{color:'#1877F2'}}>
                      <FaTwitter />
                    </TwitterShareButton>
                    {/* Facebook Share Button */}
                    <FacebookShareButton url={window.location.href} quote={post.title} style={{color:'#1877F2'}}>
                      <FaFacebook />
                    </FacebookShareButton>
                    {/* Pinterest Share Button */}
                    <PinterestShareButton url={window.location.href} media={post.imageUrl} description={post.title} style={{color:'red'}}>
                      <FaPinterest />
                    </PinterestShareButton>
                  </div>
                    <br></br>
                    <h3><b><i>{post.title}</i></b></h3>
                    <p>Title description, <span className="w3-opacity">Posted on: {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span></p>

                  </div>
                  
                {/* end entries card title & title description */}

                 {/* start entries card content container*/}
                 <div className="w3-container m-2">
                    <p>{post.content}</p>
                     {/* start entries card content container ROW*/}
                  <div className="w3-row">
                      {/* start entries card content container COL BUT*/}
                    <div className="w3-col p-4 m8 s12">
                      <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                    </div>
                      {/* end entries card content container COL BUT*/}
                      <div className="w3-col p-4 m4 w3-hide-small">
                    <p><span className="w3-padding-large w3-right"><b>Comments</b> <span className="w3-tag">{post.comments}</span></span></p>
                    </div>
                          {/* start entries card content container COL COMMENTS*/}
                 
                  </div>
                    {/* end entries card content container ROW*/}
                </div>
                 {/* end entries card content container*/}
              </div>
              ))}






              {/*end col entry1 */}
              
            </div>
         
            
             {/*entries col entry1 end */}
         
             
            <div className="w3-col p-4 l4">
              <div className="w3-card w3-margin m-4">
              <img src={Business} 
                alt="Business" 
                style={{ width: "100%" }}></img> 
                <div className="w3-container w3-white justify-content-center">
 <br></br>
                  <h5 className='mt-3' style={{fontFamily:'sans-serif'}}><b>Carol Wargo</b></h5>
                  <p className='mb-3'>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                  <br></br>
                </div>
              </div>
              <hr />
              <div className="w3-card w3-margin m-4">
                <div className="w3-container w3-padding">
                  <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white p-2">
                  <li className="w3-padding-16">
                  <img src={Business} 
                alt="Business" 
                style={{ width: "100%" }}></img>   <span className="w3-large">Lorem</span><br />
                    <span>Sed mattis nunc</span>
                  </li>
                  <li className="w3-padding-16">
                  <img src={Business} 
                alt="Business" 
                style={{ width: "100%" }}></img>  <span className="w3-large">Ipsum</span><br />
                    <span>Praes tinci sed</span>
                  </li>
                  <li className="w3-padding-16">
                  <img src={Business} 
                alt="Business" 
                style={{ width: "100%" }}></img>   <span className="w3-large">Dorum</span><br />
                    <span>Ultricies congue</span>
                  </li>
                  <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                  <img src={Business} 
                alt="Business" 
                style={{ width: "100%" }}></img> <span className="w3-large">Mingsum</span><br />
                    <span>Lorem ipsum dipsum</span>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="w3-card w3-margin m-4">
                <div className="w3-container w3-padding">
                  <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                  <p>
                    <span className="w3-tag w3-black w3-margin-bottom">Travel</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
         
          {/*entries row end */}
        </div>
        <footer className="w3-container w3-dark-grey w3-padding-32 text-center">
          <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">Previous</button>
          <button className="w3-button w3-black w3-padding-large w3-margin-bottom">Next »</button>
          <p style={{color: "#FDC5E8"}}>2FACE<span style={{fontFamily:'tangerine'}}>Inc.</span></p>
        </footer>
      </main>
      </div>
  );
};

export default Blog;

import React, { useState } from "react"; // Don't forget to import useState
import moment from "moment";
import YogaSet from "../../assets/images/YogaStory/YogaSet.png";
import { FaFacebook, FaTwitter, FaPinterest, FaGithub } from "react-icons/fa";
import {
  TwitterShareButton,
  FacebookShareButton,
  PinterestShareButton,
} from "react-share";


const FullPosts = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0); // Initialize currentPostIndex state

  const blogPosts = [
    {
      id: "1",
      title: "Unlocking Business Growth with HubSpot: A Comprehensive Guide",
      timestamp: moment().toISOString(), // Current date and time
      content: (
        <div>
          <p>
            In today's digital age, managing customer relationships, organizing
            marketing efforts, and streamlining sales processes are essential
            components of any successful business strategy. Fortunately,
            platforms like HubSpot have revolutionized the way businesses
            approach these tasks, offering an all-in-one solution that
            simplifies complex processes and drives growth.
          </p>
          <p>
            <strong>What is HubSpot?</strong>
            <br />
            HubSpot is a powerful inbound marketing, sales, and customer service
            software designed to help businesses attract visitors, convert
            leads, and close customers. It offers a suite of tools and features
            tailored to various aspects of marketing, sales, and customer
            service, providing businesses with the capabilities they need to
            thrive in the digital landscape.
          </p>
          <p>
            <strong>How Does HubSpot Work?</strong>
            <br />
            HubSpot operates on the principles of inbound marketing, which
            focuses on attracting and engaging customers through valuable
            content and experiences tailored to their needs. Here's how HubSpot
            works across its key functionalities:
          </p>
          <ul>
            <li>
              <strong>Marketing Hub:</strong> HubSpot's Marketing Hub empowers
              businesses to attract, engage, and delight customers through
              personalized marketing campaigns. It includes tools for email
              marketing, social media management, content creation, SEO
              optimization, and more, enabling businesses to reach their target
              audience effectively.
            </li>
            <li>
              <strong>Sales Hub:</strong> The Sales Hub equips sales teams with
              the tools they need to manage and nurture leads, track
              interactions, and close deals efficiently. Features like contact
              management, email tracking, pipeline management, and sales
              automation streamline the sales process, enabling teams to focus
              on building relationships and driving revenue.
            </li>
            <li>
              <strong>Service Hub:</strong> HubSpot's Service Hub enables
              businesses to deliver exceptional customer service and support
              experiences. From ticketing systems and knowledge bases to
              customer feedback tools and chatbots, the Service Hub helps
              businesses resolve customer issues quickly and effectively,
              fostering customer satisfaction and loyalty.
            </li>
          </ul>
          {/* Add more content here */}
        </div>
      ),
      imageUrl: YogaSet,
    },
    {
      id: 2,
      title: "Blog Post 1",
      timestamp: moment().toISOString(), // Current date and time
      content:
        "Lorem unde omnis iste natus error sit Sed ut perspiciatis unde omnis Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis...",
      imageUrl: YogaSet,
      comments: 5,
    },
    {
      id: 3,
      title: "Blog Post 2",
      timestamp: moment().toISOString(), // Current date and time
      content:
        "Lorem unde omnis iste natus error sit Sed ut perspiciatis unde omnis Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis...",
      imageUrl: YogaSet,
      comments: 10,
    },
  ];

  const goToPreviousPost = () => {
    setCurrentPostIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextPost = () => {
    setCurrentPostIndex((prevIndex) =>
      Math.min(blogPosts.length - 1, prevIndex + 1)
    );
  };

  return (
    <div>
      <div>
        {/*col start for all posts */}
        {blogPosts.map((post) => (
          <div key={post.id} className="w3-card-4 w3-margin w3-white m-4">
            <img
              src={post.imageUrl}
              alt="blog-post"
              style={{ width: "100%" }}
            />

            <div className="w3-container m-2">
              <br />
              <h3>
                <b>
                  <i>{post.title}</i>
                </b>
              </h3>
              <p>
                {" "}
                <span className="w3-opacity">
                  Posted on:{" "}
                  {moment(post.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
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
                  <footer>
                    <span>
                      <button
                        className="w3-button w3-black w3-padding-large w3-margin-bottom"
                        onClick={goToPreviousPost}
                        disabled={currentPostIndex === 0}
                      >
                        « Previous
                      </button>
                    </span>
                    <span>
                      {" "}
                      <a
                        href="/blog"
                        className="w3-button w3-black w3-padding-large w3-margin-bottom"
                      >
                        Back to Blog
                      </a>
                    </span>
                    <span>
                      {" "}
                      <button
                        className="w3-button w3-black w3-padding-large w3-margin-bottom"
                        onClick={goToNextPost}
                        disabled={currentPostIndex === blogPosts.length - 1}
                      >
                        Next »
                      </button>
                    </span>
                  </footer>
                </div>

                      
                {/* start entries card content container COL COMMENTS*/}
              </div>
              <hr />
                        <div className="container-fluid"> 
  <h5 className="mx-1">SHARE THIS POST</h5>
  <p>
    <span className="mx-1">    
      <TwitterShareButton
        url={window.location.href}
        title={post.title}
      >
        <button className="w3-button btn btn-xs text-white bg-white" style={{ boxShadow:'0.25rem .25rem .5rem gray'}}>
          <FaTwitter style={{ color: "black"}}/>
        </button>
      </TwitterShareButton> {/* end Twitter Share Button */}
    </span>
    <span className="mx-1"> 
      {/* start Facebook Share Button */}
      <FacebookShareButton
        url={window.location.href}
        quote={post.title}
      >
        <button className="w3-button btn btn-xs text-white bg-primary rounded" style={{ boxShadow:'0.25rem .25rem .5rem gray'}}>
          <FaFacebook />
        </button>
      </FacebookShareButton>  {/*end Facebook Share Button */}
    </span>
    <span className="mx-1"> 
      {/* start Pinterest Share Button */}
      <PinterestShareButton
        url={window.location.href}
        media={post.imageUrl}
        description={post.title}
      >
        <button className="w3-button btn btn-xs text-white rounded" style={{backgroundColor:'red',  boxShadow:'0.25rem .25rem .5rem gray'}} >
          <FaPinterest style={{ color: "white"}}/>
        </button>
      </PinterestShareButton> {/* end Pinterest Share Button */}
    </span>
    <span className="mx-1"> 
      {/* start Github Button */}
      <button className="w3-button btn btn-xs text-white rounded" style={{backgroundColor:'#800080',  boxShadow:'0.25rem .25rem .5rem gray'}}>
        <FaGithub style={{ color: "white"}}/>
      </button>  
    </span>
  </p>
</div>
<hr />
<br />         {/* end entries card content container ROW*/}
            </div>
            
            {/* end entries card content container*/}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default FullPosts;

/*col end for posts iteration 
      <footer className="w3-container w3-dark-grey w3-padding-32 text-center">
        <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
          « Previous
        </button>

        <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
          Next »
        </button>
        <p
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 2.8)",
            color: "#FDC5E8",
          }}
        >
          2<span style={{ color: "#00FFFF" }}>FACE</span>
        </p>
      </footer>
      */

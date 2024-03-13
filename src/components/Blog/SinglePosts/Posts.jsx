import React from "react";
import moment from "moment"; // Don't forget to import moment library
import YogaSet from "../../../assets/images/YogaStory/YogaSet.png";
import { Button } from "react-bootstrap";

const Posts = () => {
  // Ensure correct structure for posts array
  const blogPosts = [
    {
      id: '1',
      title: "Unlocking Business Growth with HubSpot: A Comprehensive Guide",
      timestamp: moment().toISOString(), // Current date and time
      content: `In today's digital age, managing customer relationships, 
      organizing marketing efforts, and streamlining sales processes are 
      essential components of any successful business strategy. Fortunately, 
      platforms like HubSpot have revolutionized the way businesses approach 
      these tasks, offering an all-in-one solution that simplifies complex 
      processes and drives growth...`,
      imageUrl: YogaSet,
      postURL: "/full-posts#1",
    },    
  ];

  return (
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
              
                    <br></br>
                    <h3>
                      <b>
                        <i>{post.title}</i>
                      </b>
                    </h3>
                    <p>
                      {" "}
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
                      <div className="w3-col py-4 m12 s12">
                      <p>
                  <Button
                    href={post.postURL} 
                    className="w3-padding-medium w3-white w3-border"
                  >
                    <b>READ MORE »</b>
                  </Button>
                </p>
                      </div>
                      {/* start entries card content container COL COMMENTS*/}
                    </div>
                    {/* end entries card content container ROW*/}
                  </div>
                  {/* end entries card content container*/}
                </div>
              ))}
       
              {/*col end for posts iteration */}
           
    </div>
  );
};

export default Posts;

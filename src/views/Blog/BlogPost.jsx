





import React from 'react';
import Business from '../../assets/images/Business.png';
import Post from '../../components/Post/Post'; // Import the modified Post component
import './blog.css';
import BlogHeader from '../../components/Blog/BlogHeader';
import BlogPost from './BlogPost';


const Blog = () => {
   
  // Sample blog posts
  const posts = [
    {
      title: 'First Post',
      content: 'This is the content of the first post.',
      imageUrl: Business, // Add imageUrl to each post object
    },
    {
      title: 'Second Post',
      content: 'This is the content of the second post.',
      imageUrl: Business, // Add imageUrl to each post object
    },
    {
      title: 'Third Post',
      content: 'This is the content of the third post.',
      imageUrl: Business, // Add imageUrl to each post object
    },
  ];

  return (
    <div>
        <BlogHeader />
        <BlogPost />
   <br></br>
   <br></br>
   <br></br>
              <div className="blog">
        <div className='container mb-4 mt-4'>
          <div className='row d-flex justify-content-center align-items-center' id='image-row'>
            {posts.map((post, index) => (
              <div key={index} style={{ margin: '0px', padding: '-5px' }}>
                {/* Pass timestamp prop to Post component */}
                <Post title={post.title} content={post.content} imageUrl={post.imageUrl} timestamp={post.timestamp} style={{ width: '75%', height: 'auto' }} />
              </div>
            ))}
          </div>
        </div>
</div>
    </div>
  );
};

export default Blog;
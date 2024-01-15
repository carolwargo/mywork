import React from 'react';
import HomeBig from '../../assets/images/HomeBig.png';

const Header = () => {
  return (
    <header className='bg-black'>
      <div
        id='intro-example'
        className='p-4 bg-image position-relative'
        style={{
          backgroundImage: `url(${HomeBig})`,
          backgroundSize: 'contain', // Set the background size to contain the entire image without distortion
         backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
        }}
      >
        {/* Overlay div for masking */}
        <div
          className='position-absolute top-0 start-0 w-100 h-100'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >

        </div>

        <div className='row d-flex h-100 px-5 text-center position-relative'>
          <div className='col-md-4 text-white'></div>
          <div className='col-md-8 text-white p-3 position-relative z-index-1'>
          <br></br>
            <h3
              className='mt-2 mb-2 '
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                fontFamily: 'roboto',
                lineHeight: '1.25', 
              }}
            >
              <i>"Make a lasting</i>
              <span
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)',
                  color:'#FDC5E8'
                }}
              >
                <b> <i>VISUAL IMPACT</i> </b>
              </span>
              <br></br>
              <i> with stunning graphics or build a powerful</i>
              <span
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)',
                  color:'#FDC5E8'
                }}
              >
                <b> <i>ONLINE PRESENCE</i> </b>
              </span>

              <i>through web development."</i>
            </h3>
          
            <br></br>
            <div className='p-2'>
            <p style={{fontSize:'12px', paddingBottom:'0px'}}>PREFACE STATEMENT: 
            </p>
            <p style={{fontSize:'12px'}}>   <i>
  * This site is crafted from scratch, avoiding the use of CMS 
  software like WordPress or Wix, preconfigured plug-in components. It is 
  built on the React.js framework, the very same framework employed by 
  Facebook for building and maintaining their applications. <br></br>** All graphics showcased are original creations, with the exception of logos or instances where inspiration may have been drawn from a concept or function of other works. 
  <br></br> *** KEEP IN MIND THIS SITE IS UNDER CONSTRUCTION...
  </i>
</p>
</div>    
            {/* 
          <h5>Choose your path to get started!</h5>
          <br></br>
            <Link to='/graphic-design'>
              <button
                type='button'
                className='btn btn-outline-light bg-black btn-sm m-1 px-3'
                data-mdb-ripple-init
              >
                <b>Graphic Design</b>
              </button>
            </Link>

            <Link to='/web-dev'>
              <button
                type='button'
                className='btn btn-outline-black bg-light text-black btn-sm m-1'
                style={{ paddingRight: '1', paddingLeft: '1rem' }}
                data-mdb-ripple-init
              >
                <b>Web Development</b>
              </button>
            </Link>
            */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

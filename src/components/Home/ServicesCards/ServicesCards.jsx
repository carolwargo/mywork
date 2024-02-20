import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
//import Marketing from '../../../assets/images/DigitalMarketing/Marketing.png';

const ServicesCards = () => {
    return (
        <main>
       <div className="container">
        {/* start digital marketing card */}
    <CardGroup>
      <Card className='bg-black text-white mx-2'>
        <Card.Body className='px-3'>
          <Card.Title>
            <span 
         style={{
            color:'#00FFFF', 
         fontSize:'2.5rem', 
         textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"
        }}>
            DIGITAL
        <br /> 
        <span 
        style={{ 
            textShadow: "2px 2px 4px rgba(255, 255, 255, 3.5)",
             color: "#FDC5E8"
            }}
             >MARKETING
             </span>
             </span>
            <p> 
                    <span
                    style={{
                        fontFamily:'Raleway', 
                        fontSize:'20px',
                        color:'#FDC5E8',
                        textShadow: "2px 2px 4px #00FFFF"
                    }}
                        >       
              {" "}
              <b>2</b>
              </span>
              <span  
              style={{ 
                color: "#00FFFF", 
                fontSize:'16px',
                textShadow: "2px 2px 4px #00FFFF", 
                fontFamily:'Raleway'}}>
            <b>FACE </b>
            {" "}
               </span>
               <span style={{fontSize:'13px'}}>
               {" "}
               digital marketing services...
               </span>
            </p>
            <b><hr /></b>
            </Card.Title>
          <Card.Text>
          <p> Digital avenues play crucial roles in fostering brand 
            visibility and interaction. Each channel presents a unique canvas for businesses to 
            paint their stories, creating dynamic experiences that resonate with diverse audiences.</p>
            <strong> Digital Marketing:</strong> Transform your brand's online presence and captivate audiences with our enchanting digital marketing strategies.
          </Card.Text>
        </Card.Body>
        <div>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>
            Cras justo odio 
            </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </div>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
  {/* end digital marketing card */}

    {/* start digital marketing card */}
      <Card>
        <Card.Body>
        <Card.Title>
            <span 
         style={{
            color:'#00FFFF', 
         fontSize:'2.5rem', 
         textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"
        }}>
           GRAPHIC
        <br /> 
        <span 
        style={{ 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8"
            }}
             >DESIGN
             </span>
             </span>
            <p className="" style={{fontFamily:'Raleway', fontSize:'14px'}}>
              {" "}
              <span className="w3-tag" 
              style={{ 
                color: "black", 
                backgroundColor:'#FDC5E8', 
                textShadow: "2px 2px 4px #00FFFF", 
                fontFamily:'Raleway'}}>
            <b>2FACE </b>
            {" "}
               </span>
               {" "}
               digital marketing services...
            </p>
            <b><hr /></b>
            </Card.Title>
          <Card.Text>
          <strong>Graphic Design:</strong> Let our talented wizards craft stunning visuals and captivating designs that leave a lasting impression.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
 {/* end graphic design card */}

    {/* start web development card */}
      <Card className='bg-black text-white  mx-2'>
        <Card.Body>
          <Card.Title>
            <span 
         style={{
            color:'#00FFFF', 
         fontSize:'2.5rem', 
         textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"
        }}>
           WEB
        <br /> 
        <span 
        style={{ 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8"
            }}
             > DEVELOPMENT
             </span>
             </span>
            <p className="" style={{fontFamily:'Raleway', fontSize:'14px'}}>
              {" "}
              <span className="w3-tag" 
              style={{ 
                color: "black", 
                backgroundColor:'#FDC5E8', 
                textShadow: "2px 2px 4px #00FFFF", 
                fontFamily:'Raleway'}}>
            <b>2FACE </b>
            {" "}
               </span>
               {" "}
               digital marketing services...
            </p>
            <b><hr /></b>
            </Card.Title>
          <Card.Text>
          <p className="px-2 py-2"> Digital avenues play crucial roles in fostering brand 
            visibility and interaction. Each channel presents a unique canvas for businesses to 
            paint their stories, creating dynamic experiences that resonate with diverse audiences.</p>
            <strong>Web Design & Software Development:</strong> Enter a world of seamless user experiences and innovative solutions as our expert developers bring your digital fantasies to fruition.
          </Card.Text>
        </Card.Body>
        <div>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>
            Cras justo odio 
            </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </div>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
        {/* end web development card */}
    </CardGroup>
    </div>
        </main>
    );
    };

export default ServicesCards;
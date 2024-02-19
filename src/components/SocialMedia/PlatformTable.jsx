import React from 'react';
import Table from 'react-bootstrap/Table';
import { TfiYoutube } from "react-icons/tfi";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiTiktokLogoDuotone } from "react-icons/pi";

//import '../../App.css';

function StripedRowExample() {
  return (
    <main className='border border-opacity-25% px-3'style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
      
   
    <Table striped className='bg-black' style={{fontFamily:'sans-serif'}}>
      <thead style={{color:'light-gray'}} className='bg-black'>
        <tr>
          <th></th>
          <th >PLATFORM</th>
          <th >BEST PRACTICES</th>
          <th> USE</th>
        </tr>
      </thead>

      <tbody className='align-items-center'>
        <tr>
          <td style={{color:'red', fontSize:'11px'}}><TfiYoutube/></td>
          <td style={{color:'red'}}>YouTube</td>
          <td style={{color:'red', fontSize:'11px'}}> In your video description and title, identify 1 – 2 main words that describe your video.</td>
          <td style={{color:'red', fontSize:'11px'}}>Video content only</td>
        </tr>

        <tr>
          <td style={{color:'navy'}}><AiOutlineFacebook/></td>
          <td style={{color:'navy'}}>Facebook</td>
          <td style={{color:'navy', fontSize:'11px'}}>Facebook doesn’t limit the length of your text posts. Videos and photos perform best with a relatively short copy used as a clear and strong call-to-action (CTA). </td>
          <td style={{color:'navy', fontSize:'11px'}}>Facebook doesn’t limit the length of your text posts. Videos and photos perform best with a relatively short copy used as a clear and strong call-to-action (CTA). </td>
        </tr>

        <tr>
          <td style={{color:' #C13584'}}><PiInstagramLogoDuotone/></td>
          <td style={{color:' #C13584'}}>Instagram</td>
          <td style={{color:' #C13584', fontSize:'11px'}}> Instagram has a 140-character limit for your profile introduction. To optimize this short line of introduction that attract people when they first visit your account, you need to understand your purpose on the platform. Keep it short and wisely tell about your account. </td>
          <td style={{color:' #C13584', fontSize:'11px'}}> Instagram has a 140-character limit for your profile introduction. To optimize this short line of introduction that attract people when they first visit your account, you need to understand your purpose on the platform. Keep it short and wisely tell about your account. </td>
        </tr>

        <tr>
          <td style={{color:'teal'}}><PiTiktokLogoDuotone/></td>
          <td style={{color:'teal'}}>TikTok</td>
          <td style={{color:'teal', fontSize:'11px'}}>Thornton</td>
          <td style={{color:'teal', fontSize:'11px'}}>Thornton</td>
        </tr>

        <tr>
          <td><FaSquareXTwitter/></td>
          <td>TwitterX</td>
          <td style={{fontSize:'11px'}}>You can only publish posts with the limit of 140 characters, excluding photos and links. Therefore, remember to write a concise and clear copy. It’s better to use URL-shortener like bit.ly to shorten your links. </td>
          <td style={{fontSize:'11px'}}>You can only publish posts with the limit of 140 characters, excluding photos and links. Therefore, remember to write a concise and clear copy. It’s better to use URL-shortener like bit.ly to shorten your links. </td>
        </tr>
      </tbody>

    </Table>
    
    </main>
  );
}

export default StripedRowExample;

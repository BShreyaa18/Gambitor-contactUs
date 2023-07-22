import React from "react";
import { FaEnvelope , FaLinkedin  } from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { BrowserRouter , Link } from 'react-router-dom';
function ContactItem(props)
{
    return(
      <BrowserRouter>
        <div class="photo-card">
      <div className="profile"><img src={props.img} alt="Your Photo" /></div> 
    <div class="card-content">
      <h4>{props.name}</h4>
      <h5>{props.post}</h5>
      <div class="icons">
      <Link to={`mailto:${props.mail}`} target='_blank' rel="noreferrer"><FaEnvelope className="alignicons"  /></Link>
      <Link to={`tel:${props.phone}`} target='_blank' rel="noreferrer"><BsFillTelephoneFill   className="alignicons" /></Link>
      <Link to={props.linkedin} target='_blank' rel="noreferrer"><FaLinkedin className="alignicons" /></Link>
      </div>
    </div>
  </div>
  </BrowserRouter>
    );
}
export default ContactItem;
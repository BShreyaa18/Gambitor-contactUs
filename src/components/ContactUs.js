import React from "react";
import ContactItem from "./ContactItem";
import InitiatorItem from "./InitiatorItem";
import profileImg1 from "../images/nitin_sharma.jpg"
import profileImg2 from "../images/Sapna.jpg";
import profileImg3 from "../images/Sachin.jpeg";
import profileImg4 from "../images/Karan.jpg";
import profileImg5 from "../images/Malay.jpg";
import profileImg6 from "../images/Abhishek.jpeg";
import profileImg7 from "../images/Sankalp.jpeg";
import profileImg8 from "../images/Prashashtha.jpeg";
import ContactImg from "../images/Group 1214 (2).png";
import InitiatorImg from "../images/Group 1206.png";
function ContactUs(){
    return(
        <div className="container">
            <div className="imagebox"><img src={ContactImg}   className="styleimg" /></div>
            <div class="contactcards">
            <ContactItem img={profileImg1} name="Nitin Sharma" post="Secretary" mail="n_sharma@me.iitr.ac.in" linkedin="https://www.linkedin.com/in/nitin-sharma-8b608b278/" />
            <ContactItem img={profileImg2} name="Sapna Burdak" post="Additional Secretary" mail="s_burdak@bt.iitr.ac.in" phone="+91 9783637967" linkedin="https://www.linkedin.com/in/sapna-burdak-043050229" />
            <ContactItem img={profileImg3} name="Sachin Merothiya" post="Additional Secretary" mail="s_merothiya@ee.iitr.ac.in" phone="+91 6397599591" linkedin="https://www.linkedin.com/in/sachin-merothiya-024989241" />
            <ContactItem img={profileImg4} name="Karan Gangwar" post="Additional Secretary" mail="k_gangwar@me.iitr.ac.in" phone="+91 9005166180" linkedin="https://www.linkedin.com/in/karan-gangwar-319a18223" />
            </div>
            <div className="imagebox"><img src={InitiatorImg} className="styleimg" /></div>
            <div class="contactcards">
            <InitiatorItem img={profileImg5} name="Malay Kalavadia" />
            <InitiatorItem img={profileImg6} name="Abhishek" />
            <InitiatorItem img={profileImg7} name="Sankalp Raj" />
            <InitiatorItem img={profileImg8} name="Prashashtha Raka" />
            </div>
        </div>
    );
}
export default ContactUs;
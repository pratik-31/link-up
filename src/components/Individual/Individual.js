import React from "react";
import "./Individual.css";
import Influencer from "./Influencer/Influencer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Socio from "./Socio/Socio";
import Footer from "../maincontent/Footer/Footer";
function Individual() {
  return (
    <div>
      <Influencer />
      <Services />
      <Testimonial />
      {/* <SocialLinks /> */}
      
      <Footer/>
      <Socio/>
    </div>
  );
}

export default Individual;

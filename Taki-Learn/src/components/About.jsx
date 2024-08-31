import React from "react";
import Button from "./button";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h4>About Us</h4>
        <h2>
          eLearning providing the best opportunities to the students around the
          glob.
        </h2>
        <p>
          Install our top-rated dropshipping app to your e-commerce site and get
          access to US Suppliers, AliExpress vendors, and the best dropshipping
          and custom products. Start selling the right products to the customer
          base that you know best. We connect you to inventory, so you can focus
          on creating a catalog of profitable products for your online store.
        </p>
        <p>
          Install our top-rated dropshipping app to your e-commerce site and get
          access to US Suppliers, AliExpress vendors, and the best dropshipping
          and custom products. Start selling the right products to the customer
          base that you know best. We connect you to inventory, so you can focus
          on creating a catalog of profitable products for your online store.
        </p>
        <Button label="Join Us" />
      </div>
      <div className="about-image">
        <div className="shadow-box" >
            <img src="./Rectangle 13.png" alt="" className="image1" />
            <img src="./Rectangle 14.png" alt="" className="image2" />
        </div>
      </div>
      
    </section>
  );
};

export default About;

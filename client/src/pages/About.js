import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutuspagephoto.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At OnlineShopee, we strive to provide our customers with an exceptional online shopping experience. 
          Founded with a passion for quality products and customer satisfaction, 
          we aim to offer a curated selection of watches. Whether you're searching for wristwatch or wall watch, 
          we're dedicated to delivering premium goods at competitive prices. 
          With a commitment to innovation, integrity, and excellence, 
          we continually seek to exceed expectations and build lasting relationships with our valued customers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

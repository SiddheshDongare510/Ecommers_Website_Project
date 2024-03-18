import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>OnlineShopee is committed to protecting the 
            privacy of our users. This Privacy Policy outlines how we collect, 
            use, disclose, and protect the information gathered from visitors to our website.</p>
          {/* <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

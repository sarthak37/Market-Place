import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall} from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/p1.jpeg"
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Feel free to reach out 
          </p>
          <p className="mt-3">
            <BiMailSend /> : sarthak27998@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8126478247
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>About Me</h2>
          <p className="text-justify mt-2">
          I like to achieve things by writing as few lines of code as possible. And that translates to my real life as well. I have worked on microservices for a product that sees 10 million daily active users and 200,000 requests per minute. I write code that not only serves value to the users but also saves the company money and time.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

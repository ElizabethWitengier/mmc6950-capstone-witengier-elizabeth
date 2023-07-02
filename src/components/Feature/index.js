import React from "react";
import Button from "../common/Button";

const Feature = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-48">
        <div className="text-center">
          <h2 className="text-xl font-semibold my-2">Mockup Company</h2>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem
          </p>
        </div>
        <div className="flex justify-around">
          <Button primary>Learn More</Button>
          <Button secondary>Get Started</Button>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          text="Products"
        />
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          text="Products"
        />
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          text="Products"
        />
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          text="Products"
        />
      </div>
    </div>
  );
};

const SingleFeatureCard = ({ img, text }) => (
  <div className="flex items-center justify-center flex-col">
    <img src={img} className="rounded-lg object-fit max-w-[20vw]" />
    <Button secondary>{text}</Button>
  </div>
);

export default Feature;

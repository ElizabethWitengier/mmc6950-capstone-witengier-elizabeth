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
        <Button primary link="/coming-soon">
          Join Us
        </Button>
      </div>
      <div className="flex items-center justify-around">
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          link="/coming-soon"
          text="Art Therapy"
        />
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          link="/meditation"
          text="Meditations"
        />
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          text="Products"
          link="/coming-soon"
        />
        <SingleFeatureCard
          img={
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          text="Yoga"
          link="/yoga"
        />
      </div>
    </div>
  );
};

const SingleFeatureCard = ({ img, text, link }) => (
  <div className="flex items-center justify-center flex-col">
    <img src={img} className="rounded-lg object-fit max-w-[20vw]" />
    <Button secondary link={link}>
      {text}
    </Button>
  </div>
);

export default Feature;

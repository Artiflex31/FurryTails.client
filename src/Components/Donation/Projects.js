import React from "react";
import cardData from "../Card/cardData.json";
import Card from "../Card/Card";

function Projects() {
  return (
    <div className="my-12">
      <h2 className="text-center text-4xl font-merriweather font-bold mb-10 text-cta">
        Your donations help us run important projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card
            index={index}
            imageSrc={card.imageSrc}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

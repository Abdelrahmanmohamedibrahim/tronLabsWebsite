import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="glass">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;

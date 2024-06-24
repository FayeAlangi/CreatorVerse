import React from "react";

const CreatorSingleCard = ({ creator }) => {
  return (
    <div key={creator.id}>
      <h1>{creator.name}</h1>
    </div>
  );
};
export default CreatorSingleCard;

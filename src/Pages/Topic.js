import React from "react";
import { useParams } from "react-router";

const Topic = () => {
  let { topicsId } = useParams();
  return (
    <div>
      <h2>{topicsId}</h2>
    </div>
  );
};

export default Topic;

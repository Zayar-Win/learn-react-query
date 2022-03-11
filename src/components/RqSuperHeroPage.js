import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RqSuperHeroPage = () => {
  const { isLoading, data } = useQuery(
    "superheroes",
    () => {
      return axios.get(
        "http://localhost:4000/superheros"
      );
    }
  );
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h2>RqSuperHeroPage</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.hero}</div>
      ))}
    </div>
  );
};

export default RqSuperHeroPage;

import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RqSuperHeroPage = () => {
  const { isLoading, data, isError, error } =
    useQuery("superheroes", () => {
      return axios.get(
        "http://localhost:4000/superheros1"
      );
    });
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
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

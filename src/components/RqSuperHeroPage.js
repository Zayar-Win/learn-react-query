import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const RqSuperHeroPage = () => {
  //u can also update the data in the third parameter options called select
  //it will update the data that return from the useQuery.

  const {
    isLoading,
    data,
    isError,
    isFetching,
    error,
    refetch,
  } = useQuery(
    "superheroes",
    () => {
      return axios.get(
        "http://localhost:4000/superheros"
      );
    },
    {
      select: (data) => {
        //this function automatically receive the data parameter that is the data from api fetch
        //this function will update the data that return from useQuery
        const heroNames = data.data.map(
          (hero) => hero.name
        );
        return heroNames;
      },
    }
  );
  if (isLoading || isFetching) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <h2>RqSuperHeroPage</h2>
      <button onClick={refetch}>
        Fetch heros
      </button>
      {data.map((hero) => (
        <div key={hero}>{hero}</div>
      ))}
    </div>
  );
};

export default RqSuperHeroPage;

import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RqSuperHeroPage = () => {
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
      //if you want to fetch the data depending on user click the first thing you need to do
      //is to set the option in third parameter enabled to false by doing this is will not fetch
      //the data when the component first mount.
      //the next thing you need to do is to fetch the data when user click on button
      //the fetch the data when the user click you need the function to fetch the data
      //for this useQuery will return a functin call refetch you can use this function by listing click event on button
      enabled: false,
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
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.hero}</div>
      ))}
    </div>
  );
};

export default RqSuperHeroPage;

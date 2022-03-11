import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RqSuperHeroPage = () => {
  const { isLoading, data, isError, error } =
    useQuery(
      "superheroes",
      () => {
        return axios.get(
          "http://localhost:4000/superheros"
        );
      },
      {
        //react-query default cache time is 5mins
        //when query is fetch data and cache data 5 min until uncache
        //when the user redirect to the page again within 5mins it will show the cache data
        //it will not set loading to true but is fetch in background if data change it will update the data but it work in background
        //we can change the cachetime by adding third parameter in useQuery options
        cacheTime: 5000,
      }
    );
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

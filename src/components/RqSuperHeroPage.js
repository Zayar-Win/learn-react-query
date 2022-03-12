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
        // cacheTime: 5000,
        //react-query default staletime is 0s
        //with in staletime react-query will not fetch data even in background
        // staleTime: 5000,
        //the default value of refetchOnMount is true it mean if the component mount
        //the query will fetch automatically
        //when you change to false it will fetch the first time but it will not fetch in anoter time.
        //always it same to true;
        // refetchOnMount: false, //it can change to false and "always"
        //the default value of refetchOnWindowFocus is false,
        //when we set to true it will fetch the data when window on focus it mean when we change the data
        //it will directly update the data
        //when we set to false it will update the component when refresh the page;
        refetchOnWindowFocus: false,
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

import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const RqSuperHeroPage = () => {
  const [isRefetch, setIsRefetch] =
    useState(true);
  //sometime u need to do some side effect after fetching the data in this case useQuery accept
  //in the third parameter called onSuccess and onError it will do when the data fetch success or when the error occur

  const onSuccess = (data) => {
    if (data.data.length === 4) {
      setIsRefetch(false);
    }
  };

  const onError = (error) => {
    console.log("encounter after on error");
  };

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
      onSuccess, //in the third parameter we can get the option call on Success and onError they will run after fetch data
      refetchInterval: isRefetch
        ? 3000
        : isRefetch, //this is set the refetchInterval value depending on data
      onError,
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

import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get(
    "http://localhost:4000/superheros"
  );
};

const fetchFriends = () => {
  return axios.get(
    "http://localhost:4000/friends"
  );
};

const ParallelQuery = () => {
  const { data: superHeros } = useQuery(
    "super-heros",
    fetchSuperHeros
  ); //when we use multipal useQuery the notice is to avoid confling of return data we can use alist
  //in react-query mulipal route data fetch is pretty simple if you need two routes use useQuery two times
  const { data: friends } = useQuery(
    "friends",
    fetchFriends
  );

  return <div>ParallelQuery</div>;
};

export default ParallelQuery;

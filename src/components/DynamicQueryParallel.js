import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchdata = (heroId) => {
  return axios.get(
    `http://localhost:4000/superheros/${heroId}`
  );
};

const DynamicQueryParallel = ({ herosId }) => {
  const results = useQueries(
    //useQueries is used when we want to fetch parallel query with dynamic data
    //in useQueries it accept a parameter with array we can map this array and return a object
    //with queryKey and data fetching function
    herosId.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchdata(id),
      };
    })
  );
  console.log({ results });
  return <div>DynamicQueryParallel</div>;
};

export default DynamicQueryParallel;

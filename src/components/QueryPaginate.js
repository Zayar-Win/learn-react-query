import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
  );
};

const QueryPaginate = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ["colors", page],
    () => fetchColors(page),
    {
      //keepPreviousData mean amiagin paginate default value false it work like when user paginate to next page
      //it will fetch data and back to previous page it will fetch data again
      //it u want not to fetch data when use back to previous page u need to do is keepPreviousData to true

      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data?.data.map((c) => (
        <h1 key={c.id}>{c.color}</h1>
      ))}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === 3}
      >
        Next
      </button>
    </div>
  );
};

export default QueryPaginate;

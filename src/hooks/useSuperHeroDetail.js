import axios from "axios";
import { useQuery } from "react-query";

const fetchDetail = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(
    `http://localhost:4000/superheros/${id}`
  );
};

export const useSuperHeroDetail = (heroId) => {
  return useQuery(
    ["super-hero", heroId],
    fetchDetail //this functin automaticlly accept unique key || useQuery's first parameter as it parameter
  );
};

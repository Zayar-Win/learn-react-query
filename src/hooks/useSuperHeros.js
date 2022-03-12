import axios from "axios";
import { useQuery } from "react-query";

export const useSuperHeros = () => {
  return useQuery(
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
};

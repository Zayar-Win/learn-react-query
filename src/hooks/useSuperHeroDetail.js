import axios from "axios";
import {
  useQuery,
  useQueryClient,
} from "react-query";

const fetchDetail = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(
    `http://localhost:4000/superheros/${id}`
  );
};

//useQueryclient hook is used when you want not to fetch the data is data is alread fetch in another query
//mean use want to use data by not fetching.U can use the data from another query's cache

export const useSuperHeroDetail = (heroId) => {
  const queryclient = useQueryClient();
  return useQuery(
    ["super-hero", heroId],
    fetchDetail, //this functin automaticlly accept unique key || useQuery's first parameter as it parameter
    {
      //u can use queryClinet hook by add in third parameter
      //the option key is initialData it is a function in this function u can use queryclient.getQueryData() function
      //by pasing another query's unique key it will give you the cache data of this query
      //if u get the query u can find the data if u want
      initialData: () => {
        let hero = queryclient
          .getQueryData("superheroes")
          ?.data?.find(
            (hero) => hero.id === parseInt(heroId)
          );
        if (hero) {
          return { data: hero };
        } else {
          return undefined;
        }
      },
    }
  );
};

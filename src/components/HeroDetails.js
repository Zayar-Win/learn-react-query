import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroDetail } from "../hooks/useSuperHeroDetail";

const HeroDetails = () => {
  const params = useParams();
  const { id } = params;
  const { isLoading, data, error, isError } =
    useSuperHeroDetail(id);
  console.log(data);
  return <div>{data?.data?.name}</div>;
};

export default HeroDetails;

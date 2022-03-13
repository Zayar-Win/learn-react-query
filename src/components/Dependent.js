import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUser = (email) => {
  return axios.get(
    `http://localhost:4000/user/${email}`
  );
};

const fetchCourse = (channelId) => {
  return axios.get(
    `http://localhost:4000/channel/${channelId}`
  );
};

const Dependent = ({ email }) => {
  //if you want to fetch data depending on another query result u can use dependent queries

  const { data: user } = useQuery(
    ["user", email],
    () => fetchUser(email)
  );
  const channelId = user?.data.channelId;
  //one thing u must notice if you use two query it will run when conponent mount
  //so the second query need the value of first query data
  //the thing u must do is to say second query enabled until the data is aviable
  //to do that u can use enabled property in third parameter
  const { data } = useQuery(
    ["course", channelId],
    () => fetchCourse(channelId),
    {
      enabled: !!channelId, // !! check mean to change the channelId value to bollean
      //when the component mout the channelId is false so enabled is false is mean do fetch this query until the channelId value get
    }
  );
  return <div>Dependent</div>;
};

export default Dependent;

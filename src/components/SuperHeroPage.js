import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";

const SuperHeroPage = () => {
  const [loading, setLoading] = useState(true);
  const [superHeros, setSuperHeros] = useState(
    []
  );
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/superheros"
      );
      setLoading(false);
      console.log(data);
      setSuperHeros(data);
    };
    fetchdata();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h3>SuperHeros</h3>
      <ul>
        {superHeros?.map((hero) => (
          <li key={hero.id}>{hero.hero}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeroPage;

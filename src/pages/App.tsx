import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/App.css";
import Layout from "../components/Layout";
import axios from "axios";
import Card from "../components/Card";
import { PokeType } from "../utils/type/pokemon";
import { useTitle } from "../utils/hooks/title";

const Homepage = () => {
  useTitle(" Pokemon App");
  const navigate = useNavigate();
  const [data, setData] = useState<PokeType[]>([]);

  function fetchData() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((data) => {
        const { results } = data.data;
        setData(results);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    fetchData();
  }, []);

  function detailHandler(id: string, name: string) {
    navigate(`/detail/${id}/${name}`);
  }

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 p-6">
        {data.map((data) => (
          <Card
            onClick={() =>
              detailHandler(data.url.slice(34).replace("/", ""), data.name)
            }
            name={data.name}
            img={
              data.url
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.url
                    .slice(34)
                    .replace("/", ".svg")}`
                : data.url
            }
          />
        ))}
      </div>
    </Layout>
  );
};

export default Homepage;

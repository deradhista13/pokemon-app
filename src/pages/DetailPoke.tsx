import axios from "axios";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import CardDetail from "../components/CardDetail";
import Layout from "../components/Layout";
import { DetailsType } from "../utils/type/pokemon";
import { ProfilePoke } from "../utils/type/pokemon";
import { AbilitiesType } from "../utils/type/pokemon";
import { MovesType } from "../utils/type/pokemon";
import { StatsType } from "../utils/type/pokemon";

const DetailPoke: FC<CSSProperties> = () => {
  const { id_pokemon, name_pokemon } = useParams();
  const [data, setData] = useState<DetailsType[]>([]);
  const [baseStat, setBaseStat] = useState<StatsType[]>([]);
  const [abilities, setAbilities] = useState<AbilitiesType[]>([]);
  const [moves, setMoves] = useState<MovesType[]>([]);
  const [weight, setWeight] = useState<ProfilePoke>({});
  const [height, setHeight] = useState<ProfilePoke>({});

  function fetchData() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`)
      .then((res) => {
        console.log("data stats: ", res.data.stats);
        const ability = res.data.abilities;
        const status = res.data.stats;
        const move = res.data.moves;
        const datas = res.data.types;
        setAbilities(ability);
        setBaseStat(status);
        setWeight(res.data);
        setHeight(res.data);
        setMoves(move);
        setData(datas);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="flex justify-center w-full mt-8">
        <h1 className="uppercase font-bold text-xl md:text-2xl text-black">
          {name_pokemon}
        </h1>
      </div>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 p-6">
        <Card
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id_pokemon}.svg`}
        >
          <div className="grid grid-flow-row auto-rows-max grid-cols-1 m-5 gap-3 md:grid-cols-2">
            {data.map((data) => (
              <div className="rounded-lg border-4 border-black">
                <p className="bg-white rounded-lg text-center text-black capitalize text-xs md:text-md lg:text-lg font-bold">
                  {data.type.name}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <CardDetail>
          {baseStat.map((data) => (
            <div className="mb-5">
              <p className="text-left text-black text-xs md:text-md lg:text-lg font-bold capitalize">
                {data.stat.name}
              </p>
              <div className="h-1 w-full bg-gray-300">
                <div
                  className="h-1 bg-blue-500 text-black text-xs md:text-md lg:text-lg font-semibold"
                  style={{ width: `${data.base_stat}%` }}
                >
                  {data.base_stat}
                </div>
              </div>
            </div>
          ))}
        </CardDetail>
      </div>
      <div className="mx-5">
        <CardDetail>
          <div className="">
            <h1 className="text-lg uppercase font-bold text-black">Profile</h1>
            <p className="text-left text-black text-xs md:text-md lg:text-lg capitalize ">
              Name: {name_pokemon}
            </p>
            <p className="text-left text-black text-xs md:text-md lg:text-lg normal-case ">
              Weight: {weight.weight}
            </p>
            <p className="text-left text-black text-xs md:text-md lg:text-lg normal-case ">
              Height: {height.height}
            </p>
          </div>
        </CardDetail>
      </div>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 p-6">
        <CardDetail>
          <h1 className="text-lg uppercase font-bold text-black">Abilities</h1>
          {abilities.map((data) => (
            <div className="">
              <p className="capitalize text-xs md:text-md lg:text-lg text-black">
                {data.ability.name}
              </p>
            </div>
          ))}
        </CardDetail>
        <CardDetail>
          <h1 className="text-lg uppercase font-bold text-black">Moves</h1>
          {moves.slice(0, 4).map((data) => (
            <p className="capitalize text-xs md:text-md lg:text-lg text-black">
              {data.move.name}
            </p>
          ))}
        </CardDetail>
      </div>
      <div className="w-full flex justify-center mb-10">
        <Button label="Catch!" className="text-white" />
      </div>
    </Layout>
  );
};

export default DetailPoke;

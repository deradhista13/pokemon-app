import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import CardDetail from "../components/CardDetail";
import Layout from "../components/Layout";

import { useTitle } from "../utils/hooks/title";
import { ImgType, CatchType } from "../utils/type/pokemon";

const CatchPoke = () => {
  const [data, setData] = useState<CatchType>({});
  const [img, setImg] = useState<ImgType>({});
  const { name_pokemon } = useParams();
  useTitle("Catch - Pokemon App");
  const navigate = useNavigate();

  function fetchData() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)
      .then((res) => {
        const { sprites } = res.data;
        setImg(sprites);
        setData(res.data);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    fetchData();
  }, []);

  function randomNumber() {
    return Math.random() < 0.5 ? 0 : 1;
  }

  function catchPoke(x: number) {
    if (randomNumber() == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Try Again",
      });
    } else {
      handleMyPoke(data);
    }
  }

  function handleMyPoke(data: CatchType) {
    const checkExist = localStorage.getItem("MyPokemon");
    if (checkExist) {
      let parseMyPoke: CatchType[] = JSON.parse(checkExist);
      parseMyPoke.push(data);
      localStorage.setItem("MyPokemon", JSON.stringify(parseMyPoke));
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Pokemon added to MyPokemon",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      localStorage.setItem("MyPokemon", JSON.stringify([data]));
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Pokemon added to MyPokemon",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  return (
    <Layout overflow="hidden">
      <div
        className="h-screen overflow-auto bg-fixed"
        style={{
          backgroundImage:
            "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/den4zwg-45a7fe9e-d38a-417c-815c-3e56972adf62.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZmY1MjNmLWZmODQtNDU3ZC1hNTQ3LTQ2NDU4OGQzYTNkM1wvZGVuNHp3Zy00NWE3ZmU5ZS1kMzhhLTQxN2MtODE1Yy0zZTU2OTcyYWRmNjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7r4EFNYAQGlxIBpSStqPW7uUrRjCqTi_8d7u3CnHUko)",
        }}
      >
        <div className="flex justify-center w-full my-5">
          <CardDetail>
            <div className="w-full h-14 flex items-center">
              <h1 className="text-lg capitalize font-bold text-black ">{`wild ${name_pokemon} appear`}</h1>
            </div>
          </CardDetail>
        </div>
        <div className="w-full h-1/4 md:h-1/3 flex justify-center my-10">
          <img src={`${img.front_default}`} alt="" />
        </div>
        <div className="grid auto-rows-max grid-cols-2 place-self-end">
          <CardDetail>
            <h1 className="text-md md:text-lg font-bold text-black ">
              What will <br /> You do?
            </h1>
          </CardDetail>
          <CardDetail>
            <div className="grid auto-rows-max grid-cols-2 place-items-center">
              <div className="my-4" onClick={() => catchPoke(randomNumber())}>
                <p className="uppercase text-black text-xs md:text-md lg:text-lg font-bold">
                  catch!
                </p>
              </div>
              <div className="my-4" onClick={() => navigate(-1)}>
                <p className="uppercase text-black text-xs md:text-md lg:text-lg font-bold">
                  run
                </p>
              </div>
            </div>
          </CardDetail>
        </div>
      </div>
    </Layout>
  );
};

export default CatchPoke;

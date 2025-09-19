import React, { useState } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";
import TrainerCard from "./TrainerCard";

function App() {
  // 포켓몬 도감 데이터
  // 포켓몬 도감 데이터
  const [pokemonList] = useState([
    {
      id: 1,
      krName: "샹델라",
      jpName: "シャンデラ",
      enName: "Chandelure",
      type: "고스트/불꽃",
      No: "609",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png"
    },
    {
      id: 2,
      krName: "제라오라",
      jpName: "ゼラオラ",
      enName: "Zeraora",
      type: "전기",
      No: "807",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png"
    },
    {
      id: 3,
      krName: "두랄루돈",
      jpName: "ジュラルドン",
      enName: "Duraludon",
      type: "강철/드래곤",
      No: "884",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png"
    },
    {
      id: 4,
      krName: "기라티나",
      jpName: "ギラティナ",
      enName: "Giratina",
      type: "고스트/드래곤",
      No: "487",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png"
    },
    {
      id: 5,
      krName: "펄기아",
      jpName: "パルキア",
      enName: "Palkia",
      type: "물/드래곤",
      No: "484",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
    },
    {
      id: 6,
      krName: "다태우지네",
      jpName: "マルヤクデ",
      enName: "Centiskorch",
      type: "벌레/불꽃",
      No: "851",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png"
    },
    {
      id: 7,
      krName: "다크라이",
      jpName: "ダークライ",
      enName: "Darkrai",
      type: "악",
      No: "491",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png"
    },
    {
      id: 8,
      krName: "루카리오",
      jpName: "ルカリオ",
      enName: "Lucario",
      type: "격투/강철",
      No: "448",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
    }
  ]);


  // 트레이너 목록
  const [trainerList] = useState([
    {
      id: "t1",
      krName: "금랑",
      enName: "Raihan",
      jpName: "キバナ",
      role: "드래곤타입 관장",
      mainPokemonName: "두랄루돈",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
      profileImg: "https://archives.bulbagarden.net/media/upload/2/2d/Spr_SW_Raihan.png"
    },
    {
      id: "t2",
      krName: "순무",
      enName: "Kabu",
      jpName: "カブ",
      role: "불꽃타입 관장",
      mainPokemonName: "다태우지네",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
      profileImg: "https://archives.bulbagarden.net/media/upload/f/f5/SWSH_Kabu.png"
    },
    {
      id: "t3",
      krName: "상행",
      enName: "Ingo",
      jpName: "ノボリ",
      role: "서브웨이마스터 / 캡틴",
      mainPokemonName: "샹델라",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
      profileImg: "https://archives.bulbagarden.net/media/upload/1/1e/Spr_B2W2_Subway_Boss_Ingo.png"
    },
    {
      id: "t4",
      krName: "하행",
      enName: "Emmet",
      jpName: "クダリ",
      role: "서브웨이마스터 / 캡틴",
      mainPokemonName: "몰드류",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png", // 예시: 몰드류(Excadrill)
      profileImg: "https://archives.bulbagarden.net/media/upload/4/45/Spr_B2W2_Subway_Boss_Emmet.png"
    },
    {
      id: "t5",
      krName: "난천",
      enName: "Cynthia",
      jpName: "シロナ",
      role: "신오 챔피언",
      mainPokemonName: "한카리아스",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
      profileImg: "https://static.wikia.nocookie.net/pokemon/images/f/fd/BDSP_Cynthia.png"
    },
    {
      id: "t6",
      krName: "구즈마",
      enName: "Guzma",
      jpName: "グズマ",
      role: "스컬단 보스",
      mainPokemonName: "갑주무사",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
      profileImg: "https://static.wikia.nocookie.net/pokemon/images/f/f9/SM_Guzma.png"
    },
    {
      id: "t7",
      krName: "나누",
      enName: "Nanu",
      jpName: "クチナシ",
      role: "알로라 챔피언 / 악타입 캡틴",
      mainPokemonName: "페르시온",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
      profileImg: "https://static.wikia.nocookie.net/pokemon/images/8/8a/SM_Nanu.png"
    },
    {
      id: "t8",
      krName: "찬석",
      enName: "Adaman",
      jpName: "セキ",
      role: "금강단 단장",
      mainPokemonName: "리피아",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
      profileImg: "https://static.wikia.nocookie.net/pokemon/images/e/e0/B2W2_Colress.png"
    }
  ]);

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>📖 포켓몬 & 트레이너 도감</h1>
        <p className="subtitle">최애 포켓몬& 최애 등장인물 도감</p>
      </header>

      <section className="section">
        <h2>포켓몬 도감</h2>
        <div className="card-container">
          {pokemonList.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>트레이너 목록</h2>
        <div className="trainer-container">
          {trainerList.map((t) => (
            <TrainerCard key={t.id} trainer={t} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
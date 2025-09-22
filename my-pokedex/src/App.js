import React, { useState } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";
import TrainerCard from "./TrainerCard";

// 🔑 src/img 안에 있는 이미지 불러오기
import RaihanImg from "./img/Raihan.png";
import KabuImg from "./img/Kabu.png";
import IngoImg from "./img/Ingo.png";
import EmmetImg from "./img/Emmet.png";   // ⚠️ img 폴더에 Emmet.png 추가 필요!
import CynthiaImg from "./img/Cynthia.png";
import GuzmaImg from "./img/Guzma.png";
import NanuImg from "./img/Nanu.png";
import AdamanImg from "./img/Adaman.png";

function App() {
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

  // 트레이너 목록 (src/img에서 import한 이미지 사용)
  const [trainerList] = useState([
    {
      id: "t1",
      krName: "금랑",
      enName: "Raihan",
      jpName: "キバナ",
      role: "드래곤타입 관장",
      mainPokemonName: "두랄루돈",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
      profileImg: RaihanImg
    },
    {
      id: "t2",
      krName: "순무",
      enName: "Kabu",
      jpName: "カブ",
      role: "불꽃타입 관장",
      mainPokemonName: "다태우지네",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
      profileImg: KabuImg
    },
    {
      id: "t3",
      krName: "상행",
      enName: "Ingo",
      jpName: "ノボリ",
      role: "서브웨이마스터 / 캡틴",
      mainPokemonName: "샹델라",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
      profileImg: IngoImg
    },
    {
      id: "t4",
      krName: "하행",
      enName: "Emmet",
      jpName: "クダリ",
      role: "서브웨이마스터 / 캡틴",
      mainPokemonName: "몰드류",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
      profileImg: EmmetImg
    },
    {
      id: "t5",
      krName: "난천",
      enName: "Cynthia",
      jpName: "シロナ",
      role: "신오 챔피언",
      mainPokemonName: "한카리아스",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
      profileImg: CynthiaImg
    },
    {
      id: "t6",
      krName: "구즈마",
      enName: "Guzma",
      jpName: "グズマ",
      role: "스컬단 보스",
      mainPokemonName: "갑주무사",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
      profileImg: GuzmaImg
    },
    {
      id: "t7",
      krName: "나누",
      enName: "Nanu",
      jpName: "クチナシ",
      role: "알로라 캡틴 / 악타입 전문가",
      mainPokemonName: "페르시온",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
      profileImg: NanuImg
    },
    {
      id: "t8",
      krName: "찬석",
      enName: "Adaman",
      jpName: "セキ",
      role: "금강단 단장",
      mainPokemonName: "리피아",
      mainPokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
      profileImg: AdamanImg
    }
  ]);

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>📖 포켓몬 & 트레이너 도감</h1>
        <p className="subtitle">최애 포켓몬 & 최애 등장인물 도감</p>
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

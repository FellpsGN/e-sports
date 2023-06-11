import "./styles/main.css";
import logoImg from "./assets/Logo.svg";
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
    <div className="max-w-[1920px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-gradient-to-r from-violet-500 to-green-600 bg-clip-text"> duo </span> está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-144x192.jpg"
            alt="Capa Call of Duty: MW"
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Call of Duty: Modern Warfare </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/499856_IGDB-144x192.jpg"
            alt="Capa Ghost of Tsushima"
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Ghost of Tsushima </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-144x192.jpg"
            alt="Capa Counter Strike: Global Offensive"
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Counter Strike: Global Offensive </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

      </div>

      <div className="pt-1 bg-gradient-to-r from-violet-500 to-green-600 self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!!</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"> 
            <MagnifyingGlassPlus />
            Publicar anúncio 
            </button>
        </div>

      </div>
    </div>
  );
}

export default App;

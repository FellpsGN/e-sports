import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto flex flex-col items-center m-20">
        <img src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black mt-20">
          Seu
          <span className="text-transparent bg-gradient-to-r from-violet-500 to-green-600 bg-clip-text">
            duo
          </span>
          está aqui!
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-144x192.jpg"
            alt="Capa Call of Duty: MW"
          />
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-144x192.jpg"
            alt="Capa Call of Duty: MW"
          />
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-144x192.jpg"
            alt="Capa Call of Duty: MW"
          />
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-144x192.jpg"
            alt="Capa Call of Duty: MW"
          />
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-144x192.jpg"
            alt="Capa Call of Duty: MW"
          />
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-144x192.jpg"
            alt="Capa Call of Duty: MW"
          />
        </div>
      </div>
    </>
  );
}

export default App;

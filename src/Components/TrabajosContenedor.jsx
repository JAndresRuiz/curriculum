import React from "react";
import "../Styles/TrabajosContenedor.css";
import { ReactComponent as Calculadora } from "../IMG/calculadora.svg";
import { ReactComponent as Clima } from "../IMG/nube-sol.svg";
import { ReactComponent as Consultorio } from "../IMG/base-de-datos.svg";

const TrabajosContenedor = () => {
  return (
    <div className="contenedor">
      <h1>Aplicaciones web</h1>
      <div className="lineaOrizontal"></div>
      <div className="trabajos">
        <div className="disenosPgUno">
          <div className="disenos">
            <a
              className="calculadora"
              href="https://jandresruiz.github.io/JAndresRuiz.calculadora.io/"
              target="blank"
            >
              <Calculadora />
              <p>Calculadora <span>Click aquí</span></p>
            </a>
          </div>
          <div className="disenos">
            <a
              className="clima"
              href="https://jandresruiz.github.io/JAndresRuiz.WeatherAPI.io/"
              target="blank"
            >
              <Clima />
              <p>Clima <span>Click aquí</span></p>
            </a>
          </div>
          <div className="disenos">
            <a
              className="consultorio"
              href="https://stately-halva-909300.netlify.app/"
              target="blank"
            >
              <Consultorio />
              <p>Consultorio Vet. <span>Click aquí</span></p>
            </a>
          </div>
        </div>
        <div className="disenoPgDos">
        </div>
      </div>
    </div>
  );
};

export { TrabajosContenedor };

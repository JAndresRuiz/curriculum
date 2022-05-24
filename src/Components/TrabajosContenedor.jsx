import React from "react";
import "../Styles/TrabajosContenedor.css";
import { ReactComponent as Calculadora } from "../IMG/calculadora.svg";
import { ReactComponent as Clima } from "../IMG/nube-sol.svg";
import { ReactComponent as Consultorio } from "../IMG/base-de-datos.svg";
import { ReactComponent as Criptomoneda } from "../IMG/criptomoneda.svg";
import { ReactComponent as Tasks } from "../IMG/comprobacion-de-lista.svg";

const TrabajosContenedor = () => {
  return (
    <div className="contenedor">
      <h1>Aplicaciones web</h1>
      <div className="lineaOrizontal"></div>
      <div className="trabajos">
        <div className="disenosPgUno">
          {/*Diseño 1*/}
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
          {/*Diseño 2*/}
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
          {/*Diseño 3*/}
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
          {/*Diseño 4*/}
          <div className="disenos">
            <a
              className="cotizadorCripto"
              href="https://ubiquitous-khapse-fc980b.netlify.app"
              target="blank"
            >
              <Criptomoneda />
              <p>Cotizador Criptomoneda <span>Click aquí</span></p>
            </a>
          </div>
          {/*Diseño 5*/}
          <div className="disenos">
            <a
              className="planificadorGastos"
              href="https://stalwart-gelato-c50414.netlify.app"
              target="blank"
            >
              <Criptomoneda />
              <p>Planificador de Gastos <span>Click aquí</span></p>
            </a>
          </div>
          {/*Diseño 6*/}
          <div className="disenos">
            <a
              className="todo"
              href="https://amazing-marzipan-05bcdf.netlify.app"
              target="blank"
            >
              <Tasks />
              <p>Gestiona tus tareas diarias <span>Click aquí</span></p>
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

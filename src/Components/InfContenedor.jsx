import React from "react";
import "../Styles/infContenedor.css";
import desarrollo from "../IMG/desarrollo.png";
import control from "../IMG/control.png";

const InfContenedor = ({ boton }) => {
  return (
    <>
      <div className="contenedor">
        <h1>Sobre mí</h1>
        <div className="lineaOrizontal"></div>
        <div className="contenedorSobreMi">
          <div className="personalYdatos">
            <div className="informacionPersonal">
              <h3 className="titulo">
                Desarrollador web de Medellín, Colombia.
              </h3>
              <p>
                Soy apasionado por las tecnologías y el desarrollo de
                aplicaciones Web y actualmente le he encontrado un especial
                gusto a las librerias como a React. Me encantaria hablarte sobre
                mis conocimientos.
              </p>
            </div>
            <div className="lineaOrizontal screenOut"></div>
            <div className="datosPersonales">
              <ul>
                <li>
                  <span>Edad:</span>
                  <p>28</p>
                </li>
                <div className="linea"></div>
                <div className="lineaLiDos"></div>
                <li>
                  <span>Residencia:</span>
                  <p>Colombia</p>
                </li>
                <div className="linea"></div>
                <div className="lineaLiDos"></div>
                <li>
                  <span>Empleo:</span>
                  <p>Disponible</p>
                </li>
                <div className="linea"></div>
                <div className="lineaLiDos"></div>
                <li>
                  <span>Dirección:</span>
                  <p>Medellín, Antioquía</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lineaOrizontal"></div>
          <div className="habil-gust">
            <div className="habilidades">
              <img src={desarrollo} alt="desarrollo" />
              <p>
                Sitio web moderno y listo para dispositivos móviles desarrollados con las mejores practicas.
              </p>
            </div>
            <div className="lineaOrizontal screenOut"></div>
            <div className="gustos">
              <img src={control} alt="control" />
              <p>
                Me encantan los videojuegos, pasar tiempo con mi familia,
                amigos, trotar con mi perro y visitar lugares donde pueda
                probar excelentes comidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { InfContenedor };

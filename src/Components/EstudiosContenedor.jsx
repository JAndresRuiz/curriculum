import React from "react";
import "../Styles/laboralContenedor.css";
import html from "../IMG/html.png";
import css from "../IMG/css.png";
import JS from "../IMG/js.png";
import reactIMG from "../IMG/React.png"; 

const EstudiosContenedor = ({ boton }) => {
  return (
    <div className="contenedor">
      <h1>Estudios</h1>
      <div className="lineaOrizontal"></div>
      <div className="contenLabYEst">
        <div className="estudios">
          <h2>Estudios</h2>
          <div className="lineaOrizontal"></div>
          <div className="etudioUno">
            <p>2014 - 2015</p>
            <h2>Técnico en sistemas</h2>
            <p>Sena</p>
            <p>
              Al culiminar con mis estudios esta capacitado para dar
              mantenimientos a computadores de escritorio, instalar aplicaciones
              y manejo de cabeado y redes.
            </p>
          </div>
          <div className="lineaOrizontal"></div>
          <div className="etudioDos">
            <p>2021 - Actual</p>
            <h2>Desarrollador FrontEnd</h2>
            <p>Platzi</p>
            <p>
              Actualmente estoy estudiando desarrollo web en Platzi, donde he
              adquiridos varios conocimientos de programación en HTML, CSS, JavaScript y React.
            </p>
            <div className="aplicacionesManejadas">
              <img src={html} alt="logo estudio" />
              <img src={css} alt="logo estudio" />
              <img src={JS} alt="logo estudio" />
              <img src={reactIMG} alt="logo estudio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EstudiosContenedor };

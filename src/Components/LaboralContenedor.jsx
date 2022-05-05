import React from "react";
import "../Styles/laboralContenedor.css";

const LaboralContenedor = ({ boton }) => {
  return (
    <div className="contenedor">
      <h1>Experiencia laboral y estudios</h1>
      <div className="lineaOrizontal"></div>
      <div className="contenLabYEst">
        <div className="expLaboralContenedor">
          <h2>Experiencia</h2>
          <div className="lineaOrizontal"></div>
          <div className="exp">
            <p>3/2019 - 12/2021</p>
            <h2>Analista en tiempo real</h2>
            <p>Onelink Colombia</p>
            <p>
              Generar reportes en tiempo real con graficos y explicaciones
              correspondientes al nivel de servicio, atención, entre otros
              reportes de un Call Center para la linea Puntos Colombia.
            </p>
          </div>
          <div className="lineaOrizontal"></div>
          <div className="exp">
            <p>2017 - 2018</p>
            <h2>Servicio al cliente</h2>
            <p>Onelink Colombia</p>
            <p>
              Prestador de servicios para la linea de Avianca en el area de
              eventos operacionales, para generar reubicaciones de vuelos.
            </p>
          </div>
          <div className="lineaOrizontal"></div>
          <div className="exp">
            <p>4/2015 - 10/2015</p>
            <h2>Técnico en mantenimiento</h2>
            <p>Servicios postales especializados</p>
            <p>
              Me desempeñe en el cargo de mantenimiento de comutadores y
              logistica por parte de los equipos de computo e impresoras de las
              cedes en todo Colombia.
            </p>
          </div>
        </div>
        <div className="lineaOrizontal screenOut"></div>
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
              adquiridos varios conocimientos de programación y un gran cariño
              por el desarrollo web y las tecnologías. Este estudio aun esta en
              curso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LaboralContenedor };

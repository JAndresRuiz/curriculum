import React from "react";
import "../Styles/laboralContenedor.css";

const LaboralContenedor = ({ boton }) => {
  return (
    <div className="contenedor">
      <h1>Experiencia laboral</h1>
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
      </div>
    </div>
  );
};

export { LaboralContenedor };

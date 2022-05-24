import "../Styles/App.css";
import { useState } from "react";
import { InfContenedor } from "./InfContenedor";
import { LaboralContenedor } from "./LaboralContenedor";
import { EstudiosContenedor } from "./EstudiosContenedor";
import { TrabajosContenedor } from "./TrabajosContenedor";
import { ContactoContenedor } from "./ContactoContenedor";

import foto from "../IMG/Yo.jpg";
import git from "../IMG/logoGit.png";
import linkedin from "../IMG/logoLinkedin.png";
import { ReactComponent as Icon } from "../IMG/icono.svg";
import { ReactComponent as ExpLaboral } from "../IMG/sobremi.svg";
import { ReactComponent as Trabajos } from "../IMG/trabajos.svg";
import { ReactComponent as Contacto } from "../IMG/contacto.svg";
import { ReactComponent as Estudios } from "../IMG/libro-alt.svg";

const App = () => {
  const [boton, setBoton] = useState(1);

  const cambiarVista = (vista) => {
    setBoton(vista);
  };

  const renderPaginas = () => {
    switch (boton) {
      case 1:
        return <InfContenedor />;
      case 2:
        return <LaboralContenedor />;
      case 3:
        return <EstudiosContenedor />;
      case 4:
        return <TrabajosContenedor />;
      default:
        return <ContactoContenedor />;
    }
  };

  return (
    <>
      <div className="contenedorPrincipal">
        <header>
          <div className="contendorNavbar">
            <button type="buton">
              <button className="icono" onClick={() => cambiarVista(1)}>
                <Icon />
              </button>
              Sobre mí
            </button>
            <button type="buton">
              <button className="icono" onClick={() => cambiarVista(2)}>
                <ExpLaboral />
              </button>
              laboral
            </button>
            <button type="buton">
              <button className="icono" onClick={() => cambiarVista(3)}>
                <Estudios />
              </button>
              Estudios
            </button>
            <button type="buton">
              <button className="icono" onClick={() => cambiarVista(4)}>
                <Trabajos />
              </button>
              Apps
            </button>
            <button type="buton">
              <button className="icono" onClick={() => cambiarVista(4)}>
                <Contacto />
              </button>
              Contacto
            </button>
          </div>
        </header>
        <div className="contenedorIzquierdoFondo">
          <div className="contenedorIzquierdo">
            <div className="contenedorIMG">
              <img src={foto} alt="foto" />
            </div>
            <div className="superDerecha"></div>
            <div className="superIzquierda"></div>
            <div className="nombre">
              <h3>Jaime Andrés Ríos Ruiz</h3>
            </div>
            <div className="contendorEnlaces">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/andr%C3%A9s-r%C3%ADos-ruiz-10747a216/"
                target="blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                className="github"
                href="https://github.com/JAndresRuiz"
                target="blank"
              >
                <img src={git} alt="git" />
              </a>
            </div>
            {/*<div className="contenedorInf">
              <div className="lineaDerecha"></div>
              <input className="buttonCv" type="button" value="Descargar CV" />
              <div className="lineaVertical"></div>
              <div className="lineaIzquierda"></div>
              <input className="buttonCo" type="button" value="Contactame" />
              </div>*/}
          </div>
        </div>
        <div className="contenedorDerecho">{renderPaginas()}</div>
      </div>
    </>
  );
};

export { App };


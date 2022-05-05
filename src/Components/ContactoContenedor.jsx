import React from 'react'
import '../Styles/ContactoContenedor.css';

const ContactoContenedor = () => {
  return (
    <div className='contenedor'>
      <h1>Información de contacto</h1>
      <div className="lineaOrizontal"></div>
      <div className='personalData'>
        <ul>
          <li><span>Dirección: </span>Medellín (Ant), Colombia</li>
          <div className="linea"></div>
          <li><span>Correo: </span>andres.ruiz17@hotmail.com</li>
          <div className="linea"></div>
          <li><span>Celular: </span>3002061118</li>
          <div className="linea"></div>
          <li><span>Estado: </span>Disponible para trabajar</li>
        </ul>
      </div>
    </div>
  )
}

export { ContactoContenedor }
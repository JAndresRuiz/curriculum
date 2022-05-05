import React from 'react'
import '../Styles/ContactoContenedor.css';

const ContactoContenedor = () => {
  return (
    <div className='contenedor'>
      <h1>Información de contacto</h1>
      <div className="lineaOrizontal"></div>
      <div className='personalData'>
        <ul>
          <li><span>Link a linkeding: </span><a href='www.linkedin.com/in/jandresrr'>www.linkedin.com/in/jandresrr</a></li>
          <div className="linea"></div>
          <li><span>Link a Github: </span><a href='https://github.com/JAndresRuiz'>https://github.com/JAndresRuiz</a></li>
        </ul>
      </div>
    </div>
  )
}

export { ContactoContenedor }
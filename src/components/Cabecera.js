import React from "react";

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({ cantidad }) {
  return (
    <header>
      {/* maquetar Cabecera aquí */}
      <h1>Carrrito de compras</h1>
      <p>
        Cantidad de productos <span>{cantidad}</span>
      </p>
    </header>
  );
}

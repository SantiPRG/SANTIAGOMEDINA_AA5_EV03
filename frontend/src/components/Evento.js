import React from 'react';

function Evento({ evento }) {
    return (
        <div className="evento">
            <h2>{evento.nombre}</h2>
            <p>Fecha: {evento.fecha}</p>
            <p>Lugar: {evento.lugar}</p>
        </div>
    );
}

export default Evento;

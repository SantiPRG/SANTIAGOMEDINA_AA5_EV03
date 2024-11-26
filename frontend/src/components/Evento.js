import React, { useEffect, useState } from 'react';

const Evento = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetch('/api/eventos')
            .then(response => response.json())
            .then(data => setEventos(data));
    }, []);

    return (
        <div>
            <h1>Eventos Deportivos</h1>
            <ul>
                {eventos.map(evento => (
                    <li key={evento.id}>{evento.nombre} - {evento.fecha} en {evento.lugar}</li>
                ))}
            </ul>
        </div>
    );
};

export default Evento;

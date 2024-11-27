import React, { useEffect, useState } from 'react';
import Evento from './Evento';

function EventoList() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetch('/api/eventos')
            .then(response => response.json())
            .then(data => setEventos(data));
    }, []);

    return (
        <div className="evento-list">
            <h1>Lista de Eventos Deportivos</h1>
            {eventos.map(evento => (
                <Evento key={evento.id} evento={evento} />
            ))}
        </div>
    );
}

export default EventoList;

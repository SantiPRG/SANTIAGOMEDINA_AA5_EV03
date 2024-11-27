import React, { useState } from 'react';

function FormularioEvento({ onNuevoEvento }) {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [lugar, setLugar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoEvento = { nombre, fecha, lugar };
        fetch('/api/eventos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoEvento),
        })
            .then(response => response.json())
            .then(data => {
                onNuevoEvento(data);
                setNombre('');
                setFecha('');
                setLugar('');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <br />
            <label>
                Fecha:
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </label>
            <br />
            <label>
                Lugar:
                <input type="text" value={lugar} onChange={(e) => setLugar(e.target.value)} />
            </label>
            <br />
            <button type="submit">Añadir Evento</button>
        </form>
    );
}

export default FormularioEvento;

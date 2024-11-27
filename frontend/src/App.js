import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EventoList from './components/EventoList';
import FormularioEvento from './components/FormularioEvento';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <FormularioEvento />
                <EventoList />
            </main>
            <Footer />
        </div>
    );
}

export default App;

import React from 'react';
import ItemListContainer from './ItemListContainer';

const Home = () => {
    return (<div>
        <h1 style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Home</h1>
        <ItemListContainer greeting="¡Hola, mundo!" />
    </div>)
}


export default Home;
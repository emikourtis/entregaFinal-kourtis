import React from 'react';
import ItemListContainer from './ItemListContainer';

const Home = ( {greeting} ) => {
    return (<div>
        <h1>home</h1>
        <ItemListContainer greeting="¡Hola, mundo!" />
    </div>)
}


export default Home;
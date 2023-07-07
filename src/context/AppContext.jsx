import { createContext, useState } from "react";

export const AppContext = createContext();

const { Provider } = AppContext;

const ContextProvider = ( {children} ) =>{
    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad };
        const estaEnElCarrito = carrito.find((prod) => prod.id === itemAgregado.id)
        if (estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad;
    
        } else {
          setCarrito([...carrito, itemAgregado]);
    
        }
    }
console.log(carrito)

return (
    <Provider value={{ carrito, agregarAlCarrito, nroCarrito: carrito.length }}>
        { children }
    </Provider>
)


}
export default ContextProvider;
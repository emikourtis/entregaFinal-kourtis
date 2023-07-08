import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const { Provider } = AppContext;

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];


const ContextProvider = ( {children} ) =>{
    const [carrito, setCarrito] = useState(carritoInicial);
    const agregarAlCarrito = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad };
        const estaEnElCarrito = carrito.find((prod) => prod.id === itemAgregado.id)
        if (estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad;
    
        } else {
          setCarrito([...carrito, itemAgregado]);
    
        }
        
    }

    const totalCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    useEffect(()=>{
      localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    const vaciarCarrito = () =>{
      setCarrito([])
    }

return (
    <Provider value={{ carrito, agregarAlCarrito, nroCarrito: carrito.length, totalCarrito, vaciarCarrito }}>
        { children }
    </Provider>
)


}
export default ContextProvider;
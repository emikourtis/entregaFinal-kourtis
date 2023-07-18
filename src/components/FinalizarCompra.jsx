import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebase/configuracion';
import Swal from 'sweetalert2'
import './finalizarCompra.css'


const FinalizarCompra = () => {
    const { vaciarCarrito, carrito, totalCarrito } = useContext(AppContext)
    const navigate = useNavigate()
    const [pedidoId, setPedidoId] = useState("")
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {

        const dataPedido = {
            cliente: data,
            Pedido: carrito,
            total: totalCarrito()
        }
        console.log(dataPedido)
        handleFinalizar()
        const pedidosRef = collection(database, "pedidos")
        addDoc(pedidosRef, dataPedido)
            .then((doc) => {
                setPedidoId(doc.id)
            })
    }
    const handleFinalizar = () => {
        vaciarCarrito();
        Swal.fire(
            'GRACIAS POR TU COMPRA!',

            'success'
        )
        navigate('/mensajeGracias')
        console.log(pedidoId)
    }


    return (
        <div style={{ margin: "100px", color: 'white' }}>
            <h1>Finalizar Compra</h1>
            <br />
            <h3 style={{ marginBottom: "25px" }}>Completa tus datos de contacto</h3>
            <form style={{ display: "flex", flexDirection: "column", width: "35%" }} onSubmit={handleSubmit(enviar)}>
                <input className='inputs' style={{ marginBottom: "20px" }} type='text' placeholder='Nombre y Apellido' {...register("nombre y apellido")} />
                <input className='inputs' style={{ marginBottom: "20px" }} type='email' placeholder='Email...' {...register("email")} />
                <input className='inputs' style={{ marginBottom: "20px" }} type='phone' placeholder='Telefono..(11) xxx xxx xx' {...register("telefono")} />

                <button className='enviar btn btn-primary btn-sm' type='submit'>Finalizar</button>
            </form>
        </div>
    )
}

export default FinalizarCompra
import React, { useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import { AppContext } from '../../context/AppContext';



const MensajeGracias = () => {
  const { pedidoId } = useContext(AppContext)
  useEffect(() => {
    Swal.fire({
      title: 'GRACIAS POR TU COMPRA!',
      text: `El ID de tu pedido es: ${pedidoId}`,
      icon: 'success',
    });
  }, [pedidoId]);
  return (
    <div style={{ margin: '100px', display: 'block', color: 'white' }}>
      <h3>En 24 hs nos contactaremos para realizar el envio o combinar la entrega</h3>
      <p>Nuestro telefono de contacto es: 221-544-4323</p>
      <p>Nuestro email es: tecnostore@gmail.com</p>
    </div>
  )
}

export default MensajeGracias

import { useEffect, useState } from "react"
import { pedirItem } from "./pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirItem(Number(id))
            .then((resp) => {
                setItem(resp);
            })
    }, [id])
    return(
        <>
        {item && <ItemDetail item={item} />}
        </>
    )
}


export default ItemDetailContainer;
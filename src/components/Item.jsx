import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardModal = ({ producto }) => {
  const cardRef = React.useRef(null);
  const [cardHeight, setCardHeight] = React.useState(0);

  React.useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.offsetHeight;
      setCardHeight(height);
    }
  }, []);

  return (
    <div>
      <Card ref={cardRef} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{
            height: cardHeight,
            maxHeight: '100%',
            objectFit: 'contain',
          }}
          image={producto.image}
          title={producto.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $ {producto.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.categoria}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">Agregar al carrito</Button>
        </CardActions>
        <CardActions>
          <Button size="small" variant="contained" to={`/item/${producto.id}`} >Detalle del producto</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardModal;


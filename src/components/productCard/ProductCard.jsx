import "./ProductCard.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Card className="card-item" sx={{ width: 345 }}>
      <CardMedia
        component={"img"}
        sx={{ height: 200, width: "100%" }}
        image={img}
        className="img-game"
        title="game image"
      />
      <CardContent className="card-content">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: '"Exo 2", sans-serif' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: '"Exo 2", sans-serif' }}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#622f0b" }}
          >
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

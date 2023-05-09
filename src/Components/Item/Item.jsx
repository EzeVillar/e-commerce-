import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Item.css"

const Item = ({ element }) => {
  return (
    <div className="cartas">
      <Card sx={{ width: 700, height: 700, border: "1px solid black" }}>
        <CardMedia sx={{ height: 275 }} image={element.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${element.id}`}>
            <Button size="small" variant="contained">
              Ver más
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;

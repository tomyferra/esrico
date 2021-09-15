import { useState } from "react";
import AddOpinionModal from "./AddOpinionModal";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

function CardProduct(props) {
  const ID = props.id;
  const Nombre = props.nombre;
  var Rating = props.rating;
  const Precio = props.precio;
  const Empresa = props.empresa;
  const Cantidad_Puntuaciones = props.puntuaciones;

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getRoundedValue(Rating) {
    var rating_final = 0;
    const entero = Rating - Math.floor(Rating);
    if (entero < 0.25) {
      rating_final = Math.floor(Rating);
    } else if (entero >= 0.25 && entero < 0.75) {
      rating_final = Math.floor(Rating) + 0.5;
    } else {
      rating_final = Math.floor(Rating) + 1;
    }
    return rating_final;
  }
  Rating = getRoundedValue(Rating);

  return (
    <div key={ID} className="card-container">
      <div className="card card-height p-4 mt-4">
        <div className="product-img d-flex flex-row justify-content-center align-items-center h-200">
          <img
            className="contain-fit"
            src={`images/${ID}.png`}
            alt={`images/product-${ID}.png`}
            width="300"
            height="200"
          ></img>
        </div>
        <div className="product-info">
          <h3 className="w-200">{Nombre}</h3>
          <p className="w-200">{Empresa}</p>
        </div>
      </div>
      <div className="productBox ">
        <p>${Precio}</p>
        <span className="puntuaciones">
          <b className="rating-value">
            <i class="fa fa-star fa-1x"></i>
            &nbsp;&nbsp;{Rating}
          </b>
          <div>
            <Button
              onClick={() => setShow(true)}
              variant="contained"
              color="primary"
              disableElevation="true"
            >
              Opinar
            </Button>

            <AddOpinionModal
              onClose={() => setShow(false)}
              show={show}
              ID={ID}
              Nombre={Nombre}
              Rating={Rating}
              Precio={Precio}
              Cantidad_Puntuaciones={Cantidad_Puntuaciones}
            />
          </div>
        </span>
      </div>
    </div>
  );
}
export default CardProduct;

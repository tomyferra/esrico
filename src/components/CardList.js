import CardProduct from "./CardProduct";
import { data } from "../data";
import { useEffect, useState } from "react";
import ReactPlaceHolder from "react-placeholder";

function CardList() {
  const [error, setError] = useState("");
  const [speakerData, setSpeakerData] = useState([]);
  const [hasErrored, setHasErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(1000);

        console.log("time");
        setIsLoading(false);
        setSpeakerData(data);
      } catch (e) {
        setIsLoading(false);
        setHasErrored(true);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  if (hasErrored === true) {
    return (
      <div className="text-danger">
        <i class="fa fa-exclamation-triangle fa-3x"></i>
        ERROR: <b>Loading products failed {error}</b>
      </div>
    );
  }

  return (
    <div className="container products-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="productlist-placeholder"
        ready={isLoading === false}
      >
        <div className="product-row">
          {speakerData.map(function (product) {
            const {
              ID,
              Nombre,
              Empresa,
              Rating,
              Cantidad_Puntuaciones,
              Precio,
            } = product;

            return (
              <CardProduct
                id={ID}
                nombre={Nombre}
                empresa={Empresa}
                rating={Rating}
                puntuaciones={Cantidad_Puntuaciones}
                precio={Precio}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default CardList;

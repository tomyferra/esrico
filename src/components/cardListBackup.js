//import CardProduct from "./CardProduct";
import { data } from "../data";

function CardList() {
  return (
    <div className="container products-list">
      <div className="product-row">
        {data.map(function (product) {
          const { ID, Nombre, Rating, Cantidad_Puntuaciones, Precio } = product;

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
                </div>
              </div>
              <div className="productBox ">
                <p>Precio: ${Precio}</p>
                <span className="puntuaciones">
                  <strong>Rating: {Math.round(Rating * 100) / 100}/5</strong>
                  <strong>Puntuaciones: {Cantidad_Puntuaciones}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardList;

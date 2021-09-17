import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";

import axios from "axios";

function AddProductModal(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [productName, setproductName] = React.useState("");
  const [companyName, setcompanyName] = React.useState("");
  const [priceValue, setpriceValue] = React.useState(0);
  const [ratingValue, setratingValue] = React.useState(0);

  if (!props.show) {
    return null;
  }

  function postData(event) {
    console.log("Data posted");

    const productData = {
      productname: productName,
      company: companyName,
      price: priceValue,
      rating: ratingValue,
    };

    console.log(productData);

    axios
      .post("http://localhost:5000/products/add", productData)
      .then((res) => console.log(res.data))
      .then((res) => alert(`Producto agregado correctamente`))
      .catch((error) => console.log(error))
      .catch((error) => alert(`Error al cargar el producto`));
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <form onSubmit={postData}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">Nuevo Producto</div>
          <div className="modal-body">
            <label>Nombre: </label>
            <input
              type="text"
              placeholder="Producto..."
              className="add-product-input"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
          </div>
          <div className="modal-body">
            <label>Empresa: </label>
            <input
              type="text"
              placeholder="Empresa..."
              className="add-product-input"
              value={companyName}
              onChange={(e) => setcompanyName(e.target.value)}
            />
          </div>
          <div className="modal-body">
            <label>Precio: </label>
            <input
              type="text"
              placeholder="$ Precio..."
              className="add-product-input"
              value={priceValue}
              onChange={(e) => setpriceValue(e.target.value)}
            />
          </div>
          <div className="modal-body">
            <label>Rating (0-5): </label>
            <input
              type="text"
              placeholder="Puntaje"
              className="add-product-input"
              value={ratingValue}
              onChange={(e) => setratingValue(e.target.value)}
            />
          </div>

          <div className="modal-body">Agregá una foto!</div>

          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename" />
          </form>
          <div className="modal-footer">
            <button className="red-btn">Close</button>
            <button className="blue-btn-footer" type="submit">
              Save{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProductModal;

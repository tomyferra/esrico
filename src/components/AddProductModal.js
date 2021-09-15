import React from "react";
import Rating from "@material-ui/lab/Rating";

function AddProductModal(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">Nuevo Producto</div>
        <div className="modal-body">
          Producto:&nbsp;
          <input
            className="add-product-input"
            type="text"
            placeholder="Producto..."
          />
        </div>
        <div className="modal-body">
          Empresa:&nbsp;
          <input
            className="add-product-input"
            type="text"
            placeholder="Empresa..."
          />
        </div>
        <div className="modal-body">
          Precio:&nbsp;
          <input
            className="add-product-input"
            type="number"
            placeholder="$ Precio..."
          />
        </div>
        <div className="modal-body">
          Puntaje:&nbsp;
          <Rating
            name="hover-feedback"
            value="0"
            precision={0.5}
            size="medium"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
        </div>

        <div className="modal-body">Agregá una foto!</div>

        <form action="/action_page.php">
          <input type="file" id="myFile" name="filename" />
        </form>
        <div className="modal-footer">
          <button className="red-btn" onClick={props.onClose}>
            Close
          </button>
          <button className="blue-btn-footer" type="submit">
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;

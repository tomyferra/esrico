import React from "react";

function AddOpinionModal(props) {
  const [value, setValue] = React.useState(2);
  const Nombre = props.Nombre;
  var Puntaje = props.Rating;
  var Cantidad_Puntuaciones = props.Cantidad_Puntuaciones;
  if (!props.show) {
    return null;
  }

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

  Puntaje = getRoundedValue(Puntaje);
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <b>{Nombre}</b>
        </div>
        <div className="modal-body2">
          <h2>Puntaje:</h2>
          <div className="rating-radio-btn">
            <div className="rating-btn">
              <input type="radio" id="0" name="Rating" value="0" />
              <label for="0">0</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="0.5" name="Rating" value="0.5" />
              <label for="0.5">0.5</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="1" name="Rating" value="1" />
              <label for="1">1</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="1.5" name="Rating" value="1.5" />
              <label for="1.5">1.5</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="2" name="Rating" value="2" />
              <label for="2">2</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="2.5" name="Rating" value="2.5" />
              <label for="2.5">2.5</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="3" name="Rating" value="3" />
              <label for="3">3</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="3.5" name="Rating" value="3.5" />
              <label for="3.5">3.5</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="4" name="Rating" value="4" />
              <label for="4">4</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="4.5" name="Rating" value="4.5" />
              <label for="4.5">4.5</label>
            </div>
            <div className="rating-btn">
              <input type="radio" id="5" name="Rating" value="5" />
              <label for="5">5</label>
            </div>
          </div>

          <h4>
            {Puntaje} / 5 ({Cantidad_Puntuaciones})
          </h4>

          <h2>Precio:</h2>
          <input
            type="number"
            id="precio"
            name="precio"
            placeholder="$..."
          ></input>
          <br />
        </div>
        <div className="modal-footer">
          <button className="red-btn" onClick={props.onClose}>
            Close
          </button>
          <button
            className="blue-btn-footer"
            onClick={() => {
              setValue(value);
              console.log(value);
            }}
          >
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddOpinionModal;

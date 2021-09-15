import { useState } from "react";

import AddProductModal from "./AddProductModal";

function Toolbar(props) {
  const sortBy = props.sortby;
  const setSortBy = props.setsortby;
  const [show, setShow] = useState(false);
  function addProduct() {
    console.log("Add new product");
    /* Open a modal.. */
  }

  return (
    <section className="toolbar">
      <div className="toolrow  flex-column flex-lg-row justify-content-between">
        <div className="add-product">
          <button className="add_product_btn" onClick={() => setShow(true)}>
            Agregar un producto&nbsp;&nbsp;<i className="fa fa-plus"></i>
          </button>
          <AddProductModal onClose={() => setShow(false)} show={show} />
        </div>
        <div className="show-products">
          <div className="dropdown_sort">
            <label
              for="sort_by_label"
              style={{ color: "#f2f2f2", textDecoration: "none" }}
            >
              Ordenar por:&nbsp;&nbsp;
            </label>

            <select
              name="sort_by"
              id="sort_by_id"
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
              }}
            >
              <option value="mejor_puntaje">Mejor puntaje</option>
              <option value="peor_puntaje">Peor puntaje</option>
              <option value="mas_barato">Mas barato primero</option>
              <option value="mas_caro">Mas caro primero</option>
              <option value="nombre_ascendente">Nombre a-z</option>
              <option value="nombre_descendente">Nombre z-a</option>
            </select>
          </div>
        </div>
        <div className="search-bar">
          <div className="d-flex">
            <input
              className="search-product"
              type="text"
              placeholder="Producto..."
            />
            <button
              className="search-btn"
              style={{ color: "#f2f2f2", textDecoration: "none" }}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Toolbar;

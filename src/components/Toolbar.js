import { useState } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import AddProductModal from "./AddProductModal";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
function Toolbar(props) {
  const sortBy = props.sortby;
  const setSortBy = props.setsortby;
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [show, setShow] = useState(false);

  return (
    <section className="toolbar">
      <div className="toolrow  flex-column flex-lg-row justify-content-between">
        <div className="add-product">
          <Button
            onClick={() => setShow(true)}
            variant="contained"
            color="primary"
          >
            Agregar un producto &nbsp;&nbsp;<i className="fa fa-plus"></i>
          </Button>

          <AddProductModal onClose={() => setShow(false)} show={show} />
        </div>
        <div className="search-bar">
          <div className="d-flex">
            <form
              noValidate
              autoComplete="off"
              style={{ display: "flex", alignItems: "center" }}
            >
              <TextField
                variant="outlined"
                placeholder="Producto..."
                inputProps={{ "aria-label": "description" }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </form>
          </div>
        </div>
        <div className="select-sort-by">
          <FormControl
            className="select-sort-by"
            variant="outlined"
            style={{
              minWidth: 220,
              margin: 1,
              color: "white",
              borderColor: "white",
            }}
          >
            <InputLabel
              id="demo-simple-select-outlined-label"
              className="select-sort-by"
              style={{ color: "white" }}
            >
              Ordenar por...
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              className="select-sort-by"
              value={age}
              onChange={handleChange}
              label="Ordenar por..."
              style={{
                color: "white !important",
                borderColor: "white !important",
                placeholder: "white",
              }}
            >
              <MenuItem value="mejor_puntaje">
                <em>Mejor puntaje</em>
              </MenuItem>
              <MenuItem value="peor_puntaje">Peor puntaje</MenuItem>
              <MenuItem value="mas_barato">Mas barato</MenuItem>
              <MenuItem value="mas_caro">Mas caro</MenuItem>
              <MenuItem value="nombre_ascendente">Nombre ascendente</MenuItem>
              <MenuItem value="nombre_descendente">Nombre descendente</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </section>
  );
}

export default Toolbar;

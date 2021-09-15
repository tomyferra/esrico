import Toolbar from "./Toolbar";
import CardList from "./CardList";
import { useState } from "react";
import { data } from "../data";

function BodyPage() {
  const [sortBy, setSortBy] = useState("mejor_puntaje");
  return (
    <>
      <Toolbar sortby={sortBy} setsortby={setSortBy} />
      <CardList data={data} />
    </>
  );
}
export default BodyPage;

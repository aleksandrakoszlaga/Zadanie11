import React from "react";
import { useParams } from "react-router-dom";

const DeleteProduct = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Usuń Produkt</h1>
      <p>Usuwasz produkt o ID: {id}</p>
    </div>
  );
};

export default DeleteProduct;
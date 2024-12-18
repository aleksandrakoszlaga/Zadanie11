import React from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edytuj Produkt</h1>
      <p>Edytujesz produkt o ID: {id}</p>
    </div>
  );
};

export default EditProduct;
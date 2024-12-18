import React from "react";
import dayjs from "dayjs";

const ProductTable = ({ products, onEdit, onDelete }) => {
  if (!products) return null;

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.image} alt={product.type} width="50" />
            </td>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>${product.price}</td>
            <td>{dayjs(product.date).format("YYYY-MM-DD")}</td>
            <td>
              <button onClick={() => onEdit(product.id)}>Edit</button>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
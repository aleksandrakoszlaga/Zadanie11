import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import EmptyView from "./components/EmptyView";
import LoadingView from "./components/LoadingView";
import ErrorView from "./components/ErrorView";
import { products as mockProducts, typesToImages } from "./mockData";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import ProductList from "./pages/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Simulate fetching data with a delay
  // useEffect(() => {
  //   setTimeout(() => {
  //     try {
  //       const enrichedProducts = mockProducts.map((product) => ({
  //         ...product,
  //         image: typesToImages[product.type], // Add product image based on type
  //       }));
  //       setProducts(enrichedProducts); // Set products to state
  //       setLoading(false);
  //     } catch (err) {
  //       setError(true); // Set error if fetching fails
  //       setLoading(false);
  //     }
  //   }, 1000); // Simulated delay for fetching data
  // }, []);

  // const handleEdit = (id) => alert(`Edit product ${id}`); // Handle edit action
  // const handleDelete = (id) => {
  //   setProducts(products.filter((product) => product.id !== id)); // Handle delete action
  // };

  return (
    <Router>
        {/* Routes */}
        <Routes>
          <Route
            index
          element={<ProductList/>}
              // loading ? (
              //   <LoadingView /> // Show loading view when data is being fetched
              // ) : error ? (
              //   <ErrorView /> // Show error view if there's an error
              // ) : products.length === 0 ? (
              //   <EmptyView /> // Show empty view if there are no products
              // ) : (
              //   <ProductTable
              //     products={products}
              //     onEdit={handleEdit}
              //     onDelete={handleDelete}
              //   /> // Show product table if data is loaded successfully
          />
          <Route path="/add" element={<AddProduct />} /> {/* Add product page */}
          <Route path="/edit/:id" element={<EditProduct />} /> {/* Edit product page */}
          <Route path="/delete/:id" element={<DeleteProduct />} /> {/* Delete product page */}
          <Route path="*" element={<div>hello</div>}/>
        </Routes>
    </Router>
  );
};

export default App;
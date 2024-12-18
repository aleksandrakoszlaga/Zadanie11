import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Import Firestore
import { collection, getDocs } from "firebase/firestore"; // Firestore methods
import ProductTable from "../components/ProductTable";
import EmptyView from "../components/EmptyView";
import LoadingView from "../components/LoadingView";
import ErrorView from "../components/ErrorView";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products"); // Get the "products" collection
        const productsSnapshot = await getDocs(productsCollection); // Fetch documents
        const productsList = productsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id, // Add the document ID to each product
          image: typesToImages[doc.data().type], // Add image based on type
        }));
        setProducts(productsList);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingView />;
  if (error) return <ErrorView />;
  if (products.length === 0) return <EmptyView />;

  return (
    <div className="product-list">
      <h1>Lista Produktów</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductList;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productDescriptions from "../../staticData/productdescrptions";

const ProductInfo = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const product = productDescriptions.find(
      (item) => item.id === parseInt(id)
    );
    setSelectedProduct(product);
  }, [id]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pro-info">
      <div className="pro-wrapper container">
        <div className="pro-details">
          <div className="pro-image">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
          </div>
          <div className="pro-description">
            <h2 className="pro-name">{selectedProduct.name}</h2>
            <p className="pro-type">Type: {selectedProduct.type}</p>
            <p className="pro-rating">Rating: {selectedProduct.rating}</p>
            <div className="pro-price">
              <p className="p-price">
                Previous Price: <del>${selectedProduct.prevPrice}</del>
              </p>
              <p className="c-price">Price: ${selectedProduct.currentPrice}</p>
            </div>
            <div className="pro-summary">
              <h3 className="descri">Description</h3>
              <p className="summery">{selectedProduct.description}</p>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

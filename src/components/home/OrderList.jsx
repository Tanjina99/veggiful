import React from "react";
import productDescriptions from "../../staticData/productdescrptions";

const OrderList = () => {
  return (
    <div className="orderlist">
      <div className="orderlist-wrapper container">
        <div className="table-list">
          <h2>Product Table</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Previous Price</th>
                <th>Current Price</th>
                <th>Type</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {productDescriptions.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.prevPrice}</td>
                  <td>{product.currentPrice}</td>
                  <td>{product.type}</td>
                  <td>{product.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

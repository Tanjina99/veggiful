import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import { useParams } from "react-router-dom";
import productDescriptions from "../../staticData/productdescrptions";
import { FaLocationDot, FaUserClock, FaKey } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import BasicInformation from "./BasicInformation";
import OrderList from "./OrderList";
import ProductInfo from "./ProductInfo";

const CheckoutForm = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState("productinfo");

  useEffect(() => {
    const product = productDescriptions.find(
      (item) => item.id === parseInt(id)
    );
    setSelectedProduct(product);
  }, [id]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Navbar />

      <div className="main-container container">
        <div className="sidebar">
          <div className="profile-picture-container">
            <div className="profile-picture">
              <img src="/images/empty-img.jpg" alt="Profile" />
            </div>
          </div>
          <div
            className={`sidebar-section ${
              activeSection === "productinfo" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("productinfo")}
          >
            <GiFruitBowl size={16} />
            <h3 className="info">Product Information</h3>
          </div>
          <div
            className={`sidebar-section ${
              activeSection === "basicInformation" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("basicInformation")}
          >
            <FaRegUser size={16} />
            <h3 className="info">Basic Information</h3>
          </div>
          <div
            className={`sidebar-section ${
              activeSection === "address" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("address")}
          >
            <FaLocationDot size={16} />
            <h3 className="info">Address</h3>
          </div>
          <div
            className={`sidebar-section ${
              activeSection === "orderList" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("orderList")}
          >
            <AiOutlineBars size={16} />
            <h3 className="info">Order List</h3>
          </div>
          <div
            className={`sidebar-section ${
              activeSection === "review" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("review")}
          >
            <FaUserClock size={16} />
            <h3 className="info">Review</h3>
          </div>
          <div
            className={`sidebar-section ${
              activeSection === "changePassword" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("changePassword")}
          >
            <FaKey size={16} />
            <h3 className="info">Change Password</h3>
          </div>
        </div>

        <div className="product-list-container">
          {activeSection === "productinfo" && <ProductInfo />}
          {activeSection === "basicInformation" && <BasicInformation />}
          {activeSection === "orderList" && <OrderList />}
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default CheckoutForm;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const OrderDetails = () => {
  const product = useLoaderData();

  const {image, title, price, description} = product;

  return (

    <div className="hero bg-base-200 p-8 mb-8">
    <div className="hero-content flex-col lg:flex-row">
      <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="py-6">{description.slice(0,100)}</p>
        <p className="pb-6">${price}</p>
        <Link to ="/orders"><button className="btn btn-info hidden lg:block">Back Orders</button></Link>
      </div>
    </div>
  </div>

  );
};

export default OrderDetails;

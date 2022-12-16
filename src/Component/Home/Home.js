import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

import "./Home.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //   axios.get("https://fakestoreapi.com/products")
    axios.get("./Orders.json").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="py-8 bg-info  text-center relative">
        <div className="flex items-center justify-center relative">
          <p className="my-2 text-lg font-semibold text-white flex items-center ">
            More Super Market{" "}
            <span>
              <TiTick className="ml-2 border-4 border-white rounded-full" />
            </span>
          </p>
          <div className="form-control absolute right-10">
            <input
              type="checkbox"
              className="toggle  text-info bg-info border border-info"
              checked
            />
          </div>
        </div>
        {/* popup message */}
          <div className="add w-10/12 lg:w-6/12 rounded-md bg-white shadow-xl py-2 px-4" >
        <h2 className="text-lg font-semibold">Share More Earn More</h2>
          <p className="text-left lg:text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, cupiditate.</p>
          <hr />
          <div className="flex justify-between items-center">
            <p className="font-semibold text-orange-600">more information</p>
            <button className="btn btn-sm btn-success px-3 py-2 text-white"><BsWhatsapp className="mr-2 text-lg"/>What'sApp</button>
        </div>
        </div>

      </div>

{/* Overview */}
<div className="flex justify-around mt-28">
  <h2>Overview</h2>
  <p className="flex items-center">Lastweek <span><AiOutlineDown className="ml-2"/></span> </p>
</div>

{/* Dashboard */}
<div className="grid grid-cols-2 gap-5 text-center my-5 mx-8">
<div className="shadow-xl p-5 bg-base-100 ">
  <h3 className="font-semibold text-slate-400">ORDERS</h3>
  <h3 className="font-semibold text-2xl">33</h3>
</div>
<div className="shadow-xl p-5 bg-base-100 rounded-xl">
  <h3 className="font-semibold text-slate-400">TOTAL SOLD</h3>
  <h3 className="font-semibold text-2xl">$2,918</h3>
</div>
<div className="shadow-xl p-5 bg-base-100 rounded-xl">
  <h3 className="font-semibold text-slate-400">STORE VIEW</h3>
  <h3 className="font-semibold text-2xl">301</h3>
</div>
<div className="shadow-xl p-5 bg-base-100 rounded-xl">
  <h3 className="font-semibold text-slate-400">PRODUCT VIEW</h3>
  <h3 className="font-semibold text-2xl">19,121</h3>
</div>
</div>

{/* Active Orders */}
<div className="flex justify-around  my-5">
  <h2>Active Orders </h2>
  <p className="flex items-center">View All<span><IoIosArrowForward className="ml-2"/></span> </p>
</div>

{/* Status */}
<div className="flex justify-around items-center mb-28">
<p className="btn btn-sm border-0 btn-info text-white">Pending (150)</p>
<p className="btn btn-sm border-0 bg-slate-400 text-slate-800">Accepted (50)</p>
<p className="btn btn-sm border-0 bg-slate-400 text-slate-800">Shipped (350)</p>
</div>


{/* Orders Status Section */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5">
        {products.map((product) => (
          product.status === "pending" &&
          <div>

          <div className="px-5 py-2 mx-5 rounded-lg bg-base-100 shadow-xl lg:h-full">
          <div className="flex justify-between">
          <p className="font-semibold">Order: #{product.id}</p>
          <p>16/12/22</p>
          </div>

            <div className="flex justify-between rounded-md items-center py-2">
            <div className="flex">
            <img className="w-12 lg:w-24" src={product.image} alt=""/>
            <div className="px-4">
            <h2 className="">1 unit</h2>
            <p className="text-info font-semibold">${product.price}</p>
            </div>
            </div>
             {
                product.payment === "PAID" ?  <button className="bg-green-100 p-2  rounded-lg font-semibold text-green-500">{product.payment}</button>  : <button  className="bg-orange-100 p-2  rounded-lg font-semibold text-orange-500">{product.payment}</button>  
            }
            </div>


            <hr />
            <div className="mt-2 flex justify-between">
            <div>
            {
                product.status === "confirmed" ? <p className="rounded-lg font-semibold text-green-500 flex items-center"><span className="badge badge-xs mr-2 badge-success"></span>{product.status}</p> : <p className="rounded-lg font-semibold text-orange-500"><span className="badge badge-xs mr-2 badge-error"></span>{product.status}</p>
            }
            </div><Link to = {`/orders/${product.id}`}><button className="btn btn-xs btn-outline">Details <FaAngleRight/> </button></Link>
            
            </div>

          </div>
          </div>
        ))}
      </div>


      
  </div>
  );
};

export default Home;

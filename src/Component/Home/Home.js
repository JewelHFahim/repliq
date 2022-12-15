import React from "react";
import { TiTick } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import "./Home.css"

const Home = () => {
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
          <div className="add w-10/12 rounded-md bg-white shadow-xl py-2 px-4" >
        <h2 className="text-lg font-semibold">Share More Earn More</h2>
          <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, cupiditate.</p>
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


    </div>
  );
};

export default Home;

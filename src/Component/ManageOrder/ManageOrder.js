import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiShare2 } from 'react-icons/fi';
import { FaPhoneSquareAlt, FaWhatsappSquare } from 'react-icons/fa';


const ManageOrder = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
      axios.get("./order.json").then((response) => {
        setProducts(response.data);
      });
    }, []);

  return (
    <div className="mb-14">

      {/* Header Portion */}
      <div className="py-5 bg-info  text-center">
        <div className="relative">
          <p className="my-2 text-xl font-semibold text-white flex items-center justify-center"> <FiArrowLeft className="absolute left-10 text-3xl"/>Order #17453</p>
        </div>
      </div>

<div className="lg:px-40">

  {/*All Orders */}
  <div className="">
        {products.map((product) => (
          <div>
          <div className="px-5 py-2 mx-5 border rounded-lg bg-base-100 lg:h-full">
            <div className="flex justify-between rounded-md items-center py-2">
            <div className="flex">
            <img className="w-12 lg:w-24" src={product.image} alt=""/>
            <div className="px-4">
            <h2 className="">{product.title}</h2>
            <h2 className="">1 unit</h2>
            <p className="mt-2 font-semibold"> <span className="bg-blue-200 p-1 border border-blue-400 rounded-lg">2</span> * {product.price}</p>
            </div>
            </div>
            <p className="mr-6">Price: { 2 * product.price}</p>
            </div>
          </div>
          </div>
        ))}

        <div className="px-5">
        <table className="table w-full">
        <tbody>

        <tr className="">
        <td>Items Total</td>
        <td className="text-right"> ${ 1198 + 113.98 }  </td>
      </tr>

        <tr>
        <td>Delivery</td>
        <td className="text-right">$20</td>
      </tr>

        <tr className="font-semibold">
        <td>Grand Total</td>
        <td className="text-right"> ${ 1198 + 113.98  +20 }</td>
      </tr>
      </tbody>
      </table>
        </div>
        <hr />
      </div>

        {/* Share Details */}
        <div className="px-5 mx-5 bg-base-100 py-5">
        <div className="mt-2 flex justify-between">
        <p>CUSTOMER DETAILS</p>
           <div className='flex items-center text-xl text-info font-semibold'>
           <FiShare2/>
           <p className='ml-2'>Share</p>
           </div>
            </div>
            <hr />
        </div>

        
        {/* Customer Details */}
        <div className="px-5">
        <table className="table w-full">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>Solaiman Shukhon</td>
          </tr>
        <tr>
        <td>Mobile:</td>
        <td className="flex items-center justify-between">+8801712121212
          <div className="flex text-4xl"><FaPhoneSquareAlt className=" text-info mr-2"/>
          <FaWhatsappSquare className="text-green-700"/></div>
        </td>
      </tr>
        <tr>
          <td>Address:</td>
          <td>House-1, Road-12, Gulshan-1</td>
      </tr>
        <tr>
          <td>Pin Code: </td>
          <td>4TO63</td>
      </tr>
        <tr>
          <td>City</td>
          <td>Dhaka</td>
      </tr>
        <tr>
          <td>Payment</td>
          <td className="flex  justify-between">Cash on Delivery
           <button  className="bg-orange-100 p-2  rounded-lg font-semibold text-orange-500">ODD</button> 
          </td>
      </tr>
      </tbody>
      </table>

        </div>
        <div className="mx-5 p-5 flex justify-around">
          <button className="btn btn-outline btn-error">Reject Order</button>
          <button className="btn btn-success">Accept Order</button>
        </div>
</div>
    </div>
  );
};

export default ManageOrder;

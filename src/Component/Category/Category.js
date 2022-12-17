import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { FiShare2 } from 'react-icons/fi';
import { BsSearch, BsToggleOn } from 'react-icons/bs';

const Category = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get("./Orders.json").then((response) => {
        setProducts(response.data);
      });
    }, []);


    return (
    <div className="mb-14">
        {/* Header Portion */}
      <div className="py-5 bg-info  text-center">
        <div className="flex items-center justify-center relative">
          <p className="my-2 text-lg font-semibold text-white ">
            Categories
          </p>
          <BsSearch className="absolute right-20 text-xl font-semibold text-white" />
        </div>

      <div className="flex justify-around pt-2 text-white">
        <button className="font-bold underline"> Products </button>
        <button className="font-semibold"> Category </button>
    </div>
      </div>

    {/*All Items*/}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5">
        {products.map((product) => (
          <div key = {product.id}>
          <div className="px-5 py-2 mx-5 rounded-lg bg-base-100 shadow-xl lg:h-full">
            <div className="flex justify-between rounded-md items-center py-2">
            <div className="flex">
            <img className="w-12 lg:w-24" src={product.image} alt=""/>
            <div className="px-4">
            <h2 className="">{product.title}</h2>
            <h2 className="">1 unit</h2>
            <p className="text-success font-semibold">In Stock</p>
            </div>
            </div>
          <div className='text-4xl text-info'><BsToggleOn/></div>
            </div>
            <hr />
            <div className="mt-2 flex justify-center">
           <div className='flex items-center text-lg font-semibold'>
           <FiShare2/>
           <p className='ml-4'>Share Products</p>
           </div>
            </div>
          </div>
          </div>
        ))}
      </div>

    {/* Add Product Button */}
    <div className="relative w-full flex justify-center">
      <button className=" text-white bg-orange-500 p-2 rounded-lg mb-20 text-xl font-semibold flex items-center
        bottom-1 lg:right-0 fixed"> <MdOutlineAddCircleOutline className="mr-1 text-xl"/> Add new productt </button>
      </div>



    </div>
  );
};

export default Category;
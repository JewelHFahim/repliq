import axios from "axios";
import { useEffect, useState } from "react";
import { GoSettings } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //   axios.get("https://fakestoreapi.com/products")
    axios.get("./Orders.json").then((response) => {
      setProducts(response.data);
    });
  }, []);
  console.log(products);

  return (
    <div>
        {/* Header Portion */}
      <div className="py-5 bg-info  text-center border border-pink-700">
        <div className="flex items-center justify-center relative">
          <p className="my-2 text-lg font-semibold text-white ">
            All Orders {products.length}
          </p>
          <GoSettings className="absolute right-20 text-xl font-semibold text-white" />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="input  input-bordered w-full max-w-xs"
        />
      </div>

    {/* Order Short Summery */}
      <div className="flex justify-around pt-2">
        <button className="bg-info rounded-lg py-1 px-2 active"> All Time ({products.length})</button>
        <button className="bg-slate-300 rounded-lg py-1 px-2"> Today(0)</button>
        <button className="bg-slate-300 rounded-lg py-1 px-2"> Yesterday(0)</button>
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5">
        {products.map((product) => (

          <div>

          <div className="px-5 py-2 mx-5 border border-red-500 rounded-lg bg-base-100 shadow-xl">
          <div className="flex justify-between">
          <p className="font-semibold">Order: #{product.id}</p>
          <p>16/12/22</p>
          </div>

            <div className="flex justify-between rounded-md items-center py-2 border border-green-400">
            <div className="flex border border-red-500">
            <img className="w-12" src={product.image} alt=""/>
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
            </div>
            <button className="btn btn-xs btn-outline ">Details <FaAngleRight/> </button>
            </div>

          </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Products;

import React, { useContext, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import { BsFillCircleFill } from 'react-icons/bs';

import axios from 'axios';
import { UserContext } from '../../Context/AuthProvider';

const Account = () => {

  const [products, setProducts] = useState([]);
  const {logOut} = useContext(UserContext);

  useEffect(() => {
    axios.get("./clientOrder.json").then((response) => {
      setProducts(response.data);
    });
  }, []);


  const handleLogout = (adta) =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }

    return (
        <div className="mb-20">

        {/* Header Portion */}
        <div className="p-5 bg-info  text-center">
          <div className="relative text-2xl">
            <p className="my-2 text-2xl font-semibold text-white flex items-center justify-center"> <FiArrowLeft className="absolute left-10"/>Payment 
             <AiOutlineLogout onClick={handleLogout} className="absolute right-10" />
            </p>
          </div>
        </div>

        <div className='px-8 pt-5 bg-base-100 lg:px-20'>
         <div className='flex justify-between'>
           <p className='text-lg'>Default Method </p>
           <p className='flex items-center'> Both Options <FaAngleRight className='ml-1'/></p>
         </div>
        <div className='flex justify-between mt-5 pb-2'>
          <p className='text-lg'>Payment Profile</p>
          <p className='flex items-center'> Bank Account <FaAngleRight className='ml-1'/></p>
        </div>

        <hr />
        {/* Payment Overview */}
        <div className='mb-5'>
        <div className='flex justify-between my-5'>
          <p className='text-lg'>Payment Profile</p>
          <p className='flex items-center'> Lifetime <FaAngleDown className='ml-1'/></p>
        </div>

        <div className='flex justify-center gap-5 text-center text-white'>
        <div className='p-6 rounded-lg bg-orange-500'>
          <p className='text-left font-semibold'>AMOUNT ON HOLD</p>
          <h2 className='text-2xl font-bold'>$701</h2>
        </div>

        <div className=' p-6 rounded-lg bg-green-500'>
          <p className='text-left font-semibold'>AMOUNT RECIEVED</p>
          <h2 className='text-2xl font-bold'>$2,319</h2>
        </div>
        </div>
        </div>

        <hr />
        {/* Order Short Summery */}
        <div className='mb-5'>
          <h2 className='text-lg font-semibold my-4'>Transactions</h2>
          <div className="flex justify-between">
            <button className="bg-slate-200 rounded-2xl py-1 px-3 active"> On Hold (12)</button>
            <button className="text-white bg-info font-semibold rounded-2xl py-1 px-3"> Payments (13)</button>
            <button className="bg-slate-200 rounded-2xl py-1 px-3"> Refunds (1)</button>
          </div>
        </div>


      {/*All Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {products.map((product) => (

          <div className=" p-2 rounded-lg bg-base-100 lg:h-full border flex justify-center items-center">

          <div className='w-14 lg:w-24 mr-4'>
            <img src={product.image} alt="" />
          </div>

          <div className='w-full'>
          <div className='flex justify-between w-full text-lg font-semibold'>
            <p className=''>Order #{product.id}</p>
            <p className='text-info'>${product.price}</p>
          </div>

          <div className='flex justify-between w-full mt-2'>
            <p>17.12.22 01.12 am</p>
            <p  className='flex justify-center items-center'> <BsFillCircleFill className='mr-2 text-sm text-green-500'/> Received</p>
          </div>

          </div>
          </div>
        ))}
      </div>

        </div>

        </div>
    );
};

export default Account;
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';


const Navbar = () => {

  const menuItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to ="/login">Login</Link></li>
    </>
  )

  return (
    
    <div className="">
    {/* Large Devices */}

    <div className="navbar bg-base-100 hidden lg:block">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Repliq</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {menuItems}
        </ul>
      </div>
    </div>

    {/* Small Devices */}

   <div className="btm-nav bg-base-100 z-10 lg:hidden ">

 <Link to="/"> <button>
    <AiOutlineHome className="text-2xl bg-active"/>
    <span className="btm-nav-label text-[12px]">Home</span>
  </button></Link>

 <Link to="/orders"> <button>
   <AiOutlineShopping className="text-2xl bg-active"/>
    <span className="btm-nav-label text-[12px]">Orders</span>
  </button>
</Link>


<Link to="/categories"><button >
    <BiCategory className="text-2xl"/>
    <span className="btm-nav-label text-[12px]">Products</span>
  </button>
  </Link>

<Link to="/manageorder">
<button>
    <FiLayers className="text-2xl"/>
    <span className="btm-nav-label text-[12px]">Manage</span>
  </button>
</Link>

  <button className="text-2xl">
    <AiOutlineUser />
    <span className="btm-nav-label text-[12px]">Account</span>
  </button>

  </div>


    </div>
  );
};

export default Navbar;

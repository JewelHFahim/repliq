import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShopping, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';
import { UserContext } from "../../Context/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(UserContext);

  const handleLogout = (adta) =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }

  const menuItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to ="/orders">Orders</Link></li>
      <li><Link to ="/categories">Products</Link></li>
      <li><Link to ="/manageorder">Manage</Link></li>
      <li><Link to ="/account">Account</Link></li>

    {
      user?.email ?
      <>
      <li><Link onClick={handleLogout}>Logout</Link></li>
      <li><Link>{user?.email}
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt="" />
        </div>
      </label>
       </Link></li>
      </>
      :

      <li><Link to ="/login">Login</Link></li>

    }
      
    </>
  )

  return (
    
    <div className="">
    {/* Large Devices */}

    <div className=" hidden lg:flex navbar bg-base-100">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost normal-case text-xl">Repliq</a>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menuItems}
    <li></li>
    </ul>
  </div>
</div>

    {/* Small Devices */}

   <div className="btm-nav bg-base-100 z-10 lg:hidden ">


 <NavLink to="/" isActive > 
  <button>
    <AiOutlineHome className="text-2xl bg-active"/>
    <span className="btm-nav-label text-[12px]">Home</span>
  </button>
  </NavLink>

 <NavLink to="/orders" isActive> <button>
   <AiOutlineShopping className="text-2xl bg-active"/>
    <span className="btm-nav-label text-[12px]">Orders</span>
  </button>
</NavLink>


<NavLink to="/categories" isActive
 ><button >
    <BiCategory className="text-2xl"/>
    <span className="btm-nav-label text-[12px]">Products</span>
  </button>
</NavLink>

<NavLink to="/manageorder" isActive>
<button>
    <FiLayers className="text-2xl"/>
    <span className="btm-nav-label text-[12px]">Manage</span>
  </button>
</NavLink>

<NavLink to = "/account" isActive>
<button className="text-2xl">
    <AiOutlineUser />
    <span className="btm-nav-label text-[12px]">Account</span>
  </button>
</NavLink>

  </div>
    </div>
  );
};

export default Navbar;

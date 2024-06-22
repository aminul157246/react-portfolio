import { FaAnglesRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
    return (
        <div>
            <nav className="menu">
                <ul>
                    <NavLink className='flex items-center text-2xl justify-right px-4 hover:text-yellow-300' to='/'>Home <span className='pl-8 '><FaAnglesRight /></span></NavLink>
                    <NavLink className='flex items-center text-2xl justify-right px-4 hover:text-yellow-300' to='/about'>About <span className='pl-8 '><FaAnglesRight /></span></NavLink>
                    <NavLink className='flex items-center text-2xl justify-right px-4 hover:text-yellow-300' to='/project'>Project <span className='pl-8 '><FaAnglesRight /></span></NavLink>
                    <NavLink className='flex items-center text-2xl justify-right px-4 hover:text-yellow-300' to='/blog'>Blogs <span className='pl-8 '><FaAnglesRight /></span></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default MenuItems;
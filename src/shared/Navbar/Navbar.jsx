import Toggle from './Toggle/Toggle';
import logo from '../../assets/pro-logo.png';
import { RiCornerUpRightDoubleFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <div className="navbar bg-black py-3 px-8 border-b-[1px]">
            <div className="navbar-start">
                <Toggle />
            </div>
            <div className="navbar-center">
                <NavLink className='lg:w-48 w-24 ' to={'/'}> <img src={logo} alt="" /> </NavLink>
            </div>
            <div className="navbar-end">
                <NavLink className='text-[#29A587] lg:text-xl text-sm font-semibold flex   items-center gap-2' to={'/contact'}>Let's Talk <span className='font-bold lg:text-2xl'><RiCornerUpRightDoubleFill /></span></NavLink>

            </div>
        </div>
    </div>
    );
};

export default Navbar;
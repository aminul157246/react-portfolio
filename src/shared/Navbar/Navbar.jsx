import React from 'react';
import Toggle from './Toggle/Toggle';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-8 bg-red-100 px-12'>
           <div className="flex justify-between">
           <Toggle/>
            <NavLink className="font-bold" to={'/'}>AMINUL BRAND</NavLink>
            <h3>LET"S  TALK</h3>
           </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> */}
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">AMINUL</a>
                </div>
                <div className="flex-none">
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <button className='pr-6'>hello</button>
                            <label htmlFor="my-drawer-4" className="drawer-button btn">O</label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu text-2xl space-y-4   text-center pt-12 w-80 min-h-full bg-black  text-white">
                                {/* Sidebar content here */}
                                <NavLink>AMINUL <span className='pl-12'>X</span></NavLink>
                                <div className='divider border-b-2'></div>
                                <NavLink className='hover:text-yellow-400' to='/'>Home <span className='pl-36'>Go</span></NavLink>
                                <NavLink to='/about'>About</NavLink>
                                <NavLink to='/project'>Project</NavLink>
                                <NavLink to='/blog'>Blog</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handlesignOut = () => {
        logOut()
            .then(res => { })
            .catch(err => { })
    }
    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-success lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><Link to='/' >Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.email ?
                                <ul >
                                    <li><Link to='/myReviews'>My reviews</Link></li>
                                    <li><Link to='/addService'>Add Service</Link></li>
                                    <button onClick={handlesignOut} className="btn btn-outline capitalize">Logout</button>
                                </ul>
                                :
                                <Link to='/login' className="btn btn-outline capitalize m-auto">Login</Link>
                        }
                    </ul>

                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl">Sports fotoHunter</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mr-3'><Link to='/'>Home</Link></li>
                    <li className='mr-3'><Link to='/services'>Services</Link></li>
                    <li className='mr-3'><Link to='/blog'>Blog</Link></li>
                    {user?.email ?
                        <ul className="menu menu-horizontal p-0">
                            <li className='mr-3'><Link to='/myReviews'>My reviews</Link></li>
                            <li className='mr-3'><Link to='/addService'>Add Service</Link></li>
                            <button onClick={handlesignOut} className="btn btn-outline btn-success capitalize">Logout</button>
                        </ul>
                        :
                        <Link to='/login' className="btn btn-outline btn-success capitalize">Login</Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;
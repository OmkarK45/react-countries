import React from 'react';
import {Link} from 'react-router-dom'


const Nav = (props) => {
    return ( 
        <React.Fragment>
            <Link to="/" className='p-5'>Home</Link>
            <Link to="/all" className='p-5'>All</Link>
            <Link to="/all/:country" className='p-5'>Country</Link>
        </React.Fragment>
     );
}
 
export default Nav;
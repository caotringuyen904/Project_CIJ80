import React from "react";
import {NavLink} from "react-router-dom"
import { Badge } from 'react-bootstrap';

const activeClass =(params) =>(params.isActive ? "active-item" : "")

function Header({cartNumber}) {
    return ( <>
        <div className="header-container"> 
            <ul>
                <li className="logo" style={{float:"left"}}>
                    <NavLink to="/home" className={activeClass}>NIKE</NavLink>
                </li>
                <li>
                    <NavLink to ="/admin" className={activeClass}>Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={activeClass}>Cart
                        <Badge style={{marginLeft:5}} bg="secondary">{cartNumber}</Badge>
                    </NavLink>
                </li>
                 <li>
                    <NavLink to ="/home" className={activeClass}>Home</NavLink>
                </li>
            </ul>
        </div>
    </> );
}

export default Header;
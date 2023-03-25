import React from "react";
import {NavLink} from "react-router-dom"
import { Badge } from 'react-bootstrap';

const activeClass =(params) =>(params.isActive ? "active-item" : "")

function Header({cartNumber}) {
    return ( <>
        <div className="header-container">
            <ul>
                <li className="logo">
                    <NavLink to="/home" className={activeClass}><h3>UNIQLO</h3></NavLink>
                </li>
                <li>
                    <NavLink to ="/home" className={activeClass}>Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/admin" className={activeClass}>Admin</NavLink>
                </li>
                <li style={{float:"right"}}>
                    <NavLink to="/cart" className={activeClass}>Cart
                        <Badge style={{marginLeft:5}} bg="secondary">{cartNumber}</Badge>
                    </NavLink>
                </li>
            </ul>
        </div>
    </> );
}

export default Header;
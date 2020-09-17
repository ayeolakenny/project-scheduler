import React from 'react';
import { NavLink } from 'react-router-dom'

export default () =>(
  <ul className="right">
    <li><NavLink to="/signup">Signup</NavLink></li>
    <li><NavLink to="/signin">Login</NavLink></li>
  </ul>
)



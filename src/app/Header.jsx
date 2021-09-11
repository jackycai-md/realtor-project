import React from 'react';
import { Link, navigate } from "@reach/router";
import logo from '../static/realtor-com.png';

export default function Header({ user }) {
  return (
    <nav className="header">
      <img
        className="logo"
        src={logo}
        alt="realtor.com"
        onClick={() => navigate('/')}
      />
      <h1 className="title">Earthquake Zen Garden</h1>
      {user
        ? <Link to="/user-profile" className="user-link">Welcome {user.firstName}</Link>
        : null} 
    </nav>
  );
};

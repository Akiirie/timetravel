import logo from './logo.svg';
import './Header.css';
import React from 'react';

function Header() {
    return (
        <header>
            <img src={logo} className="logo_header" />
            <input type="text" className="searchBar" placeholder="Wpisz tytuł gry" />
            <menu>
                <ul>
                    <li><a href="#"><i className="fa fa-fw fa-search"></i></a></li>
                    <li><a href="#"><h1>NOWOŚCI</h1></a></li>
                    <li><a href="#"><h1>RANKINGI</h1></a></li>
                    <li><a href="#"><h1>O PLANSZEO</h1></a></li>
                    <li><a href="#"><h1>WSPÓŁPRACA</h1></a></li>
                    <li><a href="#"><h1>BLOG</h1></a></li>
                    <li><a href="#"><i className="fa fa-fw fa-user"></i></a></li>
                </ul>
            </menu>
        </header>
    );
}

export default Header;

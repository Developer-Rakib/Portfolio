import React from 'react';

const Header = () => {
    return (
        <header>

            <div class="user">
                <img src="img/me.jpg" alt=""/>
                    <h3 class="name">shaikh anas</h3>
                    <ul>
                        <li></li>
                    </ul>
            </div>

            <nav class="navbar">
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#education">education</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
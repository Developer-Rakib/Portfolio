import React from 'react';
import me from '../../img/me.jpg';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { CgFacebook } from 'react-icons/cg';
import { AiOutlineTwitter } from 'react-icons/ai';

const Header = () => {
    return (
        <header>

            <div class="user">
                <img src={me} alt="" />
                <h3 class="name">Tazul Islam Rakib</h3>
                <ul>
                    <li><a href="" target="_blank" rel="noopener noreferrer"><GoMarkGithub></GoMarkGithub></a></li>
                    <li><a href="" target="_blank" rel="noopener noreferrer"><GrLinkedinOption></GrLinkedinOption></a></li>
                    <li><a href="" target="_blank" rel="noopener noreferrer"><CgFacebook></CgFacebook></a></li>
                    <li><a href="" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter></AiOutlineTwitter></a></li>
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